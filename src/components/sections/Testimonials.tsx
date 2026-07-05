import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Client <span className="text-gradient">Testimonials</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Don't just take my word for it. Here's what some of my clients have to say about working with me.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card p-8 md:p-12 relative">
          <Quote className="absolute top-8 left-8 text-white/5 w-24 h-24" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex space-x-1 text-accent mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 mb-4 p-1">
                    <img 
                      src={TESTIMONIALS[currentIndex].avatar} 
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-white text-lg">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <span className="text-sm text-primary font-medium">
                    {TESTIMONIALS[currentIndex].position}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
