# Content Management Guide

This guide explains how to update content on the JColeman Consulting website.

## Table of Contents
- [Articles](#articles)
- [Testimonials](#testimonials)
- [Team Members](#team-members)
- [Job Openings](#job-openings)

---

## Articles

**File location:** `data/articles/articles.ts`

### Adding a New Article

Add a new object to the `articles` array:

```typescript
{
  slug: 'your-article-url-slug',
  title: 'Your Article Title',
  excerpt: 'A brief summary shown in article listings (1-2 sentences)',
  content: `Your full article content here...

## Use Markdown Headings

Regular paragraphs work like this.

**Bold text** and lists:
- Item one
- Item two

1. Numbered lists
2. Work too`,
  date: '2025-03-15', // YYYY-MM-DD format
  author: 'JColeman Consulting',
  categories: ['Tax', 'Business'], // Choose from existing categories
  tags: ['tax credits', 'small business'],
  featured: false, // Set to true for homepage feature
}
```

### Editing an Existing Article

Find the article by its `slug` and update the relevant fields.

### Deleting an Article

Remove the entire object from the array.

---

## Testimonials

**File location:** `data/testimonials/testimonials.ts`

### Adding a New Testimonial

Add a new object to the `testimonials` array:

```typescript
{
  quote: "The testimonial text goes here. Keep it impactful and specific.",
  author: "Client Name",
  title: "CEO", // Their job title
  company: "Company Name",
  companyUrl: "https://company-website.com", // Optional - remove if not needed
}
```

### Notes
- The first testimonial in the array is featured (displays larger)
- Testimonials cycle through 4 accent colors automatically

---

## Team Members

**File location:** `data/team/team.ts`

### Adding a Team Member

```typescript
{
  name: 'Full Name',
  role: 'Job Title',
  image: '/static/images/team/photo.jpg', // Add photo to public/static/images/team/
  bio: 'Brief bio text',
  linkedin: 'https://linkedin.com/in/profile', // Optional
}
```

### Adding Team Photos

1. Add the photo to `public/static/images/team/`
2. Recommended size: 400x400px or larger (square)
3. Use `.jpg` or `.webp` format for best performance

---

## Job Openings

**File location:** `data/careers/positions.ts`

### Adding a Job Opening

```typescript
{
  title: 'Senior Accountant',
  department: 'Accounting',
  location: 'Remote',
  type: 'Full-time', // Full-time, Part-time, Contract
  description: 'Brief role description',
  requirements: [
    'CPA certification required',
    '5+ years experience',
    'Startup experience preferred',
  ],
}
```

---

## Deploying Changes

After making content changes:

1. Save the file
2. Commit to Git: `git add . && git commit -m "Update content"`
3. Push to GitHub: `git push`
4. Vercel will automatically deploy the changes

---

## Need Help?

For technical support or complex changes, contact your developer.

---

## Environment Variables

The following environment variables need to be set in Vercel:

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `RESEND_API_KEY` | Email sending | [resend.com](https://resend.com) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics | GA4 Admin > Data Streams |

To set in Vercel:
1. Go to your project in Vercel Dashboard
2. Settings > Environment Variables
3. Add the variables above
