import React, { useState } from 'react';

const ContactPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Studio Inquiry', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 7000);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header container">
        <span className="section-tag">GLOBAL HUBS & CONTACT</span>
        <h1>
          Contact <span className="gradient-text">& Studio Locations</span>
        </h1>
        <p>
          Connect with the iLe Gaming Studios team across our African headquarters in Lusaka, Zambia and our Cambridge academic innovation partner hub in the United Kingdom.
        </p>
      </div>

      <section style={{ paddingTop: '1rem' }}>
        <div className="container">
          {/* Main Grid: Founder & Locations vs Form */}
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            {/* Left: Founder spotlight + Detailed Locations */}
            <div>
              {/* Founder Profile */}
              <div className="glass-card" style={{ marginBottom: '2.5rem', background: 'linear-gradient(135deg, rgba(16, 22, 42, 0.95), rgba(7, 10, 18, 0.98))' }}>
                <span className="section-tag" style={{ color: '#0077b5', borderColor: 'rgba(0, 119, 181, 0.4)' }}>
                  LEADERSHIP PROFILE
                </span>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <img 
                    src="/assets/images/founder_chris.jpg" 
                    alt="Chris Musaluke Lukonde" 
                    className="founder-avatar"
                    style={{ width: '90px', height: '90px' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: 0 }}>Chris Musaluke Lukonde</h3>
                    <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.95rem' }}>Founder & Managing Director</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>iLe Gaming Studios • Spatial Intelligence Lab</p>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  Chris Musaluke Lukonde spearheads iLe Gaming Studios' mission to position Africa at the forefront of the global entertainment, game development, and spatial computing industries. With a strong commitment to quality and Cambridge-certified excellence, he drives studio productions and academic partnerships.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a 
                    href="https://www.linkedin.com/in/chris-musaluke-lukonde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-badge"
                    style={{ padding: '0.6rem 1.4rem', fontSize: '0.95rem' }}
                  >
                    <span style={{ fontWeight: 900 }}>in</span> Connect with Chris on LinkedIn →
                  </a>
                  <span className="stats-badge" style={{ color: 'var(--accent-emerald)' }}>
                    ● OPEN FOR STRATEGIC PARTNERSHIPS
                  </span>
                </div>
              </div>

              {/* Physical Studio Locations */}
              <div className="glass-card">
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.5rem' }}>
                  Our Physical Facilities
                </h3>

                {/* Location 1: Lusaka HQ */}
                <div className="contact-info-item">
                  <div className="contact-icon-box">📍</div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem' }}>Main Studio & Labs (African HQ)</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Innovation Park, Great East Road, Lusaka, Zambia
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                      Houses the Unreal Engine Game Studio, Virtual Production LED Volume, Spatial Intelligence Lab, and Gaming School campus.
                    </p>
                  </div>
                </div>

                {/* Location 2: Cambridge Partner Hub */}
                <div className="contact-info-item">
                  <div className="contact-icon-box">🏛️</div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem' }}>Cambridge Innovation Hub (UK Partner)</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Cambridge Science Park, Milton Road, Cambridge CB4 0GF, United Kingdom
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                      Academic coordination, Cambridge curriculum compliance, European co-productions, and international talent exchange.
                    </p>
                  </div>
                </div>

                {/* Direct Comms */}
                <div className="contact-info-item">
                  <div className="contact-icon-box">✉️</div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem' }}>Communications & Inquiries</h4>
                    <p style={{ color: 'var(--accent-cyan)' }}>contact@ilegamingstudios.com</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>admissions@ilegamingstudios.com (Gaming School)</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                      Phone: +260 97 123 4567 • International: +44 1223 987 654
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Inquiry Form */}
            <div className="glass-card" style={{ padding: '3rem' }}>
              <span className="section-tag">MESSAGE OUR TEAM</span>
              <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>
                Start a Conversation
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Fill out the form below to reach the studio production office, game development team, or Cambridge admissions desk.
              </p>

              {sent ? (
                <div style={{ padding: '2.5rem', background: 'rgba(0, 255, 170, 0.1)', border: '1px solid var(--accent-emerald)', borderRadius: '1rem', textAlign: 'center' }}>
                  <h3 style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Your message has been routed to our managing director Chris Musaluke Lukonde and our studio production team. We will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label className="input-label">Your Name or Organization</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Tendai Banda / Apex Media"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="contact@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Phone / WhatsApp Number</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      placeholder="+260 97 ... or +44 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Department / Inquiry Category</label>
                    <select 
                      className="form-input" 
                      style={{ background: '#0e121d' }}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option>General Studio Inquiry</option>
                      <option>Spatial Intelligence Lab Collaboration (NVIDIA SIL Mimic)</option>
                      <option>Entertainment Studio (Video Editing, Holographics, Video Ads, Film)</option>
                      <option>Unreal Engine 5 Game Studio (Publishing, Co-dev, Playtest)</option>
                      <option>Cambridge Gaming School Enrollment & 3D Courses</option>
                      <option>Investor & Strategic Partnership</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label className="input-label">Project Details or Questions</label>
                    <textarea 
                      required 
                      className="form-textarea" 
                      rows={5}
                      placeholder="Provide specifics on your project requirements, scope, target audience, or desired timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Transmit Message to Studio →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
