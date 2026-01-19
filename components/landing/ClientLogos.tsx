'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Placeholder logos using company-style text (you can replace with actual logos)
const clients = [
  { name: 'TechVenture', category: 'SaaS' },
  { name: 'GrowthLabs', category: 'Fintech' },
  { name: 'ScaleUp', category: 'E-commerce' },
  { name: 'Innovate.io', category: 'AI/ML' },
  { name: 'NextWave', category: 'Healthcare' },
  { name: 'Founders Co', category: 'Marketplace' },
];

export function ClientLogos() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 lg:py-20 border-y"
      style={{
        backgroundColor: '#ffffff',
        borderColor: 'rgba(13, 28, 41, 0.06)',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-ui font-medium tracking-wide mb-10"
          style={{ color: 'rgba(13, 28, 41, 0.4)' }}
        >
          TRUSTED BY INNOVATIVE STARTUPS
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />

          {/* Scrolling logos */}
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * (index % 6) }}
                className="flex-shrink-0 group cursor-default"
              >
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:bg-gray-50">
                  {/* Logo placeholder - stylized text */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-display text-lg font-light transition-colors duration-300"
                    style={{
                      backgroundColor: 'rgba(52, 152, 219, 0.08)',
                      color: '#3498db',
                    }}
                  >
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="font-ui font-semibold text-sm transition-colors duration-300"
                      style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                    >
                      {client.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(13, 28, 41, 0.4)' }}
                    >
                      {client.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
