'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Partner data with brand colors
const partners = [
  {
    name: 'Bill.com',
    color: '#00d632',
    bgColor: 'rgba(0, 214, 50, 0.1)',
  },
  {
    name: 'Brex',
    color: '#ff5500',
    bgColor: 'rgba(255, 85, 0, 0.1)',
  },
  {
    name: 'Expensify',
    color: '#0b8829',
    bgColor: 'rgba(11, 136, 41, 0.1)',
  },
  {
    name: 'Ramp',
    color: '#f2c94c',
    bgColor: 'rgba(242, 201, 76, 0.15)',
  },
  {
    name: 'Stripe',
    color: '#635bff',
    bgColor: 'rgba(99, 91, 255, 0.1)',
  },
  {
    name: 'Gusto',
    color: '#f45d48',
    bgColor: 'rgba(244, 93, 72, 0.1)',
  },
  {
    name: 'QuickBooks',
    color: '#2ca01c',
    bgColor: 'rgba(44, 160, 28, 0.1)',
  },
  {
    name: 'Carta',
    color: '#0058ff',
    bgColor: 'rgba(0, 88, 255, 0.1)',
  },
];

// Simple SVG icons for each partner
const PartnerIcon = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, React.ReactElement> = {
    'Bill.com': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke={color} strokeWidth="2"/>
        <path d="M3 10h18" stroke={color} strokeWidth="2"/>
        <path d="M7 14h4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'Brex': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2"/>
      </svg>
    ),
    'Expensify': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke={color} strokeWidth="2"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke={color} strokeWidth="2"/>
        <path d="M9 12h6M9 15h4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'Ramp': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M4 17l6-6 4 4 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 9h6v6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'Stripe': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'Gusto': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="2"/>
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'QuickBooks': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2"/>
        <path d="M9 9v6h3a3 3 0 100-6H9z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'Carta': (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 3v18h18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16l4-8 4 4 5-9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return icons[name] || null;
};

export function PartnerLogos() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 lg:py-16 overflow-hidden"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(13, 28, 41, 0.06)',
        borderBottom: '1px solid rgba(13, 28, 41, 0.06)',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-ui font-medium tracking-wide uppercase mb-8"
          style={{ color: 'rgba(13, 28, 41, 0.4)' }}
        >
          Integrated with the tools you trust
        </motion.p>

        {/* Logo Grid - Static display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="group"
            >
              <div
                className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                style={{
                  backgroundColor: partner.bgColor,
                  border: `1px solid transparent`,
                }}
              >
                <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
                  <PartnerIcon name={partner.name} color={partner.color} />
                </div>
                <span
                  className="text-xs font-ui font-semibold text-center whitespace-nowrap"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
