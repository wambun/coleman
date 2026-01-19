import { Metadata } from 'next';
import { siteConfig } from '@/data/config/site.settings';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Fractional CFO Services',
  description:
    'Fractional CFO services for startups. Get executive-level financial leadership including strategic planning, financial modeling, fundraising support, and board reporting without the full-time cost.',
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/cfo`,
  },
  openGraph: {
    title: 'Fractional CFO Services | Jay Coleman Consulting',
    description:
      'Fractional CFO services for startups. Executive-level financial leadership including strategic planning, financial modeling, and fundraising support.',
    url: `${siteConfig.siteUrl}/services/cfo`,
  },
};

export default function CFOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceJsonLd
        name="Fractional CFO Services"
        description="Fractional CFO services for startups providing executive-level financial leadership including strategic planning, financial modeling, fundraising support, and board reporting."
        url={`${siteConfig.siteUrl}/services/cfo`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteConfig.siteUrl },
          { name: 'Services', url: `${siteConfig.siteUrl}/services` },
          { name: 'Fractional CFO', url: `${siteConfig.siteUrl}/services/cfo` },
        ]}
      />
      {children}
    </>
  );
}
