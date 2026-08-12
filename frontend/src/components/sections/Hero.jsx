import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, techStack } from '../../data/portfolioData';

const Hero = () => {
  const MongoIcon = techStack.database[0].icon;
  const ExpressIcon = techStack.backend[1].icon;
  const ReactIcon = techStack.frontend[0].icon;
  const NodeIcon = techStack.backend[0].icon;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Available for freelance projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 h-[120px] sm:h-[80px] lg:h-[100px]">
              Hi, I'm <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                <TypeAnimation
                  sequence={[
                    personalInfo.name,
                    2000,
                    '',
                    500
                  ]}
                  wrapper="span"
                  speed={40}
                  deletionSpeed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-6">
              {personalInfo.role}
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="projects" smooth={true} duration={500}>
                <button className="btn-primary">View My Projects</button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn-outline">Let's Work Together</button>
              </Link>
            </div>
          </motion.div>

          {/* Visual/Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Abstract decorative frame */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl rotate-3 transition-transform duration-500 hover:rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-darker rounded-2xl overflow-hidden glass-card z-10 flex flex-col justify-center items-center p-8">
                
                {/* Tech Badges */}
                <div className="grid grid-cols-2 gap-6 w-full mb-8">
                  <div className="bg-dark p-4 rounded-xl flex flex-col items-center justify-center border border-slate-700 hover:border-primary/50 transition-colors">
                    <MongoIcon className={`text-4xl mb-2 ${techStack.database[0].color}`} />
                    <span className="font-medium text-sm">MongoDB</span>
                  </div>
                  <div className="bg-dark p-4 rounded-xl flex flex-col items-center justify-center border border-slate-700 hover:border-primary/50 transition-colors">
                    <ExpressIcon className={`text-4xl mb-2 ${techStack.backend[1].color}`} />
                    <span className="font-medium text-sm">Express.js</span>
                  </div>
                  <div className="bg-dark p-4 rounded-xl flex flex-col items-center justify-center border border-slate-700 hover:border-primary/50 transition-colors">
                    <ReactIcon className={`text-4xl mb-2 ${techStack.frontend[0].color}`} />
                    <span className="font-medium text-sm">React</span>
                  </div>
                  <div className="bg-dark p-4 rounded-xl flex flex-col items-center justify-center border border-slate-700 hover:border-primary/50 transition-colors">
                    <NodeIcon className={`text-4xl mb-2 ${techStack.backend[0].color}`} />
                    <span className="font-medium text-sm">Node.js</span>
                  </div>
                </div>
                <p className="text-slate-400 font-medium tracking-widest uppercase text-sm">MERN Stack</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
