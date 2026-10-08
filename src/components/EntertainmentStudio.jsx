import React from 'react';

const EntertainmentStudio = () => {
  return (
    <section id="entertainment" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Entertainment <span className="gradient-text">Studio</span></h2>
          <p>From the silver screen to digital branding, our full-service studio brings your wildest visions to life.</p>
        </div>
        
        <div className="grid-2">
          <div className="glass-card">
            <h3>Video & Holographics</h3>
            <p>Cutting-edge video editing and holographic rendering to create mesmerizing visual experiences.</p>
            <ul className="feature-list">
              <li>High-end Video Post-Production</li>
              <li>Choreographed Holographic Displays</li>
              <li>Immersive Spatial Video</li>
            </ul>
          </div>
          
          <div className="glass-card">
            <h3>Business Advertising</h3>
            <p>Compelling video ad creation tailored for businesses and organizations seeking to stand out.</p>
            <ul className="feature-list">
              <li>Commercial Video Production</li>
              <li>Social Media Campaigns</li>
              <li>Brand Identity Consulting</li>
            </ul>
          </div>
          
          <div className="glass-card">
            <h3>Animation & Design</h3>
            <p>Stunning 2D and 3D animations, coupled with world-class graphic design and branding services.</p>
            <ul className="feature-list">
              <li>2D/3D Character Animation</li>
              <li>Corporate Graphic Design</li>
              <li>Full Brand Kit Development</li>
            </ul>
          </div>
          
          <div className="glass-card">
            <h3>Film & Writing</h3>
            <p>Comprehensive filmmaking services, from visionary scriptwriting to full-scale cinematic production.</p>
            <ul className="feature-list">
              <li>Scriptwriting & Storyboarding</li>
              <li>Directing & Cinematography</li>
              <li>Independent Film Production</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentStudio;
