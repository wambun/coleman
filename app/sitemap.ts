import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/config/site.settings';
import { articles } from '@/data/articles/articles';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;

  // Static pages with their priorities
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: 'about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: 'services/bookkeeping', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/tax', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/cfo', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/hr', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'testimonials', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'careers', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: 'contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'articles', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: 'privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: 'terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const routes = staticRoutes.map((route) => ({
    url: route.path ? `${siteUrl}/${route.path}` : siteUrl,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic article routes
  const articleRoutes = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: article.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...articleRoutes];
}
