import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import ChatAgent from './components/chat/ChatAgent';

function App() {
  return (
    <div className="bg-darker min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ChatAgent />
    </div>
  );
}

export default App;
