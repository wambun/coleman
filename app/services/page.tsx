import { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Calculator,
  TrendingUp,
  Users,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive financial services for startups including bookkeeping, accounting, tax services, fractional CFO, and people operations.',
};

const services = [
  {
    title: 'Bookkeeping & Accounting',
    description:
      'Cloud-based bookkeeping and accounting through all stages of growth. From accounts payable to financial reporting, we handle it all.',
    features: [
      'Accounts Payable & Receivable',
      'Bank Reconciliation',
      'Financial Reporting',
      'Payroll Management',
      'Audit Preparation',
      'Due Diligence Support',
    ],
    href: '/services/bookkeeping',
    icon: BookOpen,
  },
  {
    title: 'Tax Services',
    description:
      'Corporate tax advisory, preparation and filings. We specialize in startup tax needs including R&D tax credits.',
    features: [
      'Corporate Tax Filing',
      'R&D Tax Credits',
      '1099 & W2 Preparation',
      'Sales & Use Tax',
      'State & Local Tax',
      'Year-round Advisory',
    ],
    href: '/services/tax',
    icon: Calculator,
  },
  {
    title: 'Fractional CFO',
    description:
      'Strategic financial leadership to build growth strategies, improve cash flow, and assist in fundraising rounds.',
    features: [
      'Cash Flow Management',
      'Financial Reporting',
      'Fundraising Support',
      'Board Relations',
      'Exit Strategy',
      'Growth Planning',
    ],
    href: '/services/cfo',
    icon: TrendingUp,
  },
  {
    title: 'People Operations',
    description:
      'Build and manage your employee experience to engage, empower and retain your team across all stages of growth.',
    features: [
      'Talent Acquisition',
      'Onboarding Programs',
      'Payroll & Benefits',
      'Performance Management',
      'Compliance',
      'Retention Strategies',
    ],
    href: '/services/hr',
    icon: Users,
  },
];

export default function ServicesPage() {
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
                backgroundColor: 'rgba(197, 167, 136, 0.15)',
                color: '#c5a788',
              }}
            >
              Our Services
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Comprehensive Financial Solutions for Startups
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              From day-to-day bookkeeping to strategic CFO guidance, we provide
              the expertise your startup needs to succeed at every stage of growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(197, 167, 136, 0.15)' }}
                  >
                    <service.icon
                      className="h-7 w-7"
                      style={{ color: '#c5a788' }}
                    />
                  </div>
                  <h2
                    className="font-display text-3xl lg:text-4xl font-light mb-4"
                    style={{ color: '#0d1c29' }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                  >
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-ui text-base font-semibold transition-all duration-200 hover:gap-3"
                    style={{ color: '#c5a788' }}
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Features Card */}
                <div
                  className="flex-1 w-full p-8 rounded-2xl"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <h3
                    className="font-ui text-sm font-semibold uppercase tracking-wider mb-6"
                    style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                  >
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: '#c5a788' }}
                        />
                        <span style={{ color: '#0d1c29' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
            Ready to Get Started?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Let&apos;s discuss how our services can help your startup thrive.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#c5a788',
              color: '#0d1c29',
            }}
          >
            Request Information
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
