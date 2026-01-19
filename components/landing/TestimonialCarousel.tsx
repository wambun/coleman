'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials, type Testimonial } from '@/data/testimonials/testimonials';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full py-24 lg:py-32" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-ui font-medium tracking-wide mb-4"
            style={{
              backgroundColor: 'rgba(13, 28, 41, 0.1)',
              color: '#0d1c29',
            }}
          >
            Client Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ color: '#0d1c29' }}
          >
            Trusted by Leading Startups
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div
            className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center z-10"
            style={{ backgroundColor: '#f68212' }}
          >
            <Quote className="h-6 w-6 text-white" />
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-8 lg:p-12"
            style={{ backgroundColor: '#ffffff' }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="min-h-[280px] flex flex-col justify-between"
              >
                {/* Quote */}
                <p
                  className="text-lg lg:text-xl leading-relaxed mb-8 italic"
                  style={{ color: 'rgba(13, 28, 41, 0.8)' }}
                >
                  "{currentTestimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="font-ui font-semibold text-lg"
                      style={{ color: '#0d1c29' }}
                    >
                      {currentTestimonial.author}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'rgba(13, 28, 41, 0.6)' }}
                    >
                      {currentTestimonial.title} at{' '}
                      {currentTestimonial.companyUrl ? (
                        <a
                          href={currentTestimonial.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: '#3498db' }}
                        >
                          {currentTestimonial.company}
                        </a>
                      ) : (
                        <span style={{ color: '#3498db' }}>
                          {currentTestimonial.company}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'rgba(13, 28, 41, 0.1)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" style={{ color: '#0d1c29' }} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'w-8' : ''
                  }`}
                  style={{
                    backgroundColor:
                      index === currentIndex ? '#3498db' : 'rgba(13, 28, 41, 0.2)',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: 'rgba(13, 28, 41, 0.1)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" style={{ color: '#0d1c29' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
