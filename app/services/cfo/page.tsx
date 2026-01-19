'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  PiggyBank,
  Rocket,
  Settings,
  Shield,
  Globe,
  Search,
  LogOut,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    title: 'Cash Flow',
    icon: PiggyBank,
    iconColor: '#3498db',
    iconBg: 'rgba(52, 152, 219, 0.15)',
    description: 'Help managing your capital runway, obligations and ability to invest in ongoing R&D.',
  },
  {
    title: 'Financial Reporting',
    icon: BarChart3,
    iconColor: '#f68212',
    iconBg: 'rgba(246, 130, 18, 0.15)',
    description: "Know what's happening in your business at all times with clear, actionable reporting.",
  },
  {
    title: 'Profit Optimization',
    icon: TrendingUp,
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.15)',
    description: 'Improve margins with extensive analysis of service lines, product offerings, and more.',
  },
  {
    title: 'Fundraising',
    icon: Rocket,
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139, 92, 246, 0.15)',
    description: 'Create a plan for timing, funds needed, and the approach for Series A and beyond.',
  },
  {
    title: 'Processes',
    icon: Settings,
    iconColor: '#ec4899',
    iconBg: 'rgba(236, 72, 153, 0.15)',
    description: 'Put systems and controls in place to scale fast and reliably across the business.',
  },
  {
    title: 'Risk Management',
    icon: Shield,
    iconColor: '#06b6d4',
    iconBg: 'rgba(6, 182, 212, 0.15)',
    description: "Understand from experience the challenges you'll face and be prepared for them.",
  },
  {
    title: 'Go-to-Market',
    icon: Globe,
    iconColor: '#f59e0b',
    iconBg: 'rgba(245, 158, 11, 0.15)',
    description: 'Explore new business models, verticals, marketing, and customers for growth.',
  },
  {
    title: 'Competitor Analysis',
    icon: Search,
    iconColor: '#ef4444',
    iconBg: 'rgba(239, 68, 68, 0.15)',
    description: 'Rise above by understanding strengths and weaknesses of competitors in your market.',
  },
  {
    title: 'Exit Strategy',
    icon: LogOut,
    iconColor: '#14b8a6',
    iconBg: 'rgba(20, 184, 166, 0.15)',
    description: 'Be prepared for an acquisition with defensible financials and a clear strategy.',
  },
];

const benefits = [
  {
    title: 'CFO Benefits at a Fraction of the Cost',
    description:
      'Interim, part-time, full-time, and contract services allow you to adjust at any time - up or down - as needed.',
  },
  {
    title: 'Matched to Your Industry',
    description:
      'Our CFOs come to you with relevant experience in your business to guide you to success as fast as possible.',
  },
  {
    title: 'The Face of Your Financials',
    description:
      'CFOs represent your financials to your investors and board as well as to the bookkeeping and accounting team.',
  },
  {
    title: 'Elevated Decision Support',
    description:
      "You'll have more metrics, reports, analysis, and modeling to make effective decisions for growth and exits.",
  },
];

export default function CFOPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-ui mb-6 transition-colors hover:opacity-80"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Services
              </Link>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}
            >
              <TrendingUp className="w-4 h-4" />
              Strategic Leadership
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Fractional{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CFO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              We give you access to the best financial leaders with expertise in
              your industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                Request Information
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={servicesRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
              top: '-10%',
              left: '-10%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Take Your Business to the{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Next Level
              </span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.6)' }}
            >
              Our fractional CFOs provide strategic guidance across all aspects
              of your financial operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group"
              >
                <div
                  className="relative p-6 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid rgba(13, 28, 41, 0.06)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 30px ${service.iconBg}` }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: service.iconBg }}
                    >
                      <service.icon className="h-6 w-6" style={{ color: service.iconColor }} />
                    </div>
                    <h3
                      className="font-ui font-semibold text-lg mb-2"
                      style={{ color: '#0d1c29' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
              bottom: '-20%',
              right: '-10%',
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
              style={{ color: '#ffffff' }}
            >
              Fractional CFO{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Benefits
              </span>
            </h2>
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
                  className="relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 h-full"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.2)' }}
                  />
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: '#10b981' }}
                  />
                  <div className="relative z-10 flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#10b981' }} />
                    <div>
                      <h3
                        className="font-display text-xl font-normal mb-3"
                        style={{ color: '#ffffff' }}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
              top: '-10%',
              right: '-10%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-12 lg:p-16 text-center"
            style={{
              background: 'linear-gradient(135deg, #0d1c29 0%, #132030 100%)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.5) 50%, transparent 100%)',
              }}
            />

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium mb-6"
              style={{ backgroundColor: 'rgba(246, 130, 18, 0.15)', color: '#f68212' }}
            >
              <Sparkles className="w-4 h-4" />
              Get Started
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
              style={{ color: '#ffffff' }}
            >
              Ready for Strategic Financial{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Leadership?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Get CFO-level expertise tailored to your startup&apos;s needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
