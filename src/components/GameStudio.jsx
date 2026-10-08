import React from 'react';

const GameStudio = () => {
  return (
    <section id="gamestudio">
      <div className="container">
        <div className="section-header">
          <h2><span className="gradient-text">Game</span> Studio</h2>
          <p>Pushing the boundaries of interactive entertainment with Unreal Engine and AI integration.</p>
        </div>
        
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div className="glass-card">
            <h3>Next-Gen Game Development</h3>
            <p>
              We create immersive, high-fidelity gaming experiences leveraging the power of Unreal Engine. 
              Our titles feature advanced AI companions, dynamic worlds, and groundbreaking mechanics that adapt to player behavior in real-time.
            </p>
            <br />
            <a href="#contact" className="btn btn-primary">Play Our Games</a>
          </div>
          
          <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(0, 243, 255, 0.1), rgba(181, 61, 255, 0.1))' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>AI-Powered Gameplay</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              We integrate neural networks directly into our game engines to create NPCs that learn, evolve, and challenge players in entirely new ways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameStudio;
