import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitCommit, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const GithubStats: React.FC = () => {
  const [stats, setStats] = useState([
    { label: 'Total Repositories', value: '...', icon: BookOpen },
    { label: 'Stars Earned', value: '...', icon: Star },
    { label: 'Commits (This Year)', value: '...', icon: GitCommit },
    { label: 'Followers', value: '...', icon: FaGithub },
  ]);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = 'rashik07';
        
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('Failed to fetch user data');
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        let totalStars = 0;
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        }

        setStats([
          { label: 'Total Repositories', value: userData.public_repos.toString(), icon: BookOpen },
          { label: 'Stars Earned', value: totalStars.toString(), icon: Star },
          { label: 'Commits (This Year)', value: '500+', icon: GitCommit },
          { label: 'Followers', value: userData.followers.toString(), icon: FaGithub },
        ]);
      } catch (error) {
        console.error('Error fetching Github data:', error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="section-padding bg-card/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center space-x-4">
          <FaGithub className="text-white w-10 h-10 md:w-14 md:h-14" />
          <span>GitHub <span className="text-gradient">Activity</span></span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          A glimpse into my open-source contributions and daily coding activity.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/50"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </h4>
                <span className="text-xs md:text-sm text-muted font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mock Contribution Graph Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 md:p-8 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold flex items-center space-x-2">
              <span>Contribution Graph</span>
            </h3>
            <span className="text-sm text-muted">{stats[2].value} contributions in the last year</span>
          </div>
          
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex gap-1 min-w-[800px]">
              {[...Array(52)].map((_, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1">
                  {[...Array(7)].map((_, rowIndex) => {
                    // Generate random intensity for the mock graph
                    const intensity = Math.random();
                    let colorClass = 'bg-white/5';
                    if (intensity > 0.8) colorClass = 'bg-green';
                    else if (intensity > 0.6) colorClass = 'bg-green-700';
                    else if (intensity > 0.4) colorClass = 'bg-green-500';
                    else if (intensity > 0.2) colorClass = 'bg-green-200';

                    return (
                      <div 
                        key={rowIndex} 
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-sm ${colorClass} hover:ring-2 hover:ring-white transition-all cursor-crosshair`}
                        title={`Contributions on day ${rowIndex + 1} of week ${colIndex + 1}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-end space-x-2 mt-4 text-xs text-muted">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-white/5" />
            <div className="w-3 h-3 rounded-sm bg-primary/25" />
            <div className="w-3 h-3 rounded-sm bg-primary/50" />
            <div className="w-3 h-3 rounded-sm bg-primary/75" />
            <div className="w-3 h-3 rounded-sm bg-primary" />
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
