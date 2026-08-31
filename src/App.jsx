import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Achievements & Certifications */}
      <Achievements />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="footer glass-panel">
        <p>© {new Date().getFullYear()} Hariharasudhan M. All Rights Reserved.</p>
        <p className="footer-sub">Designed for real-world impact using React, Three.js & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
