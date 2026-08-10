import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { education } from '../../data/portfolioData';

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-dark">
      <SectionHeading 
        title="Education" 
        subtitle="My academic background." 
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start md:items-center mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 shrink-0 mt-1 md:mt-0">
                <FiBookOpen className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                <h4 className="text-lg text-slate-300">{item.institution}</h4>
                
                <div className="flex flex-wrap gap-2 mt-4 md:hidden">
                  {item.skills.map(skill => (
                    <span key={skill} className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-left md:text-right flex flex-col items-start md:items-end">
              <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-slate-300 font-semibold mb-3">
                {item.duration}
              </span>
              <div className="hidden md:flex flex-wrap gap-2 justify-end">
                {item.skills.map(skill => (
                  <span key={skill} className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
