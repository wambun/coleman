'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import { siteConfig } from '@/data/config/site.settings';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary-main/95 backdrop-blur-md shadow-lg'
          : 'bg-secondary-main'
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(13, 28, 41, 0.95)' : '#0d1c29' }}
    >
      <nav className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
          >
            <span className="font-display text-2xl font-light tracking-wide">
              {siteConfig.logoTitle || 'JColeman'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {headerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-ui text-sm font-medium transition-all duration-200 ${
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-primary-main'
                    : 'text-white/80 hover:text-white'
                }`}
                style={{
                  color:
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? '#c5a788'
                      : undefined,
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-ui text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: '#c5a788',
                color: '#0d1c29',
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: '#0d1c29' }}
          >
            <div className="px-6 py-4 space-y-4 border-t border-white/10">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block font-ui text-base font-medium py-2 transition-colors ${
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-primary-main'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{
                    color:
                      pathname === link.href || pathname.startsWith(link.href + '/')
                        ? '#c5a788'
                        : undefined,
                  }}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-full font-ui text-sm font-semibold mt-4"
                style={{
                  backgroundColor: '#c5a788',
                  color: '#0d1c29',
                }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
