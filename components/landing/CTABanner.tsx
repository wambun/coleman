'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  title = 'Ready to Transform Your Finances?',
  description = "Let's discuss how we can help your startup thrive with expert financial guidance and support.",
  buttonText = 'Schedule a Consultation',
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section
      className="w-full py-24 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #0d1c29 0%, #132030 100%)',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20">
          {/* Background decoration */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: '#f68212' }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: '#f68212' }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg lg:text-xl mb-10"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: '#f68212',
                  color: '#ffffff',
                }}
              >
                {buttonText}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
