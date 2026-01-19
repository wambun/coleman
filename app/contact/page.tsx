'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Linkedin, MessageSquare, Clock, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/config/site.settings';

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      content: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      iconColor: '#3498db',
      iconBg: 'rgba(52, 152, 219, 0.15)',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '1636 Roadrunner Dr\nRoseville, CA 95747',
      iconColor: '#f68212',
      iconBg: 'rgba(246, 130, 18, 0.15)',
    },
  ];

  if (siteConfig.linkedin) {
    contactMethods.push({
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Follow us on LinkedIn',
      href: siteConfig.linkedin,
      external: true,
      iconColor: '#10b981',
      iconBg: 'rgba(16, 185, 129, 0.15)',
    } as typeof contactMethods[0]);
  }

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
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6"
              style={{ color: '#ffffff' }}
            >
              Let&apos;s Start a{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Conversation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Ready to transform your startup&apos;s financial operations?
              We&apos;d love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section
        ref={formRef}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div
                className="relative p-8 lg:p-10 rounded-2xl transition-all duration-500"
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid rgba(13, 28, 41, 0.06)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: '0 0 60px rgba(52, 152, 219, 0.15)' }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #3498db, #f68212)' }}
                />

                <div className="relative z-10">
                  <h2
                    className="font-display text-2xl lg:text-3xl font-light mb-6"
                    style={{ color: '#0d1c29' }}
                  >
                    Request{' '}
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Information
                    </span>
                  </h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-ui font-medium mb-2"
                          style={{ color: '#0d1c29' }}
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                          style={{
                            borderColor: 'rgba(13, 28, 41, 0.1)',
                            backgroundColor: '#ffffff',
                          }}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-ui font-medium mb-2"
                          style={{ color: '#0d1c29' }}
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                          style={{
                            borderColor: 'rgba(13, 28, 41, 0.1)',
                            backgroundColor: '#ffffff',
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-ui font-medium mb-2"
                        style={{ color: '#0d1c29' }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        style={{
                          borderColor: 'rgba(13, 28, 41, 0.1)',
                          backgroundColor: '#ffffff',
                        }}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-ui font-medium mb-2"
                        style={{ color: '#0d1c29' }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        style={{
                          borderColor: 'rgba(13, 28, 41, 0.1)',
                          backgroundColor: '#ffffff',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-ui font-medium mb-2"
                        style={{ color: '#0d1c29' }}
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        style={{
                          borderColor: 'rgba(13, 28, 41, 0.1)',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <option value="">Select a service...</option>
                        <option value="bookkeeping">Bookkeeping & Accounting</option>
                        <option value="tax">Tax Services</option>
                        <option value="cfo">Fractional CFO</option>
                        <option value="hr">People Operations</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-ui font-medium mb-2"
                        style={{ color: '#0d1c29' }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                        style={{
                          borderColor: 'rgba(13, 28, 41, 0.1)',
                          backgroundColor: '#ffffff',
                        }}
                        placeholder="Tell us about your startup and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-full font-ui text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                      style={{
                        backgroundColor: '#f68212',
                        color: '#ffffff',
                        boxShadow: '0 4px 30px rgba(246, 130, 18, 0.3)',
                      }}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2
                  className="font-display text-2xl lg:text-3xl font-light mb-6"
                  style={{ color: '#0d1c29' }}
                >
                  Contact{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Information
                  </span>
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                >
                  We&apos;re here to help your startup succeed. Reach out and
                  let&apos;s discuss how we can work together.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: method.iconBg }}
                    >
                      <method.icon className="h-6 w-6" style={{ color: method.iconColor }} />
                    </div>
                    <div>
                      <h3
                        className="font-ui font-semibold mb-1"
                        style={{ color: '#0d1c29' }}
                      >
                        {method.title}
                      </h3>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={(method as { external?: boolean }).external ? '_blank' : undefined}
                          rel={(method as { external?: boolean }).external ? 'noopener noreferrer' : undefined}
                          className="text-base hover:underline transition-colors"
                          style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                        >
                          {method.content}
                        </a>
                      ) : (
                        <p
                          className="text-base whitespace-pre-line"
                          style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                        >
                          {method.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Response Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="group"
              >
                <div
                  className="relative p-6 rounded-xl transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, #0d1c29 0%, #132030 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: '0 0 40px rgba(52, 152, 219, 0.2)' }}
                  />
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #3498db, #f68212)' }}
                  />
                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(246, 130, 18, 0.15)' }}
                    >
                      <Clock className="h-6 w-6" style={{ color: '#f68212' }} />
                    </div>
                    <div>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-ui font-medium mb-2 px-2 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(246, 130, 18, 0.15)', color: '#f68212' }}
                      >
                        <Sparkles className="w-3 h-3" />
                        Guaranteed
                      </span>
                      <h3
                        className="font-ui font-semibold mb-1"
                        style={{ color: '#ffffff' }}
                      >
                        Quick Response
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                      >
                        We pride ourselves on our responsiveness. Expect to hear back
                        from us within 24 hours on business days.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
