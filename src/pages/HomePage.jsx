import React from 'react';
import WalkthroughVideoHero from '../components/WalkthroughVideoHero';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: 'auto', paddingTop: '7rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-tag">
            <span style={{ color: 'var(--accent-cyan)' }}>★</span> AFRICA'S NEXT-GEN MULTIMEDIA & GAMING POWERHOUSE
          </div>
          <h1 style={{ fontSize: '4.2rem', marginBottom: '1.25rem' }}>
            Where Reality Meets <span className="gradient-text">Spatial Intelligence</span> & Play
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            iLe Gaming Studios is a world-class multimedia gaming and entertainment studio. 
            We build AAA games with Unreal Engine & AI, conduct bleeding-edge Spatial Intelligence R&D, produce holographic films and commercial ads, and train tomorrow’s creators under Cambridge certifications.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('games')} className="btn btn-primary">
              Explore Our Games →
            </button>
            <button onClick={() => onNavigate('spatial')} className="btn btn-secondary">
              Spatial Intelligence Lab
            </button>
            <button onClick={() => onNavigate('entertainment')} className="btn btn-secondary">
              Entertainment Studio
            </button>
            <button onClick={() => onNavigate('school')} className="btn btn-accent">
              Join Gaming School
            </button>
          </div>

          {/* Interactive Walkthrough Video Hero Player */}
          <WalkthroughVideoHero onNavigate={onNavigate} />
        </div>
      </section>

      {/* Main Core Services Grid */}
      <section style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR FOUR PILLARS</span>
            <h2>Complete Multimedia & Technology <span className="gradient-text">Ecosystem</span></h2>
            <p>
              Explore our four specialized divisions driving global creative tech innovation with African brilliance.
            </p>
          </div>

          <div className="grid-2">
            {/* Pillar 1: Spatial Intelligence Lab */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="picture-frame" style={{ height: '280px', marginBottom: '1.5rem' }}>
                  <img 
                    src="/assets/images/spatial_lab.jpg" 
                    alt="Spatial Intelligence Lab" 
                  />
                  <div className="picture-badge">R&D INNOVATION</div>
                  <div className="picture-overlay">
                    <h4>NVIDIA SIL Inspired Research</h4>
                    <p>3D Neural Radiance Fields & Embodied AI Lab</p>
                  </div>
                </div>

                <div className="card-icon">🧠</div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>Spatial Intelligence Lab</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Mimicking the cutting-edge research of the NVIDIA Spatial Intelligence Lab (SIL). We develop embodied AI, robotic interaction models, real-time physics simulations, and generative 3D environment synthesis.
                </p>
                <ul className="feature-list">
                  <li>3D NeRF & Gaussian Splatting Reconstruction</li>
                  <li>Embodied AI & Robotic Physics Simulation</li>
                  <li>Real-time Generative 3D World Models</li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button onClick={() => onNavigate('spatial')} className="btn btn-primary" style={{ width: '100%' }}>
                  Enter Spatial Intelligence Lab →
                </button>
              </div>
            </div>

            {/* Pillar 2: Entertainment Studio */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="picture-frame" style={{ height: '280px', marginBottom: '1.5rem' }}>
                  <img 
                    src="/assets/images/entertainment_studio.jpg" 
                    alt="Entertainment Studio" 
                  />
                  <div className="picture-badge">MEDIA PRODUCTION</div>
                  <div className="picture-overlay">
                    <h4>Virtual Production & Holographics</h4>
                    <p>Cinematic editing, 2D/3D VFX & Enterprise Commercials</p>
                  </div>
                </div>

                <div className="card-icon">🎬</div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>Entertainment Studio</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Full-spectrum cinematic and multimedia creation. From choreographed holographic stage visuals to commercial video ads, 2D/3D animations, brand identities, and feature filmmaking.
                </p>
                <ul className="feature-list">
                  <li>Video Editing & Choreographed Holographics</li>
                  <li>High-Conversion Video Ads for Businesses & Orgs</li>
                  <li>2D & 3D Character Animation, Graphic Design & Branding</li>
                  <li>Screenwriting, Cinematography & Film Production</li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button onClick={() => onNavigate('entertainment')} className="btn btn-primary" style={{ width: '100%' }}>
                  View Entertainment Services →
                </button>
              </div>
            </div>

            {/* Pillar 3: Game Studio */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="picture-frame" style={{ height: '280px', marginBottom: '1.5rem' }}>
                  <img 
                    src="/assets/images/game_studio.jpg" 
                    alt="Unreal Engine Game Studio" 
                  />
                  <div className="picture-badge">AAA INTERACTIVE</div>
                  <div className="picture-overlay">
                    <h4>Unreal Engine 5 & AI Games</h4>
                    <p>Next-gen physics, Afrofuturistic worlds, adaptive neural AI</p>
                  </div>
                </div>

                <div className="card-icon">🎮</div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>Game Studio</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Crafting revolutionary video games using Unreal Engine 5 fused with deep reinforcement learning. Our games feature lifelike characters, dynamic narrative trees, and real-time ray-traced graphics.
                </p>
                <ul className="feature-list">
                  <li>Unreal Engine 5 AAA Action & Strategy Titles</li>
                  <li>Adaptive Neural NPC Behaviors & LLM Dialogue</li>
                  <li>Cross-Platform PC, Console & VR Experiences</li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button onClick={() => onNavigate('games')} className="btn btn-primary" style={{ width: '100%' }}>
                  Discover Our Games →
                </button>
              </div>
            </div>

            {/* Pillar 4: Gaming School */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="picture-frame" style={{ height: '280px', marginBottom: '1.5rem' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                    alt="Gaming School Classroom" 
                  />
                  <div className="picture-badge">CAMBRIDGE ACCREDITED</div>
                  <div className="picture-overlay">
                    <h4>Next-Gen Game Creators Academy</h4>
                    <p>Learn 3D modeling, coding, and earn Cambridge certification</p>
                  </div>
                </div>

                <div className="card-icon">🎓</div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>Gaming School</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Join our prestigious gaming school accredited under Cambridge certifications. Empowering African youth and international students to create their own games and sculpt production-ready 3D models.
                </p>
                <ul className="feature-list">
                  <li>Official Cambridge Certified Curriculum</li>
                  <li>Build Your Own Games in Unreal Engine & C++</li>
                  <li>AAA 3D Character & Environment Modeling Mastery</li>
                  <li>Career Mentorship & Direct Studio Placement</li>
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button onClick={() => onNavigate('school')} className="btn btn-accent" style={{ width: '100%' }}>
                  Apply to Gaming School →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Creative Leadership Spotlight */}
      <section style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3.5rem', background: 'linear-gradient(135deg, rgba(14, 20, 36, 0.9), rgba(8, 10, 18, 0.95))' }}>
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="section-tag">LEADERSHIP & VISION</span>
                <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
                  Pioneering African Tech & <span className="gradient-text">Creative Excellence</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  Headquartered in Lusaka, Zambia with global partners in Cambridge, UK, iLe Gaming Studios is founded on the belief that Africa is the epicenter of the next digital entertainment renaissance.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem' }}>
                  Under the leadership of Founder & Managing Director <strong>Chris Musaluke Lukonde</strong>, we bridge local talent with international Cambridge accreditation and Silicon Valley-grade spatial AI research.
                </p>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://www.linkedin.com/in/chris-musaluke-lukonde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ background: '#0077b5', color: '#fff', border: 'none' }}
                  >
                    <span>in</span> Connect with Chris on LinkedIn
                  </a>
                  <button onClick={() => onNavigate('contact')} className="btn btn-secondary">
                    Visit Our Studios
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="picture-frame" style={{ maxWidth: '420px', width: '100%', height: '480px' }}>
                  <img 
                    src="/assets/images/founder_chris.jpg" 
                    alt="Chris Musaluke Lukonde" 
                    style={{ objectPosition: 'center 18%' }}
                  />
                  <div className="picture-overlay">
                    <h4>Chris Musaluke Lukonde</h4>
                    <p style={{ color: 'var(--accent-cyan)' }}>Founder & Managing Director</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                      Advocate for African Spatial Computing, AAA Game Dev & Cambridge Certified Education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
