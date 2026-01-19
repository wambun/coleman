import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { articles, getArticleBySlug, getRecentArticles } from '@/data/articles/articles';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const recentArticles = getRecentArticles(3).filter((a) => a.slug !== slug);

  // Split content into paragraphs for better rendering
  const contentParagraphs = article.content.split('\n\n').filter((p) => p.trim());

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="w-full py-16 lg:py-24"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-ui mb-8 transition-colors hover:opacity-80"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {article.categories.map((category) => (
                <span
                  key={category}
                  className="inline-block px-4 py-2 rounded-full text-sm font-ui font-medium"
                  style={{
                    backgroundColor: 'rgba(52, 152, 219, 0.15)',
                    color: '#3498db',
                  }}
                >
                  {category}
                </span>
              ))}
            </div>

            <h1
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6">
              <span
                className="flex items-center gap-2 text-sm"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span
                className="flex items-center gap-2 text-sm"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                <Calendar className="h-4 w-4" />
                {formatDate(article.date)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-16 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div
                className="prose prose-lg max-w-none"
                style={{ color: 'rgba(13, 28, 41, 0.85)' }}
              >
                {contentParagraphs.map((paragraph, index) => {
                  // Check if it's a heading
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2
                        key={index}
                        className="font-display text-2xl lg:text-3xl font-light mt-12 mb-6"
                        style={{ color: '#0d1c29' }}
                      >
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3
                        key={index}
                        className="font-display text-xl lg:text-2xl font-light mt-8 mb-4"
                        style={{ color: '#0d1c29' }}
                      >
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  // Check if it's a list
                  if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter((item) => item.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2 my-6">
                        {items.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  // Check if it's a numbered list
                  if (/^\d+\.\s/.test(paragraph) || paragraph.includes('\n1. ')) {
                    const items = paragraph.split('\n').filter((item) => /^\d+\.\s/.test(item));
                    return (
                      <ol key={index} className="list-decimal pl-6 space-y-2 my-6">
                        {items.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item.replace(/^\d+\.\s/, '')}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  // Check for bold text patterns and render
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={index} className="text-base lg:text-lg leading-relaxed mb-6">
                        {parts.map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={i} style={{ color: '#0d1c29' }}>
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return part;
                        })}
                      </p>
                    );
                  }
                  // Regular paragraph
                  return (
                    <p key={index} className="text-base lg:text-lg leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e8eded' }}>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-sm font-ui font-medium"
                    style={{ color: '#0d1c29' }}
                  >
                    Tags:
                  </span>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: '#f9f9f9',
                        color: 'rgba(13, 28, 41, 0.7)',
                      }}
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div
                className="sticky top-24 p-6 rounded-2xl"
                style={{ backgroundColor: '#f9f9f9' }}
              >
                <h3
                  className="font-display text-lg font-normal mb-6"
                  style={{ color: '#0d1c29' }}
                >
                  Recent Articles
                </h3>
                <div className="space-y-6">
                  {recentArticles.slice(0, 3).map((recentArticle) => (
                    <Link
                      key={recentArticle.slug}
                      href={`/articles/${recentArticle.slug}`}
                      className="block group"
                    >
                      <span
                        className="text-xs mb-1 block"
                        style={{ color: '#3498db' }}
                      >
                        {recentArticle.categories[0]}
                      </span>
                      <h4
                        className="font-ui font-medium text-sm group-hover:underline line-clamp-2"
                        style={{ color: '#0d1c29' }}
                      >
                        {recentArticle.title}
                      </h4>
                    </Link>
                  ))}
                </div>

                <div
                  className="mt-8 pt-6 border-t"
                  style={{ borderColor: '#e8eded' }}
                >
                  <h3
                    className="font-display text-lg font-normal mb-4"
                    style={{ color: '#0d1c29' }}
                  >
                    Need Help?
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                  >
                    Our team is ready to assist with your accounting and
                    financial needs.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-ui font-semibold transition-colors"
                    style={{ color: '#3498db' }}
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
            style={{ color: '#ffffff' }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Let us help you build a strong financial foundation for your
            startup.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#f68212',
              color: '#ffffff',
            }}
          >
            Request Information
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
