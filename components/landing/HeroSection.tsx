'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

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

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
      className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#fafbfc' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient blob - top right */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(52, 152, 219, 0.15) 0%, rgba(52, 152, 219, 0.05) 40%, transparent 70%)',
            top: '-20%',
            right: '-10%',
            y: y1,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Medium gradient blob - bottom left */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(246, 130, 18, 0.12) 0%, rgba(246, 130, 18, 0.04) 40%, transparent 70%)',
            bottom: '-15%',
            left: '-5%',
            y: y2,
          }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Small accent blob - center */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 60%)',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute w-20 h-20 border-2 rounded-2xl opacity-20"
          style={{
            borderColor: '#3498db',
            top: '20%',
            right: '15%',
          }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -20, 0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute w-12 h-12 rounded-full opacity-30"
          style={{
            backgroundColor: '#f68212',
            top: '60%',
            right: '25%',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute w-16 h-16 border-2 opacity-15"
          style={{
            borderColor: '#3498db',
            top: '70%',
            left: '10%',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute w-8 h-8 rounded-full opacity-40"
          style={{
            backgroundColor: '#3498db',
            top: '30%',
            left: '20%',
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(13, 28, 41, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 28, 41, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

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
            'radial-gradient(circle, rgba(52, 152, 219, 0.08) 0%, rgba(246, 130, 18, 0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 py-20 lg:py-32"
        style={{ opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-ui font-medium tracking-wide backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(52, 152, 219, 0.08)',
                color: '#3498db',
                border: '1px solid rgba(52, 152, 219, 0.15)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Trusted by 100+ Startups
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight mb-8"
            style={{ color: '#0d1c29' }}
          >
            Building{' '}
            <span className="relative inline-block">
              <span
                className="relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Strong
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 -z-10 rounded-full opacity-30"
                style={{ backgroundColor: '#3498db' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
            <br />
            Startups
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
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#f68212',
                color: '#ffffff',
                boxShadow: '0 4px 20px rgba(246, 130, 18, 0.3)',
              }}
            >
              {ctaText}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:bg-white hover:shadow-lg backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(13, 28, 41, 0.1)',
                color: '#0d1c29',
              }}
            >
              <Play className="h-4 w-4" fill="currentColor" />
              Explore Services
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <div
              className="inline-flex items-center gap-8 lg:gap-12 px-8 py-6 rounded-2xl backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(13, 28, 41, 0.05)',
              }}
            >
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#3498db' }}
                >
                  $100M+
                </p>
                <p
                  className="text-xs lg:text-sm mt-1 font-ui"
                  style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                >
                  Raised for Startups
                </p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#3498db' }}
                >
                  25+
                </p>
                <p
                  className="text-xs lg:text-sm mt-1 font-ui"
                  style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                >
                  Years Experience
                </p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p
                  className="font-display text-3xl lg:text-4xl font-light"
                  style={{ color: '#3498db' }}
                >
                  100+
                </p>
                <p
                  className="text-xs lg:text-sm mt-1 font-ui"
                  style={{ color: 'rgba(13, 28, 41, 0.5)' }}
                >
                  Clients Served
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
          style={{ borderColor: 'rgba(13, 28, 41, 0.2)' }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full"
            style={{ backgroundColor: '#3498db' }}
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
