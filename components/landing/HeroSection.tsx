'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Subtle background accents */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(52, 152, 219, 0.2) 0%, transparent 60%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(246, 130, 18, 0.25) 0%, transparent 60%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Interactive cursor glow */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          width: 400,
          height: 400,
          background:
            'radial-gradient(circle, rgba(52, 152, 219, 0.12) 0%, rgba(246, 130, 18, 0.08) 40%, transparent 70%)',
          filter: 'blur(50px)',
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
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                color: '#3498db',
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
            style={{ color: '#0d1c29' }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(13, 28, 41, 0.6)' }}
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
                backgroundColor: '#f68212',
                color: '#ffffff',
              }}
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 border-2 hover:bg-gray-50"
              style={{
                borderColor: 'rgba(13, 28, 41, 0.2)',
                color: '#0d1c29',
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
            className="mt-16 pt-12 border-t"
            style={{ borderColor: 'rgba(13, 28, 41, 0.1)' }}
          >
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#3498db' }}
                >
                  $100M+
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                >
                  Raised for Startups
                </p>
              </div>
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#3498db' }}
                >
                  25+
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                >
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#3498db' }}
                >
                  100+
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'rgba(13, 28, 41, 0.5)' }}
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
