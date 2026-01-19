import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { footerLinks } from '@/data/config/footerLinks';
import { siteConfig } from '@/data/config/site.settings';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: '#0d1c29' }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span
                className="font-display text-2xl font-light tracking-wide"
                style={{ color: '#ffffff' }}
              >
                {siteConfig.logoTitle || 'JColeman'}
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Building strong startups through expert accounting, bookkeeping, tax,
              and fractional CFO services.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" style={{ color: '#c5a788' }} />
                </a>
              )}
            </div>
          </div>

          {/* Footer Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.columnName}>
              <h3
                className="font-ui text-sm font-semibold uppercase tracking-wider mb-6"
                style={{ color: '#c5a788' }}
              >
                {column.columnName}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3
              className="font-ui text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: '#c5a788' }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p
                  className="text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  1636 Roadrunner Dr
                  <br />
                  Roseville, CA 95747
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
          >
            Tax & attest services performed by JColeman Consulting Tax, PC.
          </p>
        </div>
      </div>
    </footer>
  );
}
