import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiLinkedin, FiGithub, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success' | 'error' | 'loading'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: '', message: '' }); // clear status on input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: 'Your message has been sent! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Could not connect to the server. Please make sure the backend is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Have a project in mind? Let's build it together." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <FiMail className="text-xl text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mr-4 shrink-0">
                  <FiMessageCircle className="text-xl text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">WhatsApp</p>
                  <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-primary transition-colors">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 shrink-0">
                  <FiLinkedin className="text-xl text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">LinkedIn</p>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-primary transition-colors">
                    View Profile
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-slate-600/20 flex items-center justify-center mr-4 shrink-0">
                  <FiGithub className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">GitHub</p>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-primary transition-colors">
                    View Repositories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="glass-card p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me A Message</h3>
            
            {/* Status Alert */}
            {status.message && (
              <div className={`flex items-start gap-3 mb-6 p-4 rounded-lg border ${
                status.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' :
                status.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-400' :
                'bg-primary/10 border-primary/30 text-primary'
              }`}>
                {status.type === 'success' && <FiCheckCircle className="text-xl shrink-0 mt-0.5" />}
                {status.type === 'error' && <FiAlertCircle className="text-xl shrink-0 mt-0.5" />}
                {status.type === 'loading' && <FiLoader className="text-xl shrink-0 mt-0.5 animate-spin" />}
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-60"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-60"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-60"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={isSubmitting}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none disabled:opacity-60"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <><FiLoader className="animate-spin" /> Sending...</>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
