import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { services } from '../../data/portfolioData';

const Services = () => {
  return (
    <SectionWrapper id="services">
      <SectionHeading 
        title="My Services" 
        subtitle="What I can do for you and your business." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <service.icon className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-slate-400 flex-grow mb-6">{service.description}</p>
            <Link to="contact" smooth={true} duration={500} className="mt-auto">
              <span className="text-primary font-medium hover:text-white transition-colors cursor-pointer flex items-center">
                Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
