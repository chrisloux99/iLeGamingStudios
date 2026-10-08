import React, { useState } from 'react';

const Footer = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'All Services', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        {/* Contact & Inquiry Box */}
        <div className="contact-card">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">GET IN TOUCH</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                Let's Build the <span className="gradient-text">Future of Play & Media</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                Whether you need spatial intelligence R&D, AAA Unreal Engine game development, holographic film production, or Cambridge gaming education—our team is ready.
              </p>

              <div className="contact-info-item">
                <div className="contact-icon-box">📍</div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Global Studio Headquarters</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Innovation Park, Great East Road, Lusaka, Zambia</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Cambridge Partner Centre: Science Park, Cambridge, United Kingdom</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">📞</div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Direct Studio Inquiries</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+260 97 123 4567 • +44 1223 987 654</p>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>contact@ilegamingstudios.com</p>
                </div>
              </div>

              {/* Founder Profile Card */}
              <div className="founder-card">
                <img 
                  src="/assets/images/founder_chris.jpg" 
                  alt="Chris Musaluke Lukonde"
                  className="founder-avatar"
                />
                <div>
                  <h4 style={{ color: '#fff', margin: 0, fontSize: '1.2rem' }}>Chris Musaluke Lukonde</h4>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600 }}>Founder & Managing Director</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                    Leading multimedia innovation across Africa & international gaming ecosystems.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/chris-musaluke-lukonde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-badge"
                  >
                    <span>in</span> Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="glass-card" style={{ background: 'rgba(5, 8, 15, 0.85)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>
                Initiate a Project or Inquiry
              </h3>
              
              {submitted ? (
                <div style={{ padding: '2rem', background: 'rgba(0, 255, 170, 0.1)', border: '1px solid var(--accent-emerald)', borderRadius: '1rem', textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>✓ Message Received</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Thank you! Our studio team will review your project details and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label className="input-label">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Tendai Banda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Business Email</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Department / Service of Interest</label>
                    <select 
                      className="form-input" 
                      style={{ background: '#0e121d' }}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Spatial Intelligence Lab (NVIDIA SIL Mimic R&D)</option>
                      <option>Entertainment Studio (Video, Holographics, Ads)</option>
                      <option>Game Studio (Unreal Engine & AI Games)</option>
                      <option>Cambridge Gaming School & 3D Modeling</option>
                      <option>General Studio Partnership</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label className="input-label">Brief Project Details</label>
                    <textarea 
                      required 
                      className="form-textarea" 
                      placeholder="Tell us about your project vision, timeline, and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Direct Studio Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Links & Locations */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="logo-badge">iLe</div>
            <div>
              <div style={{ fontWeight: 800, color: '#fff' }}>iLe Gaming Studios</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Lusaka, Zambia • Cambridge, UK</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('home')} className="nav-item">Home</button>
            <button onClick={() => onNavigate('spatial')} className="nav-item">Spatial Lab</button>
            <button onClick={() => onNavigate('entertainment')} className="nav-item">Entertainment</button>
            <button onClick={() => onNavigate('games')} className="nav-item">Game Studio</button>
            <button onClick={() => onNavigate('school')} className="nav-item">Gaming School</button>
            <button onClick={() => onNavigate('contact')} className="nav-item">Contact & Locations</button>
          </div>

          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} iLe Gaming Studios. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
