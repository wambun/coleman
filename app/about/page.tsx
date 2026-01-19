import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import { teamMembers, coreValues } from '@/data/team/members';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about JColeman Consulting - our mission, values, and the experienced team dedicated to helping startups thrive.',
};

export default function AboutPage() {
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
              About Us
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Building Strong Startups Together
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              We empower startups to thrive and transform through expert
              accounting, bookkeeping, tax, and fractional CFO services.
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
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Our Core Values
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.7)' }}
            >
              Our core values serve as guiding principles that shape our company
              culture, inform decision-making, and align us with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className={`p-8 rounded-2xl ${
                  index === coreValues.length - 1 && coreValues.length % 3 === 2
                    ? 'md:col-span-2 lg:col-span-1'
                    : ''
                }`}
                style={{ backgroundColor: '#ffffff' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 font-display text-lg"
                  style={{ backgroundColor: '#c5a788', color: '#0d1c29' }}
                >
                  {index + 1}
                </div>
                <h3
                  className="font-display text-xl font-normal mb-3"
                  style={{ color: '#0d1c29' }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
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
              Our Leadership Team
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Our dedicated and experienced leadership team is committed to
              guiding your startup towards financial success and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                {/* Avatar Placeholder */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 font-display text-2xl"
                  style={{ backgroundColor: 'rgba(197, 167, 136, 0.2)', color: '#c5a788' }}
                >
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="font-ui font-semibold text-lg"
                      style={{ color: '#ffffff' }}
                    >
                      {member.name}
                      {member.credentials && (
                        <span
                          className="ml-2 text-sm font-normal"
                          style={{ color: '#c5a788' }}
                        >
                          {member.credentials}
                        </span>
                      )}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      {member.title}
                    </p>
                  </div>
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                      style={{ backgroundColor: 'rgba(197, 167, 136, 0.15)' }}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" style={{ color: '#c5a788' }} />
                    </a>
                  )}
                </div>

                <p
                  className="text-sm leading-relaxed line-clamp-4"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  {member.bio}
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
            Ready to Work Together?
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(13, 28, 41, 0.7)' }}
          >
            Let&apos;s discuss how our team can help your startup thrive.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#c5a788',
              color: '#0d1c29',
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
