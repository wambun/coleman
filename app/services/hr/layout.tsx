import { Metadata } from 'next';
import { siteConfig } from '@/data/config/site.settings';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'People Operations Services',
  description:
    'People operations and HR services for startups. Payroll management, benefits administration, compliance, onboarding, and HR consulting to build a thriving team culture.',
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/hr`,
  },
  openGraph: {
    title: 'People Operations Services | Jay Coleman Consulting',
    description:
      'People operations and HR services for startups. Payroll management, benefits administration, compliance, and HR consulting.',
    url: `${siteConfig.siteUrl}/services/hr`,
  },
};

export default function HRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServiceJsonLd
        name="People Operations Services"
        description="People operations and HR services for startups including payroll management, benefits administration, compliance, onboarding, and HR consulting."
        url={`${siteConfig.siteUrl}/services/hr`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteConfig.siteUrl },
          { name: 'Services', url: `${siteConfig.siteUrl}/services` },
          { name: 'People Operations', url: `${siteConfig.siteUrl}/services/hr` },
        ]}
      />
      {children}
    </>
  );
}
