import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import { EXPERIENCE } from '../../data';

const ExperienceCard: React.FC<{ exp: typeof EXPERIENCE[number]; align: 'left' | 'right' }> = ({ exp, align }) => (
  <div className={`glass-card p-6 md:p-8 ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{exp.position}</h3>
    <div className={`flex items-center flex-wrap gap-3 md:gap-4 mb-3 md:mb-4 text-muted text-sm ${
      align === 'left' ? 'md:justify-end' : 'md:justify-start'
    }`}>
      <span className="flex items-center gap-1">
        <Building2 size={16} className="text-primary" />
        {exp.company}
      </span>
      <span className="flex items-center gap-1">
        <Calendar size={16} className="text-accent" />
        {exp.duration}
      </span>
    </div>
    {Array.isArray(exp.description) ? (
      <ul className="text-muted text-sm md:text-base mb-4 md:mb-6 leading-relaxed space-y-2">
        {exp.description.map((item, idx) => (
          <li key={idx} className={`flex items-start gap-2 ${align === 'left' ? 'md:flex-row-reverse' : ''}`}>
            <span className="text-primary mt-1.5 text-xs">◆</span>
            <span className={align === 'left' ? 'md:text-right text-left' : 'text-left'}>{item}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-muted text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{exp.description}</p>
    )}
    <div className={`flex flex-wrap gap-2 ${
      align === 'left' ? 'md:justify-end' : 'md:justify-start'
    }`}>
      {exp.technologies.map(tech => (
        <span key={tech} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-card/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Experience <span className="text-gradient">Timeline</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          My professional journey and the companies I've had the pleasure of working with.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Center vertical line — desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/10" />
          {/* Left vertical line — mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-[11px] w-0.5 bg-white/10" />

          <div className="flex flex-col gap-12 md:gap-14">
            {EXPERIENCE.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* MOBILE */}
                  <div className="md:hidden flex gap-5">
                    <div className="relative z-10 flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-background border-4 border-primary" />
                    </div>
                    <div className="flex-1">
                      <ExperienceCard exp={exp} align="right" />
                    </div>
                  </div>

                  {/* DESKTOP */}
                  <div className="hidden md:grid grid-cols-[1fr_48px_1fr] items-start">
                    {/* Left column */}
                    <div>
                      {isLeft && <ExperienceCard exp={exp} align="left" />}
                    </div>

                    {/* Center dot */}
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-background border-4 border-primary mt-8" />
                    </div>

                    {/* Right column */}
                    <div>
                      {!isLeft && <ExperienceCard exp={exp} align="right" />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
