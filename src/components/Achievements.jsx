import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, BookOpen, GraduationCap, CheckCircle, Landmark } from 'lucide-react';
import './Achievements.css';

export default function Achievements() {
  const achievements = [
    {
      title: 'FOSSEE Geospatial Mapathon',
      organization: 'IIT Bombay',
      role: 'Participant / Winner Category',
      desc: 'Completed geospatial map analysis using open-source GIS tools, contributing to local community planning maps and resource databases.',
      type: 'achievement'
    },
    {
      title: '3rd Prize Paper Presentation',
      organization: 'TCE Madurai',
      role: 'Presenter',
      desc: 'Awarded third place for researching and presenting a paper on advanced AI paradigms and real-world system integrations.',
      type: 'achievement'
    },
    {
      title: 'IEEE Student Member',
      organization: 'IEEE Society',
      role: 'Member',
      desc: 'Active student membership, participating in local technical chapters, workshops, and international computing research trends.',
      type: 'society'
    }
  ];

  const certifications = [
    { name: 'Deep Learning', platform: 'NPTEL' },
    { name: 'Internet of Things (IoT)', platform: 'NPTEL' },
    { name: 'Industry 4.0', platform: 'NPTEL' },
    { name: 'Python Programming', platform: 'NPTEL' },
    { name: 'Technical English', platform: 'NPTEL' },
    { name: 'AI for Beginners', platform: 'HP LIFE' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title">Timeline & Credentials</h2>

      <div className="achievements-grid">
        {/* Achievements Column */}
        <div className="column-wrapper">
          <h3 className="sub-section-title">
            <Award className="column-icon" size={22} /> Achievements & Societies
          </h3>
          
          <motion.div 
            className="achievements-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="achievement-card glass-panel"
                variants={itemVariants}
                whileHover={{ x: 6, borderColor: 'var(--accent-purple)' }}
              >
                <div className="achievement-badge">
                  {item.type === 'achievement' ? <Award size={20} /> : <Landmark size={20} />}
                </div>
                <div className="achievement-info">
                  <span className="achievement-org">{item.organization}</span>
                  <h4 className="achievement-title">{item.title}</h4>
                  <p className="achievement-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Column */}
        <div className="column-wrapper">
          <h3 className="sub-section-title">
            <GraduationCap className="column-icon" size={22} /> Certifications
          </h3>

          <motion.div 
            className="certifications-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card glass-panel">
                <CheckCircle className="cert-check-icon" size={18} />
                <div className="cert-info">
                  <h4 className="cert-name">{cert.name}</h4>
                  <span className="cert-platform">{cert.platform} Verified</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
