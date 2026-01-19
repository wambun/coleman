import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what our clients say about working with JColeman Consulting. Trusted by leading startups for accounting, tax, and CFO services.',
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
