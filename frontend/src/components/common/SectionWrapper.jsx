import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, className = '', children }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
