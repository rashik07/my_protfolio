import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data';
import profileImg from '../../assets/profileImg.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted">Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Rashik</span>
            <br />
            <span className="text-3xl md:text-5xl text-white">Full Stack Software Engineer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted mb-8 max-w-lg">
            I build premium, performant, and scalable web applications.
            Specializing in modern React, Node.js, and AI automation workflows.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium transition-all flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-sm text-muted">Follow me on:</span>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-white transition-colors"
                    title={social.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Abstract Image Placeholder or Illustration */}
          <div className="w-full max-w-md aspect-square rounded-full glass border border-white/10 relative overflow-hidden flex items-center justify-center">
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" /> */}
            <img
              src={profileImg}
              alt="Coding"
              className="w-full h-full object-cover "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
