import React from 'react';

const SpatialIntelligence = () => {
  return (
    <section id="spatial">
      <div className="container">
        <div className="section-header">
          <h2><span className="gradient-text">Spatial Intelligence</span> Lab</h2>
          <p>Mimicking the bleeding edge of NVIDIA's Spatial Intelligence research, our lab focuses on understanding, simulating, and generating 3D physical spaces through AI.</p>
        </div>
        
        <div className="grid-3">
          <div className="glass-card">
            <div className="card-icon">🧠</div>
            <h3>Embodied AI & Robotics</h3>
            <p>Developing AI agents that can perceive, reason, and act in complex 3D environments, blending virtual simulations with physical realities.</p>
          </div>
          <div className="glass-card">
            <div className="card-icon">🌐</div>
            <h3>3D World Generation</h3>
            <p>Harnessing generative AI to create expansive, physically accurate virtual worlds, digital twins, and immersive simulations on the fly.</p>
          </div>
          <div className="glass-card">
            <div className="card-icon">⚡</div>
            <h3>Physics Simulation</h3>
            <p>Advancing the boundaries of real-time physics rendering, ensuring every interaction in our digital environments feels true to life.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpatialIntelligence;
