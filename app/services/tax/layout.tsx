import { Metadata } from 'next';
import { siteConfig } from '@/data/config/site.settings';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Tax Services',
  description:
    'Expert tax services for startups including R&D tax credits, tax planning, compliance, and preparation. Maximize deductions and minimize liability with strategic tax guidance.',
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/tax`,
  },
  openGraph: {
    title: 'Tax Services | JColeman Consulting',
    description:
      'Expert tax services for startups including R&D tax credits, tax planning, compliance, and preparation.',
    url: `${siteConfig.siteUrl}/services/tax`,
  },
};

export default function TaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceJsonLd
        name="Tax Services"
        description="Expert tax services for startups including R&D tax credits, tax planning, compliance, and preparation. Maximize deductions and minimize liability."
        url={`${siteConfig.siteUrl}/services/tax`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteConfig.siteUrl },
          { name: 'Services', url: `${siteConfig.siteUrl}/services` },
          { name: 'Tax Services', url: `${siteConfig.siteUrl}/services/tax` },
        ]}
      />
      {children}
    </>
  );
}
