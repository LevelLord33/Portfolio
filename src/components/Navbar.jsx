import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is in view
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Timeline & Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavClick('home')}>
          <span className="logo-symbol">&lt;</span>
          <span className="logo-text">Hariharasudhan</span>
          <span className="logo-dot">.</span>
          <span className="logo-text">M</span>
          <span className="logo-symbol">/&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="navbar-socials">
          <a href="https://github.com/LevelLord33" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/hariharasudhan-m-609744323" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`drawer-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <div className="drawer-socials">
            <a href="https://github.com/LevelLord33" target="_blank" rel="noopener noreferrer" className="drawer-social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hariharasudhan-m-609744323" target="_blank" rel="noopener noreferrer" className="drawer-social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
