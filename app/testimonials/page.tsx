import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what our clients say about working with JColeman Consulting. Trusted by leading startups for accounting, tax, and CFO services.',
};

export default function TestimonialsPage() {
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
                backgroundColor: 'rgba(52, 152, 219, 0.15)',
                color: '#3498db',
              }}
            >
              Client Success
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Trusted by Leading Startups
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Read what some of our clients have to say about working with
              JColeman Consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`relative p-8 lg:p-10 rounded-2xl ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
                style={{ backgroundColor: '#ffffff' }}
              >
                {/* Quote Icon */}
                <div
                  className="absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#f68212' }}
                >
                  <Quote className="h-4 w-4 text-white" />
                </div>

                {/* Quote Text */}
                <p
                  className={`leading-relaxed mb-6 italic ${
                    index === 0 ? 'text-lg lg:text-xl' : 'text-base'
                  }`}
                  style={{ color: 'rgba(13, 28, 41, 0.8)' }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="font-ui font-semibold"
                      style={{ color: '#0d1c29' }}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                    >
                      {testimonial.title} at{' '}
                      {testimonial.companyUrl ? (
                        <a
                          href={testimonial.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: '#3498db' }}
                        >
                          {testimonial.company}
                        </a>
                      ) : (
                        <span style={{ color: '#3498db' }}>
                          {testimonial.company}
                        </span>
                      )}
                    </p>
                  </div>
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
            Join Our Success Stories
          </h2>
          <p
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Discover how JColeman Consulting can help your startup thrive.
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
