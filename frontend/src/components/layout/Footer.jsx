import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-white tracking-tighter mb-4 inline-block">
              MS<span className="text-primary">.</span>
            </Link>
            <h3 className="text-lg font-semibold text-slate-300 mb-4">{personalInfo.name}</h3>
            <p className="text-slate-400 max-w-sm">
              {personalInfo.role}. Building modern, scalable, and professional web applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={500}
                    className="text-slate-400 hover:text-primary cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:bg-slate-700 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-red-400 hover:bg-slate-700 transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <span className="text-red-500">♥</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
