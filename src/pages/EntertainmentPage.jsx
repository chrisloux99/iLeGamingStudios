import React, { useState } from 'react';

const EntertainmentPage = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState('all');

  const services = [
    {
      id: 'holographics',
      category: 'holographic',
      title: 'Video Editing & Cholographics / Holographic Stage',
      icon: '✨',
      image: '/assets/images/entertainment_studio.jpg',
      badge: 'FLAGSHIP PRODUCTION',
      desc: 'Precision post-production video editing combined with choreographic holographic projections for live stages, luxury exhibits, and immersive concert visuals.',
      deliverables: [
        'Multi-cam 4K/8K Film & Commercial Editing',
        'Choreographed Holographic Visual Stages',
        'Spatial Audio Mixing & Dolby Atmos Sound Design',
        'Color Grading in DaVinci Resolve'
      ]
    },
    {
      id: 'ads',
      category: 'commercial',
      title: 'Video Ads for Businesses & Organizations',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      badge: 'HIGH-CONVERSION ADS',
      desc: 'Impactful commercial video advertising engineered to elevate enterprise brands, start-ups, and global non-governmental organizations.',
      deliverables: [
        'Television & Digital Commercial Spots',
        'Social Media Performance Video Campaigns',
        'Corporate Brand Storytelling & Testimonials',
        'Omnichannel Ad Campaign Strategy'
      ]
    },
    {
      id: 'animation',
      category: 'animation',
      title: '2D & 3D Animations, Motion Graphics & VFX',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1200&q=80',
      badge: 'MOTION & VFX',
      desc: 'From hand-crafted 2D stylized animations to photorealistic 3D character rigs, cinematic visual effects, and fluid simulations.',
      deliverables: [
        'AAA 3D Character Animation & Rigging',
        'Stylized 2D Motion Graphics & Explainer Films',
        'Real-time Unreal Engine Pre-visualization',
        'Motion Capture (MoCap) Cleanup & Retargeting'
      ]
    },
    {
      id: 'branding',
      category: 'branding',
      title: 'Graphic Designs & Brand Identity Systems',
      icon: '💎',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      badge: 'BRAND ARCHITECTURE',
      desc: 'Full-spectrum graphic design and bespoke visual identity creation that distinguishes your company in competitive global markets.',
      deliverables: [
        'Comprehensive Corporate Brand Identity Kits',
        'Custom Typography & Logotype Systems',
        'Packaging & High-End Print Collateral',
        'Digital UI/UX & Web Design Guidelines'
      ]
    },
    {
      id: 'film',
      category: 'cinema',
      title: 'Filmmaking, Directing & Screenwriting',
      icon: '📽️',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      badge: 'CINEMATIC ARTS',
      desc: 'End-to-end cinematic storytelling—original screenwriting, concept drafting, executive directing, and full theatrical production.',
      deliverables: [
        'Original Screenplays & Script Consulting',
        'Directing & Cinematography (Arri, RED, Sony Venice)',
        'Documentary & Feature Film Production',
        'Festival Distribution & Executive Packaging'
      ]
    }
  ];

  return (
    <div className="entertainment-page">
      {/* Page Header */}
      <div className="page-header container">
        <span className="section-tag">FULL-SERVICE CREATIVE MEDIA STUDIO</span>
        <h1>
          Entertainment <span className="gradient-text">Studio</span>
        </h1>
        <p>
          World-class video editing, choreographed holographics, high-converting video commercials for businesses, 2D/3D animations, graphic design branding, and award-winning cinematic filmmaking.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => onNavigate('contact')} className="btn btn-primary">
            Book a Production Consultation →
          </button>
          <a href="#services-list" className="btn btn-secondary">
            Explore All Services
          </a>
        </div>
      </div>

      {/* Picture Showcase of Black African Filmmakers & Creatives */}
      <section style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="grid-3">
            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="/assets/images/entertainment_studio.jpg" 
                alt="Virtual Production LED Stage" 
              />
              <div className="picture-badge">HOLOGRAPHIC & VIRTUAL LED</div>
              <div className="picture-overlay">
                <h4>Virtual Production Stage</h4>
                <p>Live camera tracking & Unreal Engine in-camera VFX</p>
              </div>
            </div>

            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80" 
                alt="African Film Director" 
              />
              <div className="picture-badge">CINEMA DIRECTING</div>
              <div className="picture-overlay">
                <h4>Tafari K. Lungu</h4>
                <p>Executive Director & Screenwriting Lead</p>
              </div>
            </div>

            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=1200&q=80" 
                alt="African 3D Animator & Visual Artist" 
              />
              <div className="picture-badge">3D ANIMATION & VFX</div>
              <div className="picture-overlay">
                <h4>Zola Chileshe</h4>
                <p>Lead 3D Animator & Holographic Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section id="services-list">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHAT WE CREATE</span>
            <h2>Our Full Suite of <span className="gradient-text">Creative Services</span></h2>
            <p>
              Tailored solutions for enterprises, international brands, and visionary filmmakers.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {services.map((srv, idx) => (
              <div 
                key={srv.id} 
                className="glass-card" 
                style={{ padding: '3rem' }}
              >
                <div className="grid-2" style={{ alignItems: 'center' }}>
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.8rem' }}>{srv.icon}</span>
                      <span className="section-tag" style={{ margin: 0 }}>{srv.badge}</span>
                    </div>
                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>
                      {srv.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                      {srv.desc}
                    </p>

                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                      <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                        Key Capabilities & Deliverables:
                      </h4>
                      <ul className="feature-list" style={{ marginTop: 0 }}>
                        {srv.deliverables.map((item, dIdx) => (
                          <li key={dIdx} style={{ fontSize: '0.9rem' }}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                      <button onClick={() => onNavigate('contact')} className="btn btn-primary">
                        Request Quote for this Service →
                      </button>
                    </div>
                  </div>

                  <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                    <div className="picture-frame" style={{ height: '360px' }}>
                      <img src={srv.image} alt={srv.title} />
                      <div className="picture-overlay">
                        <h4>{srv.title}</h4>
                        <p>Studio Portfolio Grade Production</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Production Workflow Process */}
          <div style={{ marginTop: '5rem' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <div className="section-header" style={{ marginBottom: '2.5rem' }}>
                <span className="section-tag">HOW WE WORK</span>
                <h2>The iLe Production <span className="gradient-text">Pipeline</span></h2>
                <p>From initial screenplay brainstorm to cinematic delivery in record turnaround.</p>
              </div>

              <div className="grid-4">
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                  <div style={{ color: 'var(--accent-cyan)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>01</div>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Brief & Scriptwriting</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>We establish narrative themes, messaging goals, and storyboard every beat.</p>
                </div>

                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                  <div style={{ color: 'var(--accent-cyan)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>02</div>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Pre-viz & 3D Mockup</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Real-time Unreal Engine pre-visualization of camera angles and lighting setups.</p>
                </div>

                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                  <div style={{ color: 'var(--accent-cyan)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>03</div>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Shoot & Holographics</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Production on our virtual LED volume stage and holographic projection rigs.</p>
                </div>

                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                  <div style={{ color: 'var(--accent-cyan)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>04</div>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Post, VFX & Master</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Cutting-edge editing, 3D VFX integration, Dolby sound mixing, and final 4K masters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntertainmentPage;
