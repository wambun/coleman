'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Quote, Star, Sparkles, Award } from 'lucide-react';
import { testimonials } from '@/data/testimonials/testimonials';

export default function TestimonialsPage() {
  const heroRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  // Colors for testimonial cards
  const cardColors = [
    { accent: '#3498db', glow: 'rgba(52, 152, 219, 0.2)' },
    { accent: '#f68212', glow: 'rgba(246, 130, 18, 0.2)' },
    { accent: '#10b981', glow: 'rgba(16, 185, 129, 0.2)' },
    { accent: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.2)' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0d1c29' }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.15) 0%, transparent 60%)',
              top: '-20%',
              right: '-10%',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.12) 0%, transparent 60%)',
              bottom: '-20%',
              left: '-10%',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
              style={{ backgroundColor: 'rgba(246, 130, 18, 0.15)', color: '#f68212' }}
            >
              <Award className="w-4 h-4" />
              Client Success
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Trusted by{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Leading Startups
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Read what some of our clients have to say about working with
              JColeman Consulting.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section
        ref={testimonialsRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.08) 0%, transparent 70%)',
              top: '-10%',
              left: '-10%',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%)',
              bottom: '10%',
              right: '-5%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const colors = cardColors[index % cardColors.length];
              const isFeatured = index === 0;

              return (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`group ${isFeatured ? 'md:col-span-2' : ''}`}
                >
                  <div
                    className="relative p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full"
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid rgba(13, 28, 41, 0.06)',
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 40px ${colors.glow}` }}
                    />

                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-0.5 rounded-full"
                      style={{ backgroundColor: colors.accent }}
                    />

                    {/* Quote Icon */}
                    <div
                      className="absolute -top-4 left-8 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: colors.accent }}
                    >
                      <Quote className="h-5 w-5 text-white" />
                    </div>

                    <div className="relative z-10 pt-4">
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4"
                            fill="#f68212"
                            style={{ color: '#f68212' }}
                          />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p
                        className={`leading-relaxed mb-6 ${
                          isFeatured ? 'text-lg lg:text-xl' : 'text-base'
                        }`}
                        style={{ color: '#0d1c29' }}
                      >
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center font-display text-lg transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accent}cc 100%)`,
                            color: '#ffffff',
                          }}
                        >
                          {testimonial.author
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
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
                                className="hover:underline transition-colors"
                                style={{ color: colors.accent }}
                              >
                                {testimonial.company}
                              </a>
                            ) : (
                              <span style={{ color: colors.accent }}>
                                {testimonial.company}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0d1c29' }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.15) 0%, transparent 60%)',
              bottom: '-20%',
              right: '-10%',
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium mb-6"
            style={{ backgroundColor: 'rgba(246, 130, 18, 0.15)', color: '#f68212' }}
          >
            <Sparkles className="w-4 h-4" />
            Your Success Awaits
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
            style={{ color: '#ffffff' }}
          >
            Join Our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Success Stories
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Discover how JColeman Consulting can help your startup thrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#f68212',
                color: '#ffffff',
                boxShadow: '0 4px 30px rgba(246, 130, 18, 0.3)',
              }}
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
