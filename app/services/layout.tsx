import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive financial services for startups including bookkeeping, accounting, tax services, fractional CFO, and people operations.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
