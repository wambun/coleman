import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  UserPlus,
  Users,
  Wallet,
  BookOpen,
  Heart,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'People Operations',
  description:
    'Build and manage your employee experience. From talent acquisition to retention strategies, we help startups build great teams.',
};

const mainServices = [
  {
    title: 'Acquiring Talent',
    icon: UserPlus,
    description:
      'Help with recruiting, scheduling and training the best employees in the least amount of time.',
  },
  {
    title: 'Employee Types',
    icon: Users,
    description:
      'Help with remote, full-time, and contract types of employees from W2s to 1099s.',
  },
  {
    title: 'Payroll & Benefits',
    icon: Wallet,
    description:
      'Help with compensation, health insurance, 401k plans, PEO plans, FMLA, disability, etc.',
  },
];

const additionalServices = [
  {
    title: 'Onboarding',
    icon: BookOpen,
    description:
      'We help with background checks, offer letters, employment agreements and IT needs.',
  },
  {
    title: 'Retention',
    icon: Heart,
    description:
      'Help with company mission, core values, inclusion, diversity, and retention bonuses.',
  },
  {
    title: 'Goals',
    icon: Target,
    description:
      'Help with setting and tracking goals, milestones, performance reviews and career trajectory.',
  },
];

export default function HRPage() {
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
              People Operations
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              We&apos;ll help craft and manage your employee experience to
              engage, empower and retain them.
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

      {/* How Can We Help Section */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-6"
              style={{ color: '#0d1c29' }}
            >
              How Can We Help?
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: 'rgba(13, 28, 41, 0.7)' }}
            >
              Our People Operations builds and executes programs to help
              acquire, retain and empower your workforce. We help you realize an
              inclusive work culture where employees want to be.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(13, 28, 41, 0.7)' }}
            >
              In addition, we provide typical human resource functions such as
              payroll, benefits, and compliance for in-office employees and
              those working remote across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)' }}
                >
                  <service.icon
                    className="h-7 w-7"
                    style={{ color: '#3498db' }}
                  />
                </div>
                <h3
                  className="font-display text-xl font-normal mb-3"
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

      {/* Why You Need People Operations */}
      <section
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="font-display text-3xl lg:text-4xl font-light mb-6"
                style={{ color: '#ffffff' }}
              >
                Why You Need People Operations
              </h2>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Modern workplace dynamics are continuing to evolve and as a
                result, employees have much higher expectations for their work
                experiences. With increased remote work, employees have more
                options than ever.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Employees expect comprehensive onboarding, learning and
                development programs, management interactions and a framework of
                equity and inclusivity.
              </p>
            </div>

            <div className="space-y-6">
              {additionalServices.map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-xl flex items-start gap-4"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)' }}
                  >
                    <service.icon
                      className="h-6 w-6"
                      style={{ color: '#3498db' }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-ui font-semibold mb-1"
                      style={{ color: '#ffffff' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
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
            Build a Thriving Team
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(13, 28, 41, 0.7)' }}
          >
            Let us help you create an employee experience that attracts and
            retains top talent.
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
