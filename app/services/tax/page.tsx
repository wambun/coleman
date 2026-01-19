'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  FileCheck,
  Users,
  Calendar,
  Lightbulb,
  Calculator,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const features = [
  {
    title: 'Simplified Taxes',
    icon: FileCheck,
    iconColor: '#3498db',
    iconBg: 'rgba(52, 152, 219, 0.15)',
    glow: 'rgba(52, 152, 219, 0.2)',
    description:
      'We handle all your filings including 1120/1120S, 1065, 1040, 1099, sales & use, property tax, franchise tax and other business tax matters.',
  },
  {
    title: 'Tax Experts',
    icon: Users,
    iconColor: '#f68212',
    iconBg: 'rgba(246, 130, 18, 0.15)',
    glow: 'rgba(246, 130, 18, 0.2)',
    description:
      "Our tax experts have decades of experience in all areas of corporate tax. You'll have a dedicated professional ensuring the correct strategy is created and executed.",
  },
  {
    title: 'Year-Round Support',
    icon: Calendar,
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.15)',
    glow: 'rgba(16, 185, 129, 0.2)',
    description:
      'We stand behind you with year-round tax advice, planning, and filings for federal, state and local agencies.',
  },
];

const rdBenefits = [
  'Credits against income tax liability',
  'Credits against payroll tax for qualifying companies',
  'Applicable to software development activities',
  'Can be combined with other tax incentives',
  'Carry-forward provisions available',
  'Immediate cash flow benefits',
];

export default function TaxPage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const rdRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' });
  const rdInView = useInView(rdRef, { once: true, margin: '-100px' });
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
              style={{ backgroundColor: 'rgba(246, 130, 18, 0.15)', color: '#f68212' }}
            >
              <Calculator className="w-4 h-4" />
              Expert Service
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Tax{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              We are tax experts for startups and will remove the burden they
              place on you so you can focus on your business.
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

      {/* Features */}
      <section
        ref={featuresRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.08) 0%, transparent 70%)',
              top: '-10%',
              right: '-10%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Leverage Us for Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Startup Taxes
              </span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.6)' }}
            >
              Whether we&apos;ve been handling your books or not, we have the
              expertise to take on your tax needs at any stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div
                  className="relative p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full"
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid rgba(13, 28, 41, 0.06)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 40px ${feature.glow}` }}
                  />
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: feature.iconColor }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: feature.iconBg,
                        boxShadow: `0 0 30px ${feature.glow}`,
                      }}
                    >
                      <feature.icon className="h-8 w-8" style={{ color: feature.iconColor }} />
                    </div>
                    <h3
                      className="font-display text-xl font-normal mb-3"
                      style={{ color: '#0d1c29' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Tax Credit Section */}
      <section
        ref={rdRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.15) 0%, transparent 60%)',
              top: '-10%',
              left: '-10%',
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={rdInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)' }}
              >
                <Lightbulb className="h-5 w-5" style={{ color: '#3498db' }} />
                <span className="text-sm font-ui font-medium" style={{ color: '#3498db' }}>
                  Featured Service
                </span>
              </span>

              <h2
                className="font-display text-3xl lg:text-4xl font-light mb-6"
                style={{ color: '#ffffff' }}
              >
                Research & Development{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Tax Credit
                </span>
              </h2>

              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                This government-created tax deduction allows credits to
                companies conducting R&D in the US. As with other tax incentives,
                a credit can be claimed against income tax liability or payroll
                tax for qualifying companies.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                We are seasoned experts at helping eligible clients qualify and
                apply for this credit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={rdInView ? { opacity: 1, x: 0 } : {}}
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
                    className="font-ui text-sm font-semibold uppercase tracking-wider mb-6"
                    style={{ color: '#3498db' }}
                  >
                    R&D Credit Benefits
                  </h3>
                  <ul className="space-y-4">
                    {rdBenefits.map((benefit, index) => (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={rdInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + 0.05 * index }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#f68212' }} />
                        <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
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
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.1) 0%, transparent 70%)',
              bottom: '-10%',
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
                background: 'linear-gradient(90deg, transparent 0%, rgba(246, 130, 18, 0.5) 50%, transparent 100%)',
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
              Start Today
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
              style={{ color: '#ffffff' }}
            >
              Optimize Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Tax Strategy
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Let our tax experts help you minimize liability and maximize credits.
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-sm"
              style={{ color: 'rgba(255, 255, 255, 0.4)' }}
            >
              Tax & attest services are performed exclusively by JColeman
              Consulting Tax, PC.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
