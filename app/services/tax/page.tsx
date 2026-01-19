import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileCheck, Users, Calendar, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tax Services',
  description:
    'Expert corporate tax advisory, preparation and filings for startups. Specialists in R&D tax credits and startup tax optimization.',
};

const features = [
  {
    title: 'Simplified Taxes',
    icon: FileCheck,
    description:
      'We handle all your filings including 1120/1120S, 1065, 1040, 1099, sales & use, property tax, franchise tax and other business tax matters.',
  },
  {
    title: 'Tax Experts',
    icon: Users,
    description:
      "Our tax experts have decades of experience in all areas of corporate tax. You'll have a dedicated professional ensuring the correct strategy is created and executed.",
  },
  {
    title: 'Year-Round Support',
    icon: Calendar,
    description:
      'We stand behind you with year-round tax advice, planning, and filings for federal, state and local agencies.',
  },
];

const rdBenefits = [
  'Credits against income tax liability',
  'Credits against payroll tax for qualifying companies',
  'Applicable to software development activities',
  'Can be combined with other tax incentives',
  'Carry-forward provisions available',
  'Immediate cash flow benefits',
];

export default function TaxPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-ui mb-6 transition-colors hover:opacity-80"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Services
            </Link>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Tax Services
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              We are tax experts for startups and will remove the burden they
              place on you so you can focus on your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#f68212',
                color: '#ffffff',
              }}
            >
              Request Information
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Leverage Us for Your Startup Taxes
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.7)' }}
            >
              Whether we&apos;ve been handling your books or not, we have the
              expertise to take on your tax needs at any stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl text-center"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)' }}
                >
                  <feature.icon
                    className="h-7 w-7"
                    style={{ color: '#3498db' }}
                  />
                </div>
                <h3
                  className="font-display text-xl font-normal mb-3"
                  style={{ color: '#0d1c29' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Tax Credit Section */}
      <section
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)' }}
              >
                <Lightbulb className="h-5 w-5" style={{ color: '#3498db' }} />
                <span
                  className="text-sm font-ui font-medium"
                  style={{ color: '#3498db' }}
                >
                  Featured Service
                </span>
              </div>
              <h2
                className="font-display text-3xl lg:text-4xl font-light mb-6"
                style={{ color: '#ffffff' }}
              >
                Research & Development Tax Credit
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                This government-created tax deduction allows credits to
                companies conducting R&D in the US. As with other tax incentives,
                a credit can be claimed against income tax liability or payroll
                tax for qualifying companies.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                We are seasoned experts at helping eligible clients qualify and
                apply for this credit.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <h3
                className="font-ui text-sm font-semibold uppercase tracking-wider mb-6"
                style={{ color: '#3498db' }}
              >
                R&D Credit Benefits
              </h3>
              <ul className="space-y-4">
                {rdBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#f68212' }}
                    />
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
            style={{ color: '#0d1c29' }}
          >
            Optimize Your Tax Strategy
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(13, 28, 41, 0.7)' }}
          >
            Let our tax experts help you minimize liability and maximize credits.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#f68212',
              color: '#ffffff',
            }}
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p
            className="mt-8 text-sm"
            style={{ color: 'rgba(13, 28, 41, 0.5)' }}
          >
            Tax & attest services are performed exclusively by JColeman
            Consulting Tax, PC.
          </p>
        </div>
      </section>
    </div>
  );
}
