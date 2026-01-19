import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'JColeman Consulting Privacy Policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
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
              Privacy Policy
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
              Introduction
            </h2>
            <p className="text-base leading-relaxed mb-6">
              JColeman Consulting (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
              committed to protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our
              website or use our services.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Information We Collect
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We may collect information about you in various ways, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="leading-relaxed">
                <strong style={{ color: '#0d1c29' }}>Personal Data:</strong> Name, email address,
                phone number, company name, and other contact information you provide through our
                contact forms or when engaging our services.
              </li>
              <li className="leading-relaxed">
                <strong style={{ color: '#0d1c29' }}>Financial Information:</strong> When providing
                accounting services, we may collect financial data necessary to perform our services.
              </li>
              <li className="leading-relaxed">
                <strong style={{ color: '#0d1c29' }}>Usage Data:</strong> Information about how you
                access and use our website, including IP address, browser type, pages visited, and
                time spent on pages.
              </li>
            </ul>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="leading-relaxed">Provide, maintain, and improve our services</li>
              <li className="leading-relaxed">Respond to your inquiries and fulfill your requests</li>
              <li className="leading-relaxed">Send you important information about our services</li>
              <li className="leading-relaxed">Comply with legal obligations</li>
              <li className="leading-relaxed">Protect our rights and prevent fraud</li>
            </ul>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Information Sharing
            </h2>
            <p className="text-base leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal information to outside
              parties except as described in this policy. We may share information with trusted
              third parties who assist us in operating our website, conducting our business, or
              servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Data Security
            </h2>
            <p className="text-base leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Your Rights
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal
              information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="leading-relaxed">The right to access your personal information</li>
              <li className="leading-relaxed">The right to correct inaccurate information</li>
              <li className="leading-relaxed">The right to request deletion of your information</li>
              <li className="leading-relaxed">The right to opt-out of marketing communications</li>
            </ul>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Cookies
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Our website may use cookies and similar tracking technologies to enhance your
              experience. You can set your browser to refuse cookies, but some features of our
              website may not function properly without them.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the &quot;Last
              updated&quot; date.
            </p>

            <h2
              className="font-display text-2xl font-light mt-12 mb-6"
              style={{ color: '#0d1c29' }}
            >
              Contact Us
            </h2>
            <p className="text-base leading-relaxed mb-6">
              If you have questions about this Privacy Policy or our privacy practices, please
              contact us at:
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
              <p className="text-base" style={{ color: '#3498db' }}>
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
