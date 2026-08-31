import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, ShieldCheck, Cpu } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Cpu },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'web', label: 'Web & Frameworks', icon: Layout },
    { id: 'tools', label: 'Tools & Core CS', icon: ShieldCheck }
  ];

  const skillsData = [
    // Languages
    { name: 'Java', category: 'languages', level: '90%', desc: 'Object-Oriented programming, Spring Boot ecosystem' },
    { name: 'JavaScript', category: 'languages', level: '85%', desc: 'Modern ES6+, DOM manipulation, async flow' },
    { name: 'Python', category: 'languages', level: '80%', desc: 'AI/ML scripting, Hugging Face, scripting' },
    { name: 'C', category: 'languages', level: '85%', desc: 'Low-level concepts, memory management, pointers' },
    { name: 'C++', category: 'languages', level: '80%', desc: 'Standard Template Library (STL), competitive programming' },
    
    // Databases
    { name: 'SQL', category: 'databases', level: '85%', desc: 'Relational design, querying, joins, triggers' },
    { name: 'MongoDB', category: 'databases', level: '80%', desc: 'NoSQL collections, aggregation, schema design' },
    { name: 'MySQL', category: 'databases', level: '85%', desc: 'RDBMS optimization, table indexing, stored procedures' },
    
    // Web & Frameworks
    { name: 'HTML/CSS', category: 'web', level: '90%', desc: 'Semantic layouts, Flexbox/Grid, custom keyframes' },
    { name: 'React.js', category: 'web', level: '85%', desc: 'Hooks, context API, reusable layout architectures' },
    
    // Tools / CS Core
    { name: 'Git/GitHub', category: 'tools', level: '90%', desc: 'Branching, PRs, version tracking, workflows' },
    { name: 'DSA', category: 'tools', level: '85%', desc: 'Complex problem solving, arrays, trees, graphs, sorting' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>

      {/* Category selector */}
      <div className="skills-categories">
        {skillCategories.map(cat => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`skills-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <Icon size={16} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {filteredSkills.map((skill, idx) => (
          <motion.div 
            key={idx}
            className="skill-card glass-panel"
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: 'var(--accent-cyan)', boxShadow: '0 8px 30px rgba(0, 242, 254, 0.15)' }}
          >
            <div className="skill-info">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percentage">{skill.level}</span>
              </div>
              <p className="skill-desc">{skill.desc}</p>
            </div>
            
            {/* Custom glowing progress bar */}
            <div className="skill-progress-container">
              <div 
                className="skill-progress-bar" 
                style={{ 
                  width: skill.level,
                  background: `linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))`
                }}
              >
                <div className="bar-glow"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
