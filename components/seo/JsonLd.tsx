import { siteConfig } from '@/data/config/site.settings';

// Organization Schema - for the company
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JColeman Consulting',
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/static/images/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1636 Roadrunner Dr',
      addressLocality: 'Roseville',
      addressRegion: 'CA',
      postalCode: '95747',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: siteConfig.email,
    },
    sameAs: [
      siteConfig.linkedin,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema - for local SEO
export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'JColeman Consulting',
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/static/images/logo.png`,
    image: `${siteConfig.siteUrl}/api/og`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1636 Roadrunner Dr',
      addressLocality: 'Roseville',
      addressRegion: 'CA',
      postalCode: '95747',
      addressCountry: 'US',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: [
      'Bookkeeping',
      'Tax Preparation',
      'CFO Services',
      'Accounting',
      'Financial Consulting',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema - for individual service pages
interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'JColeman Consulting',
      url: siteConfig.siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema - for blog/article pages
interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = 'JColeman Consulting',
  image,
}: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'JColeman Consulting',
      url: siteConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/static/images/logo.png`,
      },
    },
    image: image || `${siteConfig.siteUrl}/api/og`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema - for navigation hierarchy
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema - for sitelinks search box
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'JColeman Consulting',
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: 'JColeman Consulting',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
