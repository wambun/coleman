'use client';

import { motion } from 'framer-motion';
import { Users2, Cpu, Target, Rocket } from 'lucide-react';

const values = [
  {
    title: 'Finance Team',
    description:
      "You'll have an expert team working together including bookkeepers, accountants, controllers, and CFOs all dedicated to exceeding your expectations.",
    icon: Users2,
  },
  {
    title: 'Technology',
    description:
      "We'll introduce you to cloud-first technology and financial processes making you more efficient, reducing costs and setting your business on the path to success.",
    icon: Cpu,
  },
  {
    title: 'Strategy',
    description:
      "You'll have access to industry-proven CFOs giving you help to refine your strategy, create a plan for maximum growth, raise funds and more.",
    icon: Target,
  },
  {
    title: 'Execution',
    description:
      "Positive changes happen from the moment you first engage with us. You'll get fast analysis of your business with timely responses to all your questions.",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ValueProposition() {
  return (
    <section
      className="w-full py-24 lg:py-32"
      style={{ backgroundColor: '#0d1c29' }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-4"
            style={{
              backgroundColor: 'rgba(52, 152, 219, 0.15)',
              color: '#3498db',
            }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ color: '#ffffff' }}
          >
            The JColeman Advantage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            We combine expert financial leadership with cutting-edge technology
            to deliver exceptional results for startups.
          </motion.p>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="text-center p-6"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'rgba(52, 152, 219, 0.15)' }}
              >
                <value.icon className="h-8 w-8" style={{ color: '#3498db' }} />
              </div>

              {/* Content */}
              <h3
                className="font-display text-xl font-normal mb-3"
                style={{ color: '#ffffff' }}
              >
                {value.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
