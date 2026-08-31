import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, Lightbulb, GraduationCap, MapPin } from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

// 3D Tilt Card Component
function TiltCard({ project }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Normalize coordinates around center (0, 0)
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Limit rotation to max 15 degrees
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = -((y - centerY) / centerY) * 15;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const Icon = project.icon;

  return (
    <div 
      className="tilt-card-wrapper"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <div className="project-card glass-panel">
        {/* Glowing aura background */}
        <div className="card-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}15, transparent 70%)` }}></div>

        {/* 3D Content elements */}
        <div className="card-top-icon" style={{ backgroundColor: `${project.color}15`, color: project.color }}>
          <Icon size={24} />
        </div>

        <div className="card-content-3d">
          <span className="project-category">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.desc}</p>
          
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag" style={{ borderColor: `${project.color}30` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source Code">
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-btn highlight" style={{ color: project.color }} title="View Live Project">
              <ExternalLink size={18} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projectsData = [
    {
      title: 'RouteShield',
      category: 'ISRO Hackathon 2026',
      icon: Shield,
      desc: 'An occlusion-robust road extraction and urban road criticality analysis system built for the ISRO Bharatiya Antariksh Hackathon 2026. Employs advanced graph theory algorithms to evaluate urban road network criticality and connectivity robustness under spatial occlusion.',
      tags: ['Graph Theory', 'Satellite Imagery', 'Network Robustness', 'GIS Data'],
      color: '#00f2fe',
      github: 'https://github.com/LevelLord33/RouteShield',
      live: '#'
    },
    {
      title: 'AI Startup Assistant',
      category: 'Artificial Intelligence',
      icon: Lightbulb,
      desc: 'An AI-powered validation tool to assess startup ideas and generate feasibility scoring. Integrated Hugging Face LLM APIs with custom scoring pipelines and deployed via Streamlit, leveraging Kaggle datasets for market analysis.',
      tags: ['Hugging Face', 'Streamlit', 'Python', 'Kaggle Datasets'],
      color: '#bd00ff',
      github: 'https://github.com/LevelLord33/AI-Startup-Assistant',
      live: '#'
    },
    {
      title: 'Municipal Complaint System',
      category: 'Full Stack Development',
      icon: MapPin,
      desc: 'A full-stack municipal issue reporting and tracking platform. Citizens can log complaints, pin geo-locations, and track resolution status in real-time. Features role-based access control for administrative staff.',
      tags: ['React.js', 'MongoDB', 'Node.js', 'Express', 'Geo-Mapping'],
      color: '#007aff',
      github: 'https://github.com/LevelLord33/Municipal-Complaint-System',
      live: '#'
    },
    {
      title: 'Course Management System',
      category: 'Backend Development',
      icon: GraduationCap,
      desc: 'A robust educational courses administrator system. Handles class registrations, student enrollments, teacher assignments, and grading metrics. Designed with clean layered architecture in Spring Boot.',
      tags: ['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'Hibernate'],
      color: '#4facfe',
      github: 'https://github.com/LevelLord33/Course-Management-System',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <TiltCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
