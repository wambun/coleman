import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join JColeman Consulting. Explore career opportunities in accounting, tax, and financial services for startups.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
