import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, GitPullRequest } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    date: '2023',
    icon: Medal,
    description: 'Professional certification for designing distributed systems on AWS.',
  },
  {
    id: 2,
    title: '1st Place Global Hackathon',
    organization: 'TechCrunch Disrupt',
    date: '2022',
    icon: Trophy,
    description: 'Built an AI-powered accessibility tool for visually impaired users.',
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    organization: 'React & Next.js',
    date: '2021 - Present',
    icon: GitPullRequest,
    description: 'Regular contributor to major open-source frontend ecosystems.',
  },
  {
    id: 4,
    title: 'Top Rated Plus Talent',
    organization: 'Upwork',
    date: '2020 - Present',
    icon: Star,
    description: 'Maintained 100% Job Success Score with over 50 completed enterprise projects.',
  }
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Achievements & <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Recognitions, certifications, and milestones from my professional career.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {ACHIEVEMENTS.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass border border-white/10 rounded-2xl p-6 flex items-start space-x-4 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm mb-3">
                  <span className="text-accent font-medium">{achievement.organization}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-muted">{achievement.date}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
