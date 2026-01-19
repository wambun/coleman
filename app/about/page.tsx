'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Linkedin, Sparkles, Users, Target, Award, CheckCircle, ChevronDown, ChevronUp, X } from 'lucide-react';
import { teamMembers, coreValues } from '@/data/team/members';

// Export metadata separately for client component
// Note: Move this to a separate layout.tsx if needed for SEO
export default function AboutPage() {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const ceoRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const ceoInView = useInView(ceoRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  // Separate CEO from other team members
  const ceo = teamMembers.find((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);

  // Unique colors for each core value
  const valueColors = [
    { iconBg: 'rgba(52, 152, 219, 0.15)', iconColor: '#3498db', glow: 'rgba(52, 152, 219, 0.2)' },
    { iconBg: 'rgba(246, 130, 18, 0.15)', iconColor: '#f68212', glow: 'rgba(246, 130, 18, 0.2)' },
    { iconBg: 'rgba(16, 185, 129, 0.15)', iconColor: '#10b981', glow: 'rgba(16, 185, 129, 0.2)' },
    { iconBg: 'rgba(139, 92, 246, 0.15)', iconColor: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.2)' },
    { iconBg: 'rgba(236, 72, 153, 0.15)', iconColor: '#ec4899', glow: 'rgba(236, 72, 153, 0.2)' },
    { iconBg: 'rgba(6, 182, 212, 0.15)', iconColor: '#06b6d4', glow: 'rgba(6, 182, 212, 0.2)' },
  ];

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
              <Users className="w-4 h-4" />
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Building{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Strong Startups
              </span>{' '}
              Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              We empower startups to thrive and transform through expert
              accounting, bookkeeping, tax, and fractional CFO services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
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

      {/* Core Values Section */}
      <section
        ref={valuesRef}
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
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
              style={{
                backgroundColor: 'rgba(246, 130, 18, 0.08)',
                color: '#f68212',
                border: '1px solid rgba(246, 130, 18, 0.15)',
              }}
            >
              <Target className="w-3.5 h-3.5" />
              What Drives Us
            </span>
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Our{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Core Values
              </span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.6)' }}
            >
              Our core values serve as guiding principles that shape our company
              culture, inform decision-making, and align us with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const colors = valueColors[index % valueColors.length];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
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
                      style={{ boxShadow: `0 0 40px ${colors.glow}` }}
                    />

                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: colors.iconColor }}
                    />

                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 font-display text-lg font-semibold transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: colors.iconBg, color: colors.iconColor }}
                      >
                        {index + 1}
                      </div>
                      <h3
                        className="font-display text-xl font-normal mb-3"
                        style={{ color: '#0d1c29' }}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO Spotlight Section */}
      {ceo && (
        <section
          ref={ceoRef}
          className="relative w-full py-24 lg:py-32 overflow-hidden"
          style={{ backgroundColor: '#0d1c29' }}
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-[800px] h-[800px] rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(246, 130, 18, 0.2) 0%, transparent 60%)',
                top: '-20%',
                right: '-20%',
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full opacity-15"
              style={{
                background: 'radial-gradient(circle, rgba(52, 152, 219, 0.2) 0%, transparent 60%)',
                bottom: '-20%',
                left: '-10%',
              }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
                backgroundSize: '80px 80px',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ceoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
                style={{ backgroundColor: 'rgba(246, 130, 18, 0.15)', color: '#f68212' }}
              >
                <Award className="w-3.5 h-3.5" />
                Leadership
              </span>
              <h2
                className="font-display text-3xl lg:text-4xl font-light mb-4"
                style={{ color: '#ffffff' }}
              >
                Meet Our{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Founder & CEO
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ceoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* CEO Photo & Quick Info */}
              <div className="lg:col-span-4">
                <div
                  className="relative p-8 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #f68212, #3498db)' }}
                  />

                  {ceo.image ? (
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 relative ring-4 ring-orange-500/20">
                      <Image
                        src={ceo.image}
                        alt={ceo.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 font-display text-4xl"
                      style={{ backgroundColor: 'rgba(246, 130, 18, 0.2)', color: '#f68212' }}
                    >
                      {ceo.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="font-display text-2xl font-light mb-1" style={{ color: '#ffffff' }}>
                      {ceo.name}
                    </h3>
                    <p className="text-base mb-4" style={{ color: '#f68212' }}>
                      {ceo.title}
                    </p>

                    {ceo.linkedIn && (
                      <a
                        href={ceo.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)', color: '#3498db' }}
                        aria-label={`${ceo.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                        Connect on LinkedIn
                      </a>
                    )}
                  </div>

                  {/* Highlights */}
                  {ceo.highlights && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <p className="text-xs uppercase tracking-wider mb-4" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                        Key Achievements
                      </p>
                      <ul className="space-y-3">
                        {ceo.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#f68212' }} />
                            <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* CEO Full Bio */}
              <div className="lg:col-span-8">
                <div
                  className="relative p-8 lg:p-10 rounded-2xl h-full"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-1 h-full rounded-full"
                    style={{ background: 'linear-gradient(180deg, #f68212, #3498db)' }}
                  />

                  <div className="prose prose-lg max-w-none">
                    {(ceo.fullBio || ceo.bio).split('\n\n').map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-base lg:text-lg leading-relaxed mb-6 last:mb-0"
                        style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Team Section */}
      <section
        ref={teamRef}
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
              right: '-10%',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.1) 0%, transparent 70%)',
              bottom: '10%',
              left: '-5%',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
              style={{
                backgroundColor: 'rgba(52, 152, 219, 0.08)',
                color: '#3498db',
                border: '1px solid rgba(52, 152, 219, 0.15)',
              }}
            >
              <Users className="w-3.5 h-3.5" />
              Our Team
            </span>
            <h2
              className="font-display text-3xl lg:text-4xl font-light mb-4"
              style={{ color: '#0d1c29' }}
            >
              Expert{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Controllers
              </span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(13, 28, 41, 0.6)' }}
            >
              Our dedicated team of experienced controllers brings decades of combined expertise
              to help your startup achieve financial excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherMembers.map((member, index) => {
              const isExpanded = expandedMember === member.name;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group"
                >
                  <div
                    className="relative p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:shadow-xl"
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid rgba(13, 28, 41, 0.06)',
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-0.5 rounded-full"
                      style={{ backgroundColor: '#3498db' }}
                    />

                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Photo */}
                      {member.image ? (
                        <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden relative ring-2 ring-blue-500/10">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      ) : (
                        <div
                          className="w-24 h-24 flex-shrink-0 rounded-full flex items-center justify-center font-display text-2xl"
                          style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', color: '#3498db' }}
                        >
                          {member.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                      )}

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-ui font-semibold text-lg" style={{ color: '#0d1c29' }}>
                              {member.name}
                              {member.credentials && (
                                <span className="ml-2 text-sm font-normal" style={{ color: '#3498db' }}>
                                  {member.credentials}
                                </span>
                              )}
                            </h3>
                            <p className="text-sm" style={{ color: 'rgba(13, 28, 41, 0.5)' }}>
                              {member.title}
                            </p>
                          </div>
                          {member.linkedIn && (
                            <a
                              href={member.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                              style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)' }}
                              aria-label={`${member.name} LinkedIn`}
                            >
                              <Linkedin className="h-4 w-4" style={{ color: '#3498db' }} />
                            </a>
                          )}
                        </div>

                        {/* Bio */}
                        <div className="mt-3">
                          <AnimatePresence mode="wait">
                            {isExpanded ? (
                              <motion.div
                                key="expanded"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {(member.fullBio || member.bio).split('\n\n').map((paragraph, idx) => (
                                  <p
                                    key={idx}
                                    className="text-sm leading-relaxed mb-4 last:mb-0"
                                    style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                              </motion.div>
                            ) : (
                              <motion.p
                                key="collapsed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-sm leading-relaxed"
                                style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                              >
                                {member.bio}
                              </motion.p>
                            )}
                          </AnimatePresence>

                          {member.fullBio && (
                            <button
                              onClick={() => setExpandedMember(isExpanded ? null : member.name)}
                              className="mt-4 inline-flex items-center gap-1 text-sm font-ui font-medium transition-colors"
                              style={{ color: '#3498db' }}
                            >
                              {isExpanded ? (
                                <>
                                  Show less <ChevronUp className="w-4 h-4" />
                                </>
                              ) : (
                                <>
                                  Read full bio <ChevronDown className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          )}
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
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(246, 130, 18, 0.08) 0%, transparent 70%)',
              top: '-20%',
              right: '-10%',
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%)',
              bottom: '-20%',
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
            {/* Accent glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(52, 152, 219, 0.5) 50%, transparent 100%)',
              }}
            />

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
              Let&apos;s Connect
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-6"
              style={{ color: '#ffffff' }}
            >
              Ready to Work{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Together?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Let&apos;s discuss how our team can help your startup thrive.
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
