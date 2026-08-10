import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { projects } from '../../data/portfolioData';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-darker/90 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl z-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-20"
          >
            <FiX size={24} />
          </button>

          <div className="p-6 sm:p-10">
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-8 bg-slate-800">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                <p className="text-slate-300 leading-relaxed">{project.overview}</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Problem</h3>
                  <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Solution</h3>
                  <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-6 border-t border-slate-700">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                <FiGithub /> GitHub Repo
              </a>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper id="projects" className="bg-dark">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="Some of my recent work. Click on a project to see more details." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-video overflow-hidden bg-slate-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm">View Details</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow">{project.shortDescription}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </SectionWrapper>
  );
};

export default Projects;
