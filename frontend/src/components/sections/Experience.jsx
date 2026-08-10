import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { experience } from '../../data/portfolioData';

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeading 
        title="Work Experience" 
        subtitle="My professional journey and previous roles." 
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-dark border-4 border-primary transform -translate-x-1/2 flex items-center justify-center z-10">
                <FiBriefcase className="text-primary text-sm" />
              </div>

              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div className={`glass-card p-6 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                    {item.duration}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.position}</h3>
                  <h4 className="text-lg text-slate-300 mb-4">{item.company}</h4>
                  <p className="text-slate-400 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                    {item.technologies.map(tech => (
                      <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
