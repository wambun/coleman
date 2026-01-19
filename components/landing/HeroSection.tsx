'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function HeroSection({
  title = 'Building Strong Startups',
  subtitle = 'Expert accounting, bookkeeping, tax, and fractional CFO services that empower startups to thrive and transform.',
  ctaText = 'Get Started Today',
  ctaHref = '/contact',
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0d1c29' }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(197, 167, 136, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide"
              style={{
                backgroundColor: 'rgba(197, 167, 136, 0.15)',
                color: '#c5a788',
              }}
            >
              Startup Solutions
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight mb-8"
            style={{ color: '#ffffff' }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: '#c5a788',
                color: '#0d1c29',
              }}
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 border-2 hover:bg-white/10"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
              }}
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#c5a788' }}
                >
                  $100M+
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                >
                  Raised for Startups
                </p>
              </div>
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#c5a788' }}
                >
                  25+
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                >
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#c5a788' }}
                >
                  100+
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                >
                  Clients Served
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
