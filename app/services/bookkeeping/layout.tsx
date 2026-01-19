import { Metadata } from 'next';
import { siteConfig } from '@/data/config/site.settings';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Bookkeeping Services',
  description:
    'Professional bookkeeping services for startups. Monthly bookkeeping, financial reporting, payroll processing, and audit preparation. Let us handle your books so you can focus on growth.',
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/bookkeeping`,
  },
  openGraph: {
    title: 'Bookkeeping Services | JColeman Consulting',
    description:
      'Professional bookkeeping services for startups. Monthly bookkeeping, financial reporting, payroll processing, and audit preparation.',
    url: `${siteConfig.siteUrl}/services/bookkeeping`,
  },
};

export default function BookkeepingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceJsonLd
        name="Bookkeeping Services"
        description="Professional bookkeeping services for startups including monthly bookkeeping, financial reporting, payroll processing, and audit preparation."
        url={`${siteConfig.siteUrl}/services/bookkeeping`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteConfig.siteUrl },
          { name: 'Services', url: `${siteConfig.siteUrl}/services` },
          { name: 'Bookkeeping', url: `${siteConfig.siteUrl}/services/bookkeeping` },
        ]}
      />
      {children}
    </>
  );
}
