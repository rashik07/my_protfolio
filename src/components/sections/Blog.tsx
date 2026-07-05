import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 text-white"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Latest <span className="text-gradient">Articles</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Thoughts, learnings, and tutorials on modern software engineering and architecture.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group flex flex-col overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center space-x-4 text-xs text-muted mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <div className="mt-auto pt-4 border-t border-white/5">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
          View All Posts
        </button>
      </div>
    </section>
  );
};
