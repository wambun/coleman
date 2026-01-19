'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  UserPlus,
  Users,
  Wallet,
  BookOpen,
  Heart,
  Target,
  Sparkles,
} from 'lucide-react';

const mainServices = [
  {
    title: 'Acquiring Talent',
    icon: UserPlus,
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139, 92, 246, 0.15)',
    glow: 'rgba(139, 92, 246, 0.2)',
    description: 'Help with recruiting, scheduling and training the best employees in the least amount of time.',
  },
  {
    title: 'Employee Types',
    icon: Users,
    iconColor: '#3498db',
    iconBg: 'rgba(52, 152, 219, 0.15)',
    glow: 'rgba(52, 152, 219, 0.2)',
    description: 'Help with remote, full-time, and contract types of employees from W2s to 1099s.',
  },
  {
    title: 'Payroll & Benefits',
    icon: Wallet,
    iconColor: '#f68212',
    iconBg: 'rgba(246, 130, 18, 0.15)',
    glow: 'rgba(246, 130, 18, 0.2)',
    description: 'Help with compensation, health insurance, 401k plans, PEO plans, FMLA, disability, etc.',
  },
];

const additionalServices = [
  {
    title: 'Onboarding',
    icon: BookOpen,
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.15)',
    description: 'We help with background checks, offer letters, employment agreements and IT needs.',
  },
  {
    title: 'Retention',
    icon: Heart,
    iconColor: '#ec4899',
    iconBg: 'rgba(236, 72, 153, 0.15)',
    description: 'Help with company mission, core values, inclusion, diversity, and retention bonuses.',
  },
  {
    title: 'Goals',
    icon: Target,
    iconColor: '#06b6d4',
    iconBg: 'rgba(6, 182, 212, 0.15)',
    description: 'Help with setting and tracking goals, milestones, performance reviews and career trajectory.',
  },
];

export default function HRPage() {
  const heroRef = useRef(null);
  const mainRef = useRef(null);
  const additionalRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const mainInView = useInView(mainRef, { once: true, margin: '-100px' });
  const additionalInView = useInView(additionalRef, { once: true, margin: '-100px' });
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
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
              top: '-20%',
              right: '-10%',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 60%)',
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
              style={{ backgroundColor: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}
            >
              <Users className="w-4 h-4" />
              People First
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              People{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Operations
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              We&apos;ll help craft and manage your employee experience to
              engage, empower and retain them.
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

      {/* How Can We Help Section */}
      <section
        ref={mainRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
              top: '-10%',
              left: '-10%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-6"
              style={{ color: '#0d1c29' }}
            >
              How Can We{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Help?
              </span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: 'rgba(13, 28, 41, 0.6)' }}
            >
              Our People Operations builds and executes programs to help
              acquire, retain and empower your workforce. We help you realize an
              inclusive work culture where employees want to be.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(13, 28, 41, 0.6)' }}
            >
              In addition, we provide typical human resource functions such as
              payroll, benefits, and compliance for in-office employees and
              those working remote across the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={mainInView ? { opacity: 1, y: 0 } : {}}
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
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 40px ${service.glow}` }}
                  />
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: service.iconColor }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: service.iconBg,
                        boxShadow: `0 0 30px ${service.glow}`,
                      }}
                    >
                      <service.icon className="h-8 w-8" style={{ color: service.iconColor }} />
                    </div>
                    <h3
                      className="font-display text-xl font-normal mb-3"
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

      {/* Why You Need People Operations */}
      <section
        ref={additionalRef}
        className="relative w-full py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0d1c29' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
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
              animate={additionalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-display text-3xl lg:text-4xl font-light mb-6"
                style={{ color: '#ffffff' }}
              >
                Why You Need{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  People Operations
                </span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Modern workplace dynamics are continuing to evolve and as a
                result, employees have much higher expectations for their work
                experiences. With increased remote work, employees have more
                options than ever.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Employees expect comprehensive onboarding, learning and
                development programs, management interactions and a framework of
                equity and inclusivity.
              </p>
            </motion.div>

            <div className="space-y-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={additionalInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group"
                >
                  <div
                    className="relative p-6 rounded-xl flex items-start gap-4 transition-all duration-500 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 30px ${service.iconBg}` }}
                    />
                    <div className="relative z-10 flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: service.iconBg }}
                      >
                        <service.icon className="h-6 w-6" style={{ color: service.iconColor }} />
                      </div>
                      <div>
                        <h3
                          className="font-ui font-semibold mb-1"
                          style={{ color: '#ffffff' }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
              bottom: '-10%',
              left: '-10%',
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
                background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.5) 50%, transparent 100%)',
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
              Build a{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Thriving Team
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Let us help you create an employee experience that attracts and
              retains top talent.
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
