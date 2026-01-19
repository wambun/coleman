'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Heart, Zap, MapPin, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Remote-First Culture',
    description:
      'Work from anywhere while collaborating with a dedicated team of professionals.',
    icon: Users,
    iconColor: '#3498db',
    iconBg: 'rgba(52, 152, 219, 0.15)',
    glow: 'rgba(52, 152, 219, 0.2)',
  },
  {
    title: 'Professional Growth',
    description:
      'Continuous learning opportunities and support for professional certifications.',
    icon: Briefcase,
    iconColor: '#f68212',
    iconBg: 'rgba(246, 130, 18, 0.15)',
    glow: 'rgba(246, 130, 18, 0.2)',
  },
  {
    title: 'Work-Life Balance',
    description:
      'Flexible schedules that respect your personal life and commitments.',
    icon: Heart,
    iconColor: '#ec4899',
    iconBg: 'rgba(236, 72, 153, 0.15)',
    glow: 'rgba(236, 72, 153, 0.2)',
  },
  {
    title: 'Impactful Work',
    description:
      'Help startups succeed and make a real difference in their financial health.',
    icon: Zap,
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.15)',
    glow: 'rgba(16, 185, 129, 0.2)',
  },
];

const openPositions = [
  {
    title: 'Senior Controller',
    type: 'Full-time',
    location: 'Remote',
    description:
      'We are looking for an experienced Controller to manage client accounts and provide strategic financial guidance to growing startups.',
    color: '#3498db',
  },
  {
    title: 'Staff Accountant',
    type: 'Full-time',
    location: 'Remote',
    description:
      'Join our team as a Staff Accountant to support day-to-day bookkeeping and accounting operations for our startup clients.',
    color: '#f68212',
  },
  {
    title: 'Tax Specialist',
    type: 'Full-time',
    location: 'Remote',
    description:
      'We need a Tax Specialist with experience in R&D tax credits and startup taxation to help our clients maximize their tax benefits.',
    color: '#10b981',
  },
];

const values = ['Integrity', 'Collaboration', 'Excellence', 'Growth', 'Empathy'];

export default function CareersPage() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const cultureRef = useRef(null);
  const positionsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const cultureInView = useInView(cultureRef, { once: true, margin: '-100px' });
  const positionsInView = useInView(positionsRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

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
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.15) 0%, transparent 60%)',
              top: '-20%',
              right: '-10%',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.12) 0%, transparent 60%)',
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
              style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)', color: '#3498db' }}
            >
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Build Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Career
              </span>{' '}
              With Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Join a team of dedicated professionals helping startups succeed
              through expert financial guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#positions"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#f68212',
                  color: '#ffffff',
                  boxShadow: '0 4px 30px rgba(246, 130, 18, 0.3)',
                }}
              >
                View Open Positions
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section
        ref={benefitsRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.08) 0%, transparent 70%)',
              top: '-10%',
              left: '-10%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Why Work at{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                JColeman Consulting?
              </span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.6)' }}
            >
              We offer a supportive environment where you can grow your career
              while making a meaningful impact on startup success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div
                  className="relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid rgba(13, 28, 41, 0.06)',
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 40px ${benefit.glow}` }}
                  />
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: benefit.iconColor }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: benefit.iconBg,
                        boxShadow: `0 0 30px ${benefit.glow}`,
                      }}
                    >
                      <benefit.icon className="h-8 w-8" style={{ color: benefit.iconColor }} />
                    </div>
                    <h3
                      className="font-display text-xl font-normal mb-3"
                      style={{ color: '#0d1c29' }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section
        ref={cultureRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0d1c29' }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.15) 0%, transparent 60%)',
              bottom: '-20%',
              right: '-10%',
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-display text-3xl lg:text-4xl font-light mb-6"
                style={{ color: '#ffffff' }}
              >
                Our{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Culture
                </span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                At JColeman Consulting, we believe that great work comes from a
                supportive, collaborative environment. Our team members are
                trusted professionals who take ownership of their work while
                supporting each other&apos;s success.
              </p>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                We&apos;re committed to integrity, quality, and empathy in
                everything we do. Whether you&apos;re working with clients or
                collaborating with teammates, you&apos;ll find a culture built
                on mutual respect and shared purpose.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-base font-ui font-semibold transition-colors"
                style={{ color: '#3498db' }}
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div
                className="relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: '0 0 40px rgba(52, 152, 219, 0.2)' }}
                />
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #3498db, #f68212)' }}
                />
                <div className="relative z-10">
                  <h3
                    className="font-display text-2xl font-light mb-6"
                    style={{ color: '#ffffff' }}
                  >
                    What We Value
                  </h3>
                  <ul className="space-y-4">
                    {values.map((value, index) => (
                      <motion.li
                        key={value}
                        initial={{ opacity: 0, x: -20 }}
                        animate={cultureInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + 0.05 * index }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5" style={{ color: '#f68212' }} />
                        <span
                          className="text-base"
                          style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                          {value}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        ref={positionsRef}
        id="positions"
        className="relative w-full py-24 lg:py-32 overflow-hidden scroll-mt-24"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.1) 0%, transparent 70%)',
              bottom: '10%',
              right: '-5%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
              style={{ backgroundColor: 'rgba(246, 130, 18, 0.08)', color: '#f68212' }}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Opportunities
            </span>
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Open{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Positions
              </span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.6)' }}
            >
              Explore our current opportunities and find your next career move.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                animate={positionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div
                  className="relative p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid rgba(13, 28, 41, 0.06)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 40px ${position.color}20` }}
                  />
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: position.color }}
                  />
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3
                          className="font-display text-xl font-normal"
                          style={{ color: '#0d1c29' }}
                        >
                          {position.title}
                        </h3>
                        <span
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-ui"
                          style={{
                            backgroundColor: `${position.color}15`,
                            color: position.color,
                          }}
                        >
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </span>
                        <span
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-ui"
                          style={{
                            backgroundColor: 'rgba(13, 28, 41, 0.05)',
                            color: 'rgba(13, 28, 41, 0.6)',
                          }}
                        >
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </span>
                      </div>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                      >
                        {position.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href="/contact"
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-ui text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        style={{
                          backgroundColor: '#f68212',
                          color: '#ffffff',
                          boxShadow: '0 4px 20px rgba(246, 130, 18, 0.25)',
                        }}
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 group"
          >
            <div
              className="relative p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #0d1c29 0%, #132030 100%)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full"
                style={{ background: 'linear-gradient(90deg, #3498db, #f68212)' }}
              />
              <h3
                className="font-display text-xl font-normal mb-3"
                style={{ color: '#ffffff' }}
              >
                Don&apos;t See a Fit?
              </h3>
              <p
                className="text-base mb-6"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                We&apos;re always looking for talented individuals. Send us your
                resume and tell us how you can contribute to our team.
              </p>
              <Link
                href="/contact"
                className="group/link inline-flex items-center gap-2 text-base font-ui font-semibold transition-colors"
                style={{ color: '#3498db' }}
              >
                Get in Touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
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
            Join Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
            style={{ color: '#ffffff' }}
          >
            Ready to Make an{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Impact?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Join our team and help startups build strong financial foundations.
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
              Contact Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
