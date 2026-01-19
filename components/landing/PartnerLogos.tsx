'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  { name: 'Bill.com', category: 'Payments' },
  { name: 'Brex', category: 'Banking' },
  { name: 'Expensify', category: 'Expenses' },
  { name: 'Ramp', category: 'Finance' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Gusto', category: 'Payroll' },
  { name: 'QuickBooks', category: 'Accounting' },
  { name: 'Carta', category: 'Equity' },
];

export function PartnerLogos() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 lg:py-20 overflow-hidden border-t"
      style={{
        backgroundColor: '#ffffff',
        borderColor: 'rgba(13, 28, 41, 0.06)',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p
            className="text-sm font-ui font-medium tracking-wide uppercase"
            style={{ color: 'rgba(13, 28, 41, 0.4)' }}
          >
            Integrated with the{' '}
            <span style={{ color: '#3498db' }}>best financial platforms</span>
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{
              background: 'linear-gradient(to right, #ffffff, transparent)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{
              background: 'linear-gradient(to left, #ffffff, transparent)',
            }}
          />

          {/* Scrolling Logos */}
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.03 * (index % 8) }}
                className="flex-shrink-0 group"
              >
                <div
                  className="px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg cursor-default"
                  style={{
                    backgroundColor: 'rgba(13, 28, 41, 0.02)',
                    border: '1px solid transparent',
                  }}
                >
                  <div className="flex items-center gap-3">
                    {/* Logo placeholder */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-ui font-bold text-sm transition-colors duration-300"
                      style={{
                        backgroundColor: 'rgba(52, 152, 219, 0.08)',
                        color: '#3498db',
                      }}
                    >
                      {partner.name.charAt(0)}
                    </div>
                    <div>
                      <p
                        className="font-ui font-semibold text-sm whitespace-nowrap transition-colors duration-300"
                        style={{ color: 'rgba(13, 28, 41, 0.8)' }}
                      >
                        {partner.name}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: 'rgba(13, 28, 41, 0.4)' }}
                      >
                        {partner.category}
                      </p>
                    </div>
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
