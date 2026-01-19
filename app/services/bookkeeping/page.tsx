'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  FileText,
  PieChart,
  Receipt,
  ClipboardCheck,
  DollarSign,
  Search,
  BookOpen,
  Sparkles,
} from 'lucide-react';

const subServices = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    icon: FileText,
    iconColor: '#3498db',
    iconBg: 'rgba(52, 152, 219, 0.15)',
    glow: 'rgba(52, 152, 219, 0.2)',
    description:
      "We'll setup your accounting operations and optimize your bookkeeping from the start.",
    features: [
      {
        title: 'Accounts Payable',
        description:
          'We implement cloud-based tools and manage best practices to ensure your bills are paid on-time.',
      },
      {
        title: 'Collections / Accounts Receivable',
        description:
          "We reduce the amount of time you have to spend collecting from your customers. You'll see a reduction in late payments.",
      },
      {
        title: 'Bank Accounts',
        description:
          'We help manage your bank accounts by ensuring balances are accurate and perform reconciliations to internal accounting systems.',
      },
      {
        title: 'Credit Cards & ACH',
        description:
          'We implement online feeds to automatically import credit card and ACH payment information directly into your accounting system.',
      },
      {
        title: 'Online Expense Reporting',
        description:
          'We implement cloud-based expense reporting solutions that automatically transfer expenses into your accounting system.',
      },
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting & Planning',
    icon: PieChart,
    iconColor: '#f68212',
    iconBg: 'rgba(246, 130, 18, 0.15)',
    glow: 'rgba(246, 130, 18, 0.2)',
    description:
      'Our experts will guide you through your financial reports using cloud-based tools empowering you to make future business decisions.',
    features: [
      {
        title: 'Financial Reporting',
        description:
          'Monthly, quarterly, and annual reports including Profit & Loss, Balance Sheet, and Statement of Cash Flows.',
      },
      {
        title: 'Financial Planning & Analysis',
        description:
          'Financial modeling, FP&A analysis, KPI and metric tracking tailored to your business needs.',
      },
    ],
  },
  {
    id: 'tax-prep',
    title: 'Tax Prep',
    icon: Receipt,
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.15)',
    glow: 'rgba(16, 185, 129, 0.2)',
    description:
      "We've got the experience startups need to prepare you for tax filings. W2s, 1099s and more.",
    features: [
      {
        title: 'Complete Tax Prep',
        description:
          'Sales & use taxes, property taxes, franchise taxes, federal and state income tax, R&D tax credit, 1099s, and W2s.',
      },
    ],
  },
  {
    id: 'audit-prep',
    title: 'Audit Prep',
    icon: ClipboardCheck,
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139, 92, 246, 0.15)',
    glow: 'rgba(139, 92, 246, 0.2)',
    description:
      'From financials to audits - we have the experience to plan and prepare for successful outcomes.',
    features: [
      {
        title: 'Audit Preparation',
        description:
          'Financial statements, trial balances, tax returns, employment agreements, and all needed documentation.',
      },
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll',
    icon: DollarSign,
    iconColor: '#ec4899',
    iconBg: 'rgba(236, 72, 153, 0.15)',
    glow: 'rgba(236, 72, 153, 0.2)',
    description:
      "We're here to help you implement the right systems and processes for paying your employees and managing benefits.",
    features: [
      {
        title: 'Payroll Services',
        description:
          'Time & attendance, payroll policies, data entry, R&D tax credits against payroll, benefits, and tax reports.',
      },
    ],
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence',
    icon: Search,
    iconColor: '#06b6d4',
    iconBg: 'rgba(6, 182, 212, 0.15)',
    glow: 'rgba(6, 182, 212, 0.2)',
    description:
      'For you or your investor, we help provide the transparency and data to confirm business performance.',
    features: [
      {
        title: 'Due Diligence Services',
        description:
          'Monthly financials, ARR analysis, inventory, deferred revenue, cash runway, burn rate, variance reports, and compliance review.',
      },
    ],
  },
];

export default function BookkeepingPage() {
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
              style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)', color: '#3498db' }}
            >
              <BookOpen className="w-4 h-4" />
              Core Service
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Bookkeeping &{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Accounting
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              You have big ambitions for growth - we&apos;ll keep your books and
              financials in sync to help you scale.
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

      {/* Sub-services */}
      <section
        ref={servicesRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.08) 0%, transparent 70%)',
              top: '10%',
              left: '-10%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="space-y-20">
            {subServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + 0.1 * index }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                    style={{
                      backgroundColor: service.iconBg,
                      boxShadow: `0 0 30px ${service.glow}`,
                    }}
                  >
                    <service.icon className="h-8 w-8" style={{ color: service.iconColor }} />
                  </motion.div>
                  <div>
                    <h2
                      className="font-display text-2xl lg:text-3xl font-light mb-2"
                      style={{ color: '#0d1c29' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-lg" style={{ color: 'rgba(13, 28, 41, 0.6)' }}>
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 lg:ml-22">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + 0.1 * index + 0.05 * featureIndex,
                      }}
                      className="group"
                    >
                      <div
                        className="relative p-6 rounded-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg h-full"
                        style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid rgba(13, 28, 41, 0.06)',
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ boxShadow: `0 0 30px ${service.glow}` }}
                        />
                        <div className="relative z-10">
                          <h3
                            className="font-ui font-semibold mb-2"
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
            Get Started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
            style={{ color: '#ffffff' }}
          >
            Ready to Streamline Your{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Finances?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Let us handle your bookkeeping so you can focus on growing your business.
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
