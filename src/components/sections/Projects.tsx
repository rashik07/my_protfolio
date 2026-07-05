import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../../data';

const CATEGORIES = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend',
  'AI Projects',
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = PROJECTS.filter((project) =>
    filter === 'All' ? true : project.category === filter
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <p className="text-muted max-w-2xl mx-auto">
          A selection of some of my most recent and impactful work.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'glass text-muted hover:text-white hover:bg-white/10'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted text-sm mb-4 flex-grow">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
                  >
                    View Details
                  </button>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      <FaGithub size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/10 shadow-2xl"
            >
              {/* Hero Section */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-red-500 transition"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-primary/20 border border-primary/30 text-primary mb-4">
                    {selectedProject.category}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Overview */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Project Overview
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {selectedProject.fullDescription ||
                      selectedProject.shortDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Key Features
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.features.map(
                        (feature: string, index: number) => (
                          <div
                            key={index}
                            className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700"
                          >
                            <p className="text-slate-300">{feature}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {selectedProject.challenges && (
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Challenges & Solutions
                    </h3>

                    <div className="space-y-3">
                      {selectedProject.challenges.map(
                        (challenge: string, index: number) => (
                          <div
                            key={index}
                            className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700"
                          >
                            <p className="text-slate-300">{challenge}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-primary text-white font-medium flex items-center gap-2 hover:scale-105 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl border border-slate-700 text-white font-medium flex items-center gap-2 hover:border-primary hover:text-primary transition"
                  >
                    <FaGithub size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};