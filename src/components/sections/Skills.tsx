import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../data';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise, frameworks, and tools 
          I use to bring digital products to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white/10">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-white/5 border border-white/5 rounded-lg px-4 py-2 hover:bg-white/10 hover:border-primary/50 transition-colors cursor-default"
                  >
                    <Icon className="text-primary" size={18} />
                    <span className="text-sm font-medium text-white/90">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
