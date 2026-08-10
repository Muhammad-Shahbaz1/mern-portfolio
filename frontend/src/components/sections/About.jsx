import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-dark">
      <SectionHeading 
        title="About Me" 
        subtitle="Get to know me, my background, and what I do." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            {personalInfo.about}
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            My primary focus is on building robust and scalable applications from the ground up, dealing with both server-side logic and front-end user experiences. Whether it's integrating databases, setting up authentication, or designing responsive UIs, I take pride in delivering complete solutions.
          </p>
          
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn-primary">More About Me</button>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Profile Image */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <div className="relative glass-card rounded-2xl overflow-hidden aspect-[4/5] bg-slate-800">
              <img
                src="/profile.jpg"
                alt="Muhammad Shahbaz - MERN Stack Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
