import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  PiggyBank,
  Rocket,
  Settings,
  Shield,
  Globe,
  Search,
  LogOut,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fractional CFO',
  description:
    'Strategic financial leadership for startups. Get CFO-level insights to build growth strategies, improve cash flow, and succeed in fundraising.',
};

const services = [
  {
    title: 'Cash Flow',
    icon: PiggyBank,
    description:
      'Help managing your capital runway, obligations and ability to invest in ongoing R&D.',
  },
  {
    title: 'Financial Reporting',
    icon: BarChart3,
    description:
      "Know what's happening in your business at all times with clear, actionable reporting.",
  },
  {
    title: 'Profit Optimization',
    icon: TrendingUp,
    description:
      'Improve margins with extensive analysis of service lines, product offerings, and more.',
  },
  {
    title: 'Fundraising',
    icon: Rocket,
    description:
      'Create a plan for timing, funds needed, and the approach for Series A and beyond.',
  },
  {
    title: 'Processes',
    icon: Settings,
    description:
      'Put systems and controls in place to scale fast and reliably across the business.',
  },
  {
    title: 'Risk Management',
    icon: Shield,
    description:
      "Understand from experience the challenges you'll face and be prepared for them.",
  },
  {
    title: 'Go-to-Market',
    icon: Globe,
    description:
      'Explore new business models, verticals, marketing, and customers for growth.',
  },
  {
    title: 'Competitor Analysis',
    icon: Search,
    description:
      'Rise above by understanding strengths and weaknesses of competitors in your market.',
  },
  {
    title: 'Exit Strategy',
    icon: LogOut,
    description:
      'Be prepared for an acquisition with defensible financials and a clear strategy.',
  },
];

const benefits = [
  {
    title: 'CFO Benefits at a Fraction of the Cost',
    description:
      'Interim, part-time, full-time, and contract services allow you to adjust at any time - up or down - as needed.',
  },
  {
    title: 'Matched to Your Industry',
    description:
      'Our CFOs come to you with relevant experience in your business to guide you to success as fast as possible.',
  },
  {
    title: 'The Face of Your Financials',
    description:
      'CFOs represent your financials to your investors and board as well as to the bookkeeping and accounting team.',
  },
  {
    title: 'Elevated Decision Support',
    description:
      "You'll have more metrics, reports, analysis, and modeling to make effective decisions for growth and exits.",
  },
];

export default function CFOPage() {
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
              Fractional CFO
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              We give you access to the best financial leaders with expertise in
              your industry.
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

      {/* Services Grid */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Take Your Business to the Next Level
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.7)' }}
            >
              Our fractional CFOs provide strategic guidance across all aspects
              of your financial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)' }}
                >
                  <service.icon
                    className="h-6 w-6"
                    style={{ color: '#3498db' }}
                  />
                </div>
                <h3
                  className="font-ui font-semibold text-lg mb-2"
                  style={{ color: '#0d1c29' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#ffffff' }}
            >
              Fractional CFO Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <h3
                  className="font-display text-xl font-normal mb-3"
                  style={{ color: '#ffffff' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
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
            Ready for Strategic Financial Leadership?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(13, 28, 41, 0.7)' }}
          >
            Get CFO-level expertise tailored to your startup&apos;s needs.
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
        </div>
      </section>
    </div>
  );
}
