import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'JColeman Consulting Terms of Service. Read our terms and conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="w-full py-16 lg:py-24"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-ui mb-8 transition-colors hover:opacity-80"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Terms of Service
            </h1>
            <p
              className="text-lg"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <div className="prose prose-lg max-w-none" style={{ color: 'rgba(13, 28, 41, 0.85)' }}>
            <h2
              className="font-display text-2xl font-light mt-0 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Agreement to Terms
            </h2>
            <p className="text-base leading-relaxed mb-6">
              By accessing or using the JColeman Consulting website and services, you agree to
              be bound by these Terms of Service. If you disagree with any part of these terms,
              you may not access our website or use our services.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Services Description
            </h2>
            <p className="text-base leading-relaxed mb-6">
              JColeman Consulting provides accounting, bookkeeping, tax, and fractional CFO
              services to startups and small businesses. The specific services provided to each
              client are defined in individual service agreements.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Client Responsibilities
            </h2>
            <p className="text-base leading-relaxed mb-4">
              As a client of JColeman Consulting, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="leading-relaxed">
                Provide accurate, complete, and timely information necessary for us to perform
                our services
              </li>
              <li className="leading-relaxed">
                Respond promptly to requests for information or clarification
              </li>
              <li className="leading-relaxed">
                Pay for services as agreed in your service agreement
              </li>
              <li className="leading-relaxed">
                Maintain the confidentiality of any login credentials or access we provide
              </li>
            </ul>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Intellectual Property
            </h2>
            <p className="text-base leading-relaxed mb-6">
              The content, features, and functionality of our website, including but not limited
              to text, graphics, logos, and software, are owned by JColeman Consulting and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed mb-6">
              JColeman Consulting shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of our services or
              reliance on any information provided through our website. Our liability for any
              claim arising from our services shall be limited to the fees paid for those
              specific services.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Professional Advice Disclaimer
            </h2>
            <p className="text-base leading-relaxed mb-6">
              The content on this website is for informational purposes only and should not be
              construed as professional advice. For specific accounting, tax, or financial
              advice, please engage our services or consult with a qualified professional. Tax
              laws and regulations change frequently, and the information on this website may
              not reflect the most current legal developments.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Confidentiality
            </h2>
            <p className="text-base leading-relaxed mb-6">
              We maintain strict confidentiality regarding all client information. We will not
              disclose your confidential information to third parties except as required by law,
              with your consent, or as necessary to perform our services.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Termination
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Either party may terminate services as specified in the applicable service
              agreement. Upon termination, you remain responsible for payment of any outstanding
              fees for services already rendered.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Governing Law
            </h2>
            <p className="text-base leading-relaxed mb-6">
              These Terms of Service shall be governed by and construed in accordance with the
              laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Changes to Terms
            </h2>
            <p className="text-base leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. We will notify clients of
              significant changes via email or through our website. Your continued use of our
              services after such modifications constitutes acceptance of the updated terms.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Contact Us
            </h2>
            <p className="text-base leading-relaxed mb-6">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: '#f9f9f9' }}
            >
              <p className="text-base mb-2" style={{ color: '#0d1c29' }}>
                <strong>JColeman Consulting</strong>
              </p>
              <p className="text-base mb-1" style={{ color: 'rgba(13, 28, 41, 0.7)' }}>
                1636 Roadrunner Dr
              </p>
              <p className="text-base mb-2" style={{ color: 'rgba(13, 28, 41, 0.7)' }}>
                Roseville, CA 95747
              </p>
              <p className="text-base" style={{ color: '#c5a788' }}>
                <a href="mailto:info@jcolemanconsulting.com" className="hover:underline">
                  info@jcolemanconsulting.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
