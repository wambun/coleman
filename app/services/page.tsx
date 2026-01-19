'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  BookOpen,
  Calculator,
  TrendingUp,
  Users,
  ArrowRight,
  Briefcase,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    title: 'Bookkeeping & Accounting',
    description:
      'Cloud-based bookkeeping and accounting through all stages of growth. From accounts payable to financial reporting, we handle it all.',
    features: [
      'Accounts Payable & Receivable',
      'Bank Reconciliation',
      'Financial Reporting',
      'Payroll Management',
      'Audit Preparation',
      'Due Diligence Support',
    ],
    href: '/services/bookkeeping',
    icon: BookOpen,
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: '#3498db',
    iconBg: 'rgba(52, 152, 219, 0.15)',
    glow: 'rgba(52, 152, 219, 0.2)',
  },
  {
    title: 'Tax Services',
    description:
      'Corporate tax advisory, preparation and filings. We specialize in startup tax needs including R&D tax credits.',
    features: [
      'Corporate Tax Filing',
      'R&D Tax Credits',
      '1099 & W2 Preparation',
      'Sales & Use Tax',
      'State & Local Tax',
      'Year-round Advisory',
    ],
    href: '/services/tax',
    icon: Calculator,
    gradient: 'from-orange-500/10 to-amber-500/10',
    iconColor: '#f68212',
    iconBg: 'rgba(246, 130, 18, 0.15)',
    glow: 'rgba(246, 130, 18, 0.2)',
  },
  {
    title: 'Fractional CFO',
    description:
      'Strategic financial leadership to build growth strategies, improve cash flow, and assist in fundraising rounds.',
    features: [
      'Cash Flow Management',
      'Financial Reporting',
      'Fundraising Support',
      'Board Relations',
      'Exit Strategy',
      'Growth Planning',
    ],
    href: '/services/cfo',
    icon: TrendingUp,
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.15)',
    glow: 'rgba(16, 185, 129, 0.2)',
  },
  {
    title: 'People Operations',
    description:
      'Build and manage your employee experience to engage, empower and retain your team across all stages of growth.',
    features: [
      'Talent Acquisition',
      'Onboarding Programs',
      'Payroll & Benefits',
      'Performance Management',
      'Compliance',
      'Retention Strategies',
    ],
    href: '/services/hr',
    icon: Users,
    gradient: 'from-purple-500/10 to-violet-500/10',
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139, 92, 246, 0.15)',
    glow: 'rgba(139, 92, 246, 0.2)',
  },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0d1c29' }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.15) 0%, transparent 60%)',
              top: '-20%',
              right: '-10%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.12) 0%, transparent 60%)',
              bottom: '-20%',
              left: '-10%',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
              `,
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
              style={{
                backgroundColor: 'rgba(52, 152, 219, 0.15)',
                color: '#3498db',
              }}
            >
              <Briefcase className="w-4 h-4" />
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Comprehensive{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Financial Solutions
              </span>{' '}
              for Startups
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              From day-to-day bookkeeping to strategic CFO guidance, we provide
              the expertise your startup needs to succeed at every stage of growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section
        ref={servicesRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.08) 0%, transparent 70%)',
              top: '10%',
              left: '-10%',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.1) 0%, transparent 70%)',
              bottom: '20%',
              right: '-5%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + 0.15 * index }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110"
                    style={{
                      backgroundColor: service.iconBg,
                      boxShadow: `0 0 30px ${service.glow}`,
                    }}
                  >
                    <service.icon
                      className="h-8 w-8"
                      style={{ color: service.iconColor }}
                    />
                  </motion.div>
                  <h2
                    className="font-display text-3xl lg:text-4xl font-light mb-4"
                    style={{ color: '#0d1c29' }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                  >
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 font-ui text-base font-semibold transition-all duration-300"
                    style={{ color: service.iconColor }}
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Features Card */}
                <div className="flex-1 w-full group">
                  <div
                    className="relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid rgba(13, 28, 41, 0.06)',
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 40px ${service.glow}` }}
                    />

                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full"
                      style={{ backgroundColor: service.iconColor }}
                    />

                    <div className="relative z-10">
                      <h3
                        className="font-ui text-sm font-semibold uppercase tracking-wider mb-6"
                        style={{ color: 'rgba(13, 28, 41, 0.4)' }}
                      >
                        Key Features
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.4,
                              delay: 0.3 + 0.15 * index + 0.05 * featureIndex,
                            }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2
                              className="w-5 h-5 flex-shrink-0"
                              style={{ color: service.iconColor }}
                            />
                            <span style={{ color: '#0d1c29' }}>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
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
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.12) 0%, transparent 60%)',
              bottom: '-20%',
              left: '-10%',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium mb-6"
              style={{
                backgroundColor: 'rgba(246, 130, 18, 0.15)',
                color: '#f68212',
              }}
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
              Ready to Get{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Started?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Let&apos;s discuss how our services can help your startup thrive.
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
                Request Information
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
