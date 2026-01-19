'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Bill', logo: '/static/images/partners/bill.png' },
  { name: 'Brex', logo: '/static/images/partners/brex.png' },
  { name: 'Expensify', logo: '/static/images/partners/expensify.png' },
  { name: 'Ramp', logo: '/static/images/partners/ramp.png' },
  { name: 'Stripe', logo: '/static/images/partners/stripe.png' },
  { name: 'Gusto', logo: '/static/images/partners/gusto.png' },
  { name: 'QuickBooks', logo: '/static/images/partners/quickbooks.png' },
  { name: 'Carta', logo: '/static/images/partners/carta.png' },
];

export function PartnerLogos() {
  return (
    <section
      className="w-full py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-ui font-medium tracking-wide uppercase mb-10"
          style={{ color: 'rgba(13, 28, 41, 0.5)' }}
        >
          We Leverage the Best Financial Platforms
        </motion.p>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{
              background:
                'linear-gradient(to right, #ffffff, transparent)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{
              background:
                'linear-gradient(to left, #ffffff, transparent)',
            }}
          />

          {/* Scrolling Logos */}
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {/* Placeholder for logos - using text for now */}
                <span
                  className="font-ui font-semibold text-lg whitespace-nowrap"
                  style={{ color: 'rgba(13, 28, 41, 0.7)' }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
