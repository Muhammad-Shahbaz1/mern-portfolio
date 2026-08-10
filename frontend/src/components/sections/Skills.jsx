import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-dark">
      <SectionHeading 
        title="Professional Skills" 
        subtitle="My technical proficiencies categorized by domain." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="glass-card p-8 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
