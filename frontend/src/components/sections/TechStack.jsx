import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { techStack } from '../../data/portfolioData';

const TechCard = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="glass-card p-6 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300"
  >
    <tech.icon className={`text-5xl mb-4 ${tech.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`} />
    <span className="font-semibold text-slate-200">{tech.name}</span>
  </motion.div>
);

const TechStack = () => {
  return (
    <SectionWrapper id="techstack">
      <SectionHeading 
        title="My Tech Stack" 
        subtitle="Technologies I've been working with recently" 
      />

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-slate-300">Frontend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.frontend.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-slate-300">Backend & Database</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.backend.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} />
            ))}
            {techStack.database.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i + techStack.backend.length} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-slate-300">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.tools.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
