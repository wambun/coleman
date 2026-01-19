import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { articles, categories, getFeaturedArticles } from '@/data/articles/articles';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Expert insights on accounting, tax, bookkeeping, and business growth for startups. Read our latest articles from Jay Coleman Consulting.',
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticlesPage() {
  const featuredArticles = getFeaturedArticles();
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
              style={{
                backgroundColor: 'rgba(52, 152, 219, 0.15)',
                color: '#3498db',
              }}
            >
              Insights & Resources
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Expert Financial Insights
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Stay informed with our latest articles on accounting, tax
              strategies, bookkeeping best practices, and tips for growing your
              startup.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="w-full py-16 lg:py-20" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <h2
              className="font-display text-2xl lg:text-3xl font-light mb-8"
              style={{ color: '#0d1c29' }}
            >
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-ui font-medium"
                      style={{
                        backgroundColor: 'rgba(52, 152, 219, 0.15)',
                        color: '#3498db',
                      }}
                    >
                      Featured
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                    >
                      <Calendar className="h-3 w-3" />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3
                    className="font-display text-xl font-normal mb-3 group-hover:underline"
                    style={{ color: '#0d1c29' }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.categories.slice(0, 2).map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center gap-1 text-xs"
                        style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                      >
                        <Tag className="h-3 w-3" />
                        {category}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="w-full py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <span
              className="text-sm font-ui font-medium mr-2"
              style={{ color: '#0d1c29' }}
            >
              Categories:
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="inline-block px-4 py-2 rounded-full text-sm font-ui cursor-pointer transition-colors hover:opacity-80"
                style={{
                  backgroundColor: 'rgba(52, 152, 219, 0.15)',
                  color: '#3498db',
                }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="w-full py-16 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2
            className="font-display text-2xl lg:text-3xl font-light mb-12"
            style={{ color: '#0d1c29' }}
          >
            All Articles
          </h2>
          <div className="space-y-8">
            {sortedArticles.map((article) => (
              <article
                key={article.slug}
                className="group border-b pb-8"
                style={{ borderColor: '#e8eded' }}
              >
                <Link href={`/articles/${article.slug}`} className="block">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="flex items-center gap-1 text-sm"
                          style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                        >
                          <Calendar className="h-4 w-4" />
                          {formatDate(article.date)}
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: 'rgba(13, 28, 41, 0.3)' }}
                        >
                          •
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: '#3498db' }}
                        >
                          {article.categories[0]}
                        </span>
                      </div>
                      <h3
                        className="font-display text-xl lg:text-2xl font-normal mb-3 group-hover:underline transition-all"
                        style={{ color: '#0d1c29' }}
                      >
                        {article.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed line-clamp-2"
                        style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                      >
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className="inline-flex items-center gap-2 text-sm font-ui font-medium group-hover:gap-3 transition-all"
                        style={{ color: '#3498db' }}
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
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
            Have Questions?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Our team is here to help with your accounting, tax, and financial
            questions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#f68212',
              color: '#ffffff',
            }}
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
