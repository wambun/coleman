import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Briefcase, Heart, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the JColeman Consulting team. Explore career opportunities in accounting, bookkeeping, and financial services for startups.',
};

const benefits = [
  {
    title: 'Remote-First Culture',
    description:
      'Work from anywhere while collaborating with a dedicated team of professionals.',
    icon: Users,
  },
  {
    title: 'Professional Growth',
    description:
      'Continuous learning opportunities and support for professional certifications.',
    icon: Briefcase,
  },
  {
    title: 'Work-Life Balance',
    description:
      'Flexible schedules that respect your personal life and commitments.',
    icon: Heart,
  },
  {
    title: 'Impactful Work',
    description:
      'Help startups succeed and make a real difference in their financial health.',
    icon: Zap,
  },
];

const openPositions = [
  {
    title: 'Senior Controller',
    type: 'Full-time',
    location: 'Remote',
    description:
      'We are looking for an experienced Controller to manage client accounts and provide strategic financial guidance to growing startups.',
  },
  {
    title: 'Staff Accountant',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Join our team as a Staff Accountant to support day-to-day bookkeeping and accounting operations for our startup clients.',
  },
  {
    title: 'Tax Specialist',
    type: 'Full-time',
    location: 'Remote',
    description:
      'We need a Tax Specialist with experience in R&D tax credits and startup taxation to help our clients maximize their tax benefits.',
  },
];

export default function CareersPage() {
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
              Join Our Team
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Build Your Career With Us
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Join a team of dedicated professionals helping startups succeed
              through expert financial guidance.
            </p>
            <a
              href="#positions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#c5a788',
                color: '#0d1c29',
              }}
            >
              View Open Positions
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Why Work at JColeman Consulting?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.7)' }}
            >
              We offer a supportive environment where you can grow your career
              while making a meaningful impact on startup success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(197, 167, 136, 0.15)' }}
                >
                  <benefit.icon className="h-7 w-7" style={{ color: '#c5a788' }} />
                </div>
                <h3
                  className="font-display text-xl font-normal mb-3"
                  style={{ color: '#0d1c29' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
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
                Our Culture
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                At JColeman Consulting, we believe that great work comes from a
                supportive, collaborative environment. Our team members are
                trusted professionals who take ownership of their work while
                supporting each other&apos;s success.
              </p>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                We&apos;re committed to integrity, quality, and empathy in
                everything we do. Whether you&apos;re working with clients or
                collaborating with teammates, you&apos;ll find a culture built
                on mutual respect and shared purpose.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-base font-ui font-semibold transition-colors"
                style={{ color: '#c5a788' }}
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <h3
                className="font-display text-2xl font-light mb-6"
                style={{ color: '#ffffff' }}
              >
                What We Value
              </h3>
              <ul className="space-y-4">
                {['Integrity', 'Collaboration', 'Excellence', 'Growth', 'Empathy'].map(
                  (value) => (
                    <li key={value} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#c5a788' }}
                      />
                      <span
                        className="text-base"
                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        {value}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="positions"
        className="w-full py-24 lg:py-32"
        style={{ backgroundColor: '#f9f9f9' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Open Positions
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.7)' }}
            >
              Explore our current opportunities and find your next career move.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3
                        className="font-display text-xl font-normal"
                        style={{ color: '#0d1c29' }}
                      >
                        {position.title}
                      </h3>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-ui"
                        style={{
                          backgroundColor: 'rgba(197, 167, 136, 0.15)',
                          color: '#c5a788',
                        }}
                      >
                        {position.type}
                      </span>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-ui"
                        style={{
                          backgroundColor: '#f9f9f9',
                          color: 'rgba(13, 28, 41, 0.7)',
                        }}
                      >
                        {position.location}
                      </span>
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                    >
                      {position.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-ui text-sm font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: '#c5a788',
                        color: '#0d1c29',
                      }}
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-8 rounded-2xl text-center"
            style={{ backgroundColor: '#ffffff' }}
          >
            <h3
              className="font-display text-xl font-normal mb-3"
              style={{ color: '#0d1c29' }}
            >
              Don&apos;t See a Fit?
            </h3>
            <p
              className="text-base mb-6"
              style={{ color: 'rgba(13, 28, 41, 0.7)' }}
            >
              We&apos;re always looking for talented individuals. Send us your
              resume and tell us how you can contribute to our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-base font-ui font-semibold transition-colors"
              style={{ color: '#c5a788' }}
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
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
            Ready to Make an Impact?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Join our team and help startups build strong financial foundations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#c5a788',
              color: '#0d1c29',
            }}
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
