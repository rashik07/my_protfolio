import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Briefcase, Award } from 'lucide-react';

const STATS = [
  { label: 'Years Experience', value: '5+', icon: Briefcase },
  { label: 'Projects Completed', value: '40+', icon: Code2 },
  { label: 'Happy Clients', value: '25+', icon: Users },
  { label: 'Awards Won', value: '3', icon: Award },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Passionate about building scalable software solutions and creating intuitive 
          user experiences. Bridging the gap between design and robust engineering.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
          <p className="text-muted mb-6 leading-relaxed">
            I started my journey as a self-taught developer and have since evolved into a Full Stack 
            Engineer working with cutting-edge technologies. My focus is on creating responsive, 
            accessible, and highly performant applications that solve real-world problems.
          </p>
          <p className="text-muted mb-8 leading-relaxed">
            When I'm not writing code, you can find me exploring new AI automation tools, 
            contributing to open-source, or reading about the latest trends in software architecture.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="glass-card p-6 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <span className="text-sm text-muted">{stat.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative h-full min-h-[500px] rounded-2xl overflow-hidden glass border border-white/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
            alt="Workspace"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
