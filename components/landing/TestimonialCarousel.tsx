'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials/testimonials';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(52, 152, 219, 0.06) 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(246, 130, 18, 0.08) 0%, transparent 70%)',
            bottom: '10%',
            right: '-10%',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            <Star className="w-3.5 h-3.5" fill="#f68212" />
            Client Success Stories
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4"
            style={{ color: '#0d1c29' }}
          >
            Trusted by{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f68212 0%, #e67e22 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Leading Startups
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(13, 28, 41, 0.6)' }}
          >
            See what founders and executives say about working with our team.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Large quote decoration */}
          <div className="absolute -top-8 -left-4 lg:-left-12 opacity-10">
            <Quote className="w-24 h-24 lg:w-32 lg:h-32" style={{ color: '#3498db' }} />
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-8 lg:p-12 shadow-xl"
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid rgba(13, 28, 41, 0.06)',
            }}
          >
            {/* Accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: 'linear-gradient(90deg, #3498db 0%, #f68212 100%)',
              }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="min-h-[260px] flex flex-col justify-between"
              >
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill="#f68212"
                      style={{ color: '#f68212' }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-xl lg:text-2xl leading-relaxed mb-8 font-light"
                  style={{ color: '#0d1c29' }}
                >
                  "{currentTestimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-display text-lg"
                    style={{
                      background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
                      color: '#ffffff',
                    }}
                  >
                    {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
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
                          className="font-medium hover:underline"
                          style={{ color: '#3498db' }}
                        >
                          {currentTestimonial.company}
                        </a>
                      ) : (
                        <span className="font-medium" style={{ color: '#3498db' }}>
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
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(13, 28, 41, 0.1)',
              }}
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
                  className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
                  style={{
                    width: index === currentIndex ? 32 : 8,
                    backgroundColor:
                      index === currentIndex ? '#3498db' : 'rgba(13, 28, 41, 0.15)',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 8, ease: 'linear' }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(13, 28, 41, 0.1)',
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" style={{ color: '#0d1c29' }} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
