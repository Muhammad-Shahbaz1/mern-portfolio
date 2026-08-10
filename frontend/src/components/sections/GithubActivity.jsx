import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

const GithubActivity = () => {
  return (
    <SectionWrapper id="github">
      <SectionHeading 
        title="Developer Activity" 
        subtitle="My open source contributions and GitHub statistics." 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-slate-400 text-sm mb-1">Public Repositories</p>
            <h3 className="text-3xl font-bold text-white">[XX]</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <FiGithub className="text-xl text-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-slate-400 text-sm mb-1">Total Stars</p>
            <h3 className="text-3xl font-bold text-white">[XX]</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
            <FiStar className="text-xl text-yellow-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-slate-400 text-sm mb-1">Total Commits (This Year)</p>
            <h3 className="text-3xl font-bold text-white">[XXX]</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
            <FiGitBranch className="text-xl text-green-500" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="glass-card p-8 text-center"
      >
        <h3 className="text-xl font-bold text-white mb-4">Contribution Graph Placeholder</h3>
        <div className="w-full h-48 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center mb-6">
          <p className="text-slate-500 italic">GitHub contribution graph (e.g., react-github-calendar) will be rendered here.</p>
        </div>
        <a 
          href={personalInfo.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors"
        >
          <FiGithub /> View full profile on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  );
};

export default GithubActivity;
