import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const urlArg = args.indexOf('--url');
const targetArg = args.indexOf('--target');

if (urlArg === -1 || targetArg === -1) {
  console.log('Usage: node scripts/firecrawl-fetch.mjs --url <url> --target <old|new>');
  process.exit(1);
}

const url = args[urlArg + 1];
const target = args[targetArg + 1];

if (target !== 'old' && target !== 'new') {
  console.error('Target must be "old" or "new"');
  process.exit(1);
}

const apiKey = process.env.FIRECRAWL_API_KEY;

if (!apiKey) {
  console.error('Error: FIRECRAWL_API_KEY environment variable is not set.');
  process.exit(1);
}

async function fetchSiteData() {
  console.log(`Fetching data from ${url} for target "${target}"...`);

  try {
    // Firecrawl Crawl API
    const response = await fetch('https://api.firecrawl.dev/v1/crawl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        url: url,
        limit: 100, // Adjust as needed
        scrapeOptions: {
          formats: ['markdown', 'html']
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Firecrawl API error: ${response.status} - ${errorText}`);
    }

    const { id } = await response.json();
    console.log(`Crawl started. ID: ${id}. Waiting for completion...`);

    // Poll for status
    let status = 'processing';
    let crawlData;

    while (status === 'processing' || status === 'scraping') {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      const statusResponse = await fetch(`https://api.firecrawl.dev/v1/crawl/${id}`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      
      const result = await statusResponse.json();
      status = result.status;
      
      if (status === 'completed') {
        crawlData = result.data;
      } else if (status === 'failed') {
        throw new Error(`Crawl failed: ${result.error}`);
      } else {
        console.log(`Status: ${status}...`);
      }
    }

    const targetDir = path.join(__dirname, `../client/${target}`);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    console.log(`Saving ${crawlData.length} pages to ${targetDir}...`);

    for (const page of crawlData) {
      if (!page.markdown) continue;
      
      const fileName = page.metadata?.title 
        ? `${page.metadata.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`
        : `page_${Math.random().toString(36).substring(7)}.md`;
      
      const filePath = path.join(targetDir, fileName);
      fs.writeFileSync(filePath, page.markdown);
      
      // Also save metadata/json if available
      const jsonPath = filePath.replace('.md', '.json');
      fs.writeFileSync(jsonPath, JSON.stringify(page, null, 2));
    }

    console.log('Data fetching and saving completed successfully.');
  } catch (error) {
    console.error('Error fetching site data:', error.message);
    process.exit(1);
  }
}

fetchSiteData();
