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
} from 'lucide-react';

const services = [
  {
    title: 'Bookkeeping & Accounting',
    description:
      'Cloud-based bookkeeping and accounting through all stages of growth. We handle AP, AR, reporting, and more.',
    href: '/services/bookkeeping',
    icon: BookOpen,
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'rgba(52, 152, 219, 0.12)',
    iconColor: '#3498db',
  },
  {
    title: 'Tax Services',
    description:
      'Corporate tax advisory, preparation and filings regardless of business type. R&D tax credit specialists.',
    href: '/services/tax',
    icon: Calculator,
    gradient: 'from-orange-500/10 to-amber-500/10',
    iconBg: 'rgba(246, 130, 18, 0.12)',
    iconColor: '#f68212',
  },
  {
    title: 'Fractional CFO',
    description:
      'Strategic financial leadership and insights to build growth strategies and assist in fundraising rounds.',
    href: '/services/cfo',
    icon: TrendingUp,
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconBg: 'rgba(16, 185, 129, 0.12)',
    iconColor: '#10b981',
  },
  {
    title: 'People Operations',
    description:
      'Help craft and manage your employee experience to engage, empower and retain your team.',
    href: '/services/hr',
    icon: Users,
    gradient: 'from-purple-500/10 to-violet-500/10',
    iconBg: 'rgba(139, 92, 246, 0.12)',
    iconColor: '#8b5cf6',
  },
];

export function ServicesGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#f8fafc' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(52, 152, 219, 0.08) 0%, transparent 70%)',
            top: '-10%',
            left: '-5%',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(246, 130, 18, 0.08) 0%, transparent 70%)',
            bottom: '-10%',
            right: '-5%',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
            style={{
              backgroundColor: 'rgba(52, 152, 219, 0.08)',
              color: '#3498db',
              border: '1px solid rgba(52, 152, 219, 0.15)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6"
            style={{ color: '#0d1c29' }}
          >
            Comprehensive Startup{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl max-w-2xl mx-auto"
            style={{ color: 'rgba(13, 28, 41, 0.6)' }}
          >
            From day-to-day bookkeeping to strategic CFO guidance, we provide the
            financial expertise your startup needs to succeed.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
            >
              <Link
                href={service.href}
                className="group relative block h-full p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                }}
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card border glow on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 40px ${service.iconColor}15, 0 20px 40px rgba(0, 0, 0, 0.08)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: service.iconBg }}
                    >
                      <service.icon
                        className="h-8 w-8 transition-transform duration-300"
                        style={{ color: service.iconColor }}
                      />
                    </div>
                    {/* Icon glow */}
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ backgroundColor: service.iconColor }}
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className="font-display text-xl lg:text-2xl font-normal mb-3 transition-colors duration-300"
                    style={{ color: '#0d1c29' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6 flex-1"
                    style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                  >
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center justify-between">
                    <span
                      className="flex items-center gap-2 font-ui text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                      style={{ color: service.iconColor }}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    {/* Decorative dots */}
                    <div className="flex gap-1 opacity-30">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.iconColor }} />
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.iconColor }} />
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.iconColor }} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: '#0d1c29',
              color: '#ffffff',
            }}
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
