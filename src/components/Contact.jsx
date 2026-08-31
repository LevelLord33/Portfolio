import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Code2, Send, CheckCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState({ name: false, email: false, subject: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFocus = (field) => setFocused({ ...focused, [field]: true });
  const handleBlur = (field, val) => setFocused({ ...focused, [field]: val.length > 0 });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFocused({ name: false, email: false, subject: false, message: false });
      
      // Clear success alert after 4 seconds
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1500);
  };

  const contactLinks = [
    { name: 'Email', value: 'mhariharasudhan571@gmail.com', href: 'mailto:mhariharasudhan571@gmail.com', icon: Mail, color: '#00f2fe' },
    { name: 'Phone', value: '+91 90424 96756', href: 'tel:+919042496756', icon: Phone, color: '#007aff' },
    { name: 'LinkedIn', value: 'hariharasudhan-m-609744323', href: 'https://www.linkedin.com/in/hariharasudhan-m-609744323', icon: Linkedin, color: '#0072b1' },
    { name: 'GitHub', value: 'LevelLord33', href: 'https://github.com/LevelLord33', icon: Github, color: '#f3f4f6' },
    { name: 'LeetCode', value: 'Hari30122006', href: 'https://leetcode.com/u/Hari30122006/', icon: Code2, color: '#ffa116' },
    { name: 'Skillrack', value: '512393', href: 'https://www.skillrack.com/faces/resume.xhtml?id=512393&key=ca619e7c08b504b079ebdd8be856a48e8080d8d9', icon: ExternalLink, color: '#4facfe' }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        {/* Contact Links Info Column */}
        <motion.div 
          className="contact-info-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel contact-info-card">
            <h3>Let's Collaborate</h3>
            <p>
              I am open to internship opportunities, freelance projects, and technical collaborations. 
              Feel free to drop a message or reach out via my professional channels.
            </p>

            <div className="contact-links-list">
              {contactLinks.map((link, idx) => {
                const LinkIcon = link.icon;
                return (
                  <a 
                    key={idx} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link-item glass-panel"
                    style={{ '--hover-color': link.color }}
                  >
                    <div className="contact-link-icon" style={{ backgroundColor: `${link.color}15`, color: link.color }}>
                      <LinkIcon size={18} />
                    </div>
                    <div className="contact-link-text">
                      <span className="contact-link-name">{link.name}</span>
                      <span className="contact-link-value">{link.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="contact-form glass-panel">
            <h3>Send Message</h3>
            
            {submitSuccess && (
              <motion.div 
                className="submit-success-alert"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={18} />
                <span>Thank you! Your message was sent successfully.</span>
              </motion.div>
            )}

            {/* Name Input */}
            <div className={`form-group ${focused.name ? 'focused' : ''}`}>
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={(e) => handleBlur('name', e.target.value)}
                className="form-input" 
              />
            </div>

            {/* Email Input */}
            <div className={`form-group ${focused.email ? 'focused' : ''}`}>
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={(e) => handleBlur('email', e.target.value)}
                className="form-input" 
              />
            </div>

            {/* Subject Input */}
            <div className={`form-group ${focused.subject ? 'focused' : ''}`}>
              <label className="form-label">Subject</label>
              <input 
                type="text" 
                name="subject" 
                required 
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={(e) => handleBlur('subject', e.target.value)}
                className="form-input" 
              />
            </div>

            {/* Message Input */}
            <div className={`form-group ${focused.message ? 'focused' : ''}`}>
              <label className="form-label">Your Message</label>
              <textarea 
                name="message" 
                required 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={(e) => handleBlur('message', e.target.value)}
                className="form-input textarea" 
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="glow-btn submit-btn">
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
