import { Metadata } from 'next';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { siteConfig } from '@/data/config/site.settings';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with JColeman Consulting. Request information about our accounting, tax, and CFO services for startups.',
};

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Let&apos;s Start a Conversation
            </h1>
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Ready to transform your startup&apos;s financial operations?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div
              className="p-8 lg:p-10 rounded-2xl"
              style={{ backgroundColor: '#ffffff' }}
            >
              <h2
                className="font-display text-2xl lg:text-3xl font-light mb-6"
                style={{ color: '#0d1c29' }}
              >
                Request Information
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-ui font-medium mb-2"
                      style={{ color: '#0d1c29' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                      style={{
                        borderColor: '#e8eded',
                        backgroundColor: '#ffffff',
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-ui font-medium mb-2"
                      style={{ color: '#0d1c29' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                      style={{
                        borderColor: '#e8eded',
                        backgroundColor: '#ffffff',
                      }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-ui font-medium mb-2"
                    style={{ color: '#0d1c29' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#e8eded',
                      backgroundColor: '#ffffff',
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-ui font-medium mb-2"
                    style={{ color: '#0d1c29' }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#e8eded',
                      backgroundColor: '#ffffff',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-ui font-medium mb-2"
                    style={{ color: '#0d1c29' }}
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#e8eded',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <option value="">Select a service...</option>
                    <option value="bookkeeping">Bookkeeping & Accounting</option>
                    <option value="tax">Tax Services</option>
                    <option value="cfo">Fractional CFO</option>
                    <option value="hr">People Operations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-ui font-medium mb-2"
                    style={{ color: '#0d1c29' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none"
                    style={{
                      borderColor: '#e8eded',
                      backgroundColor: '#ffffff',
                    }}
                    placeholder="Tell us about your startup and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: '#c5a788',
                    color: '#0d1c29',
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2
                  className="font-display text-2xl lg:text-3xl font-light mb-6"
                  style={{ color: '#0d1c29' }}
                >
                  Contact Information
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                >
                  We&apos;re here to help your startup succeed. Reach out and
                  let&apos;s discuss how we can work together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(197, 167, 136, 0.15)' }}
                  >
                    <Mail className="h-6 w-6" style={{ color: '#c5a788' }} />
                  </div>
                  <div>
                    <h3
                      className="font-ui font-semibold mb-1"
                      style={{ color: '#0d1c29' }}
                    >
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-base hover:underline"
                      style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(197, 167, 136, 0.15)' }}
                  >
                    <MapPin className="h-6 w-6" style={{ color: '#c5a788' }} />
                  </div>
                  <div>
                    <h3
                      className="font-ui font-semibold mb-1"
                      style={{ color: '#0d1c29' }}
                    >
                      Location
                    </h3>
                    <p
                      className="text-base"
                      style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                    >
                      1636 Roadrunner Dr
                      <br />
                      Roseville, CA 95747
                    </p>
                  </div>
                </div>

                {siteConfig.linkedin && (
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(197, 167, 136, 0.15)' }}
                    >
                      <Linkedin className="h-6 w-6" style={{ color: '#c5a788' }} />
                    </div>
                    <div>
                      <h3
                        className="font-ui font-semibold mb-1"
                        style={{ color: '#0d1c29' }}
                      >
                        LinkedIn
                      </h3>
                      <a
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base hover:underline"
                        style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: 'rgba(197, 167, 136, 0.1)' }}
              >
                <h3
                  className="font-ui font-semibold mb-2"
                  style={{ color: '#0d1c29' }}
                >
                  Quick Response Guaranteed
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                >
                  We pride ourselves on our responsiveness. Expect to hear back
                  from us within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
