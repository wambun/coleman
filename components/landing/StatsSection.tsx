'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 100,
    prefix: '$',
    suffix: 'M+',
    label: 'Raised for Startups',
    description: 'In non-dilutive and equity financing',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Years Experience',
    description: 'Combined team expertise',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Startups Served',
    description: 'Across diverse industries',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Retention',
    description: 'Long-term partnerships',
  },
];

export function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#0d1c29' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(52, 152, 219, 0.2) 0%, transparent 60%)',
            top: '-20%',
            right: '-10%',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(246, 130, 18, 0.2) 0%, transparent 60%)',
            bottom: '-20%',
            left: '-10%',
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
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-6"
            style={{
              backgroundColor: 'rgba(52, 152, 219, 0.15)',
              color: '#3498db',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Our Impact
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ color: '#ffffff' }}
          >
            Numbers That{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3498db 0%, #5dade2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Speak
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <div
                className="p-6 lg:p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 60px rgba(52, 152, 219, 0.15)',
                  }}
                />

                <div className="relative z-10">
                  <p
                    className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-2"
                    style={{ color: '#3498db' }}
                  >
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p
                    className="font-ui font-semibold text-sm mb-1"
                    style={{ color: '#ffffff' }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
