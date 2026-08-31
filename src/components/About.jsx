import React from 'react';
import { GraduationCap, Calendar, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const educationData = [
    {
      type: 'B.E. Computer Science & Engineering',
      institution: 'National Engineering College',
      period: '2024 - 2028',
      details: 'Currently in 3rd year. Focusing on core algorithms, computer systems, and advanced subjects. Actively pursuing AI, computational intelligence, and system development.',
      grade: 'CGPA: 8.53',
      color: 'var(--accent-cyan)'
    },
    {
      type: 'HSC (Higher Secondary)',
      institution: 'State Board Education',
      period: '2022 - 2024',
      details: 'Completed higher secondary studies with a major focus on Physics, Chemistry, and Mathematics.',
      grade: 'First Class',
      color: 'var(--accent-blue)'
    },
    {
      type: 'SSLC (Secondary School)',
      institution: 'State Board Education',
      period: 'Completed 2022',
      details: 'Laid the foundational analytical and scientific principles leading into engineering studies.',
      grade: 'Distinction',
      color: 'var(--accent-purple)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        {/* Left column: bio & stats */}
        <motion.div 
          className="about-bio-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-panel bio-card">
            <h3 className="bio-greeting">Connecting Code with Intelligence</h3>
            <p className="bio-text">
              I am a third-year Computer Science & Engineering student at National Engineering College. My primary goal is 
              to develop high-impact software solutions that integrate AI, computational intelligence, and modern system 
              architectures to address real-world challenges.
            </p>
            <p className="bio-text">
              I thrive on learning new architectures, building robust logic, and optimizing user experiences. From hackathons 
              to academic projects, I love transforming raw logic into elegant applications.
            </p>

            <div className="stats-strip">
              <div className="stat-box">
                <div className="stat-num gradient-text">8.53</div>
                <div className="stat-label">Current CGPA</div>
              </div>
              <div className="stat-box">
                <div className="stat-num gradient-text">3rd</div>
                <div className="stat-label">Year CSE Student</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right column: timeline */}
        <div className="about-timeline-container">
          <h3 className="timeline-title-text">
            <GraduationCap className="title-icon" size={24} /> Education Timeline
          </h3>

          <motion.div 
            className="timeline-track"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="timeline-line"></div>
            {educationData.map((edu, idx) => (
              <motion.div 
                key={idx} 
                className="timeline-item"
                variants={itemVariants}
              >
                {/* Node dot on the central line */}
                <div 
                  className="timeline-node" 
                  style={{ 
                    borderColor: edu.color,
                    boxShadow: `0 0 10px ${edu.color}`
                  }}
                >
                  <div className="node-inner" style={{ backgroundColor: edu.color }}></div>
                </div>

                {/* Content bubble */}
                <div className="timeline-content-bubble glass-panel">
                  <div className="timeline-header">
                    <h4 className="timeline-degree">{edu.type}</h4>
                    <span className="timeline-badge" style={{ backgroundColor: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}>
                      {edu.grade}
                    </span>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-institution">{edu.institution}</span>
                    <span className="timeline-date">
                      <Calendar size={14} /> {edu.period}
                    </span>
                  </div>
                  <p className="timeline-desc">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
