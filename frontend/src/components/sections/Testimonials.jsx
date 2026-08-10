import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/portfolioData';

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-dark">
      <SectionHeading 
        title="Client Testimonials" 
        subtitle="What people I've worked with have to say." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 relative"
          >
            <FaQuoteLeft className="absolute top-8 right-8 text-4xl text-slate-700/50" />
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
              "{testimonial.text}"
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-slate-700 mr-4 flex items-center justify-center text-slate-400 font-bold">
                {testimonial.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-primary text-sm font-medium">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
