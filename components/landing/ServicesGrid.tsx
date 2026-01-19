'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
  },
  {
    title: 'Tax Services',
    description:
      'Corporate tax advisory, preparation and filings regardless of business type. R&D tax credit specialists.',
    href: '/services/tax',
    icon: Calculator,
  },
  {
    title: 'Fractional CFO',
    description:
      'Strategic financial leadership and insights to build growth strategies and assist in fundraising rounds.',
    href: '/services/cfo',
    icon: TrendingUp,
  },
  {
    title: 'People Operations',
    description:
      'Help craft and manage your employee experience to engage, empower and retain your team.',
    href: '/services/hr',
    icon: Users,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesGrid() {
  return (
    <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-4"
            style={{
              backgroundColor: 'rgba(13, 28, 41, 0.1)',
              color: '#0d1c29',
            }}
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ color: '#0d1c29' }}
          >
            Comprehensive Startup Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(13, 28, 41, 0.7)' }}
          >
            From day-to-day bookkeeping to strategic CFO guidance, we provide the
            financial expertise your startup needs to succeed.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link
                href={service.href}
                className="group block h-full p-8 lg:p-10 rounded-2xl transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(197, 167, 136, 0.15)' }}
                  >
                    <service.icon
                      className="h-7 w-7"
                      style={{ color: '#c5a788' }}
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className="font-display text-xl lg:text-2xl font-normal mb-3"
                    style={{ color: '#0d1c29' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6 flex-1"
                    style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                  >
                    {service.description}
                  </p>

                  {/* Link */}
                  <div
                    className="flex items-center gap-2 font-ui text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: '#c5a788' }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
