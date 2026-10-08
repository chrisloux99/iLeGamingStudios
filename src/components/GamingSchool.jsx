import React from 'react';

const GamingSchool = () => {
  return (
    <section id="school" style={{ paddingBottom: '10rem' }}>
      <div className="container">
        <div className="glass-card" style={{ textAlign: 'center', background: 'rgba(181, 61, 255, 0.05)', border: '1px solid rgba(181, 61, 255, 0.2)' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>iLe Gaming <span className="gradient-text">School</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
            Join our gaming school under official Cambridge certifications. Master the art of game development, create your own games, and sculpt stunning 3D models.
          </p>
          
          <div className="grid-3" style={{ textAlign: 'left', marginTop: '3rem', marginBottom: '3rem' }}>
            <div>
              <h4 style={{ color: '#fff' }}>Game Design & Dev</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Learn Unreal Engine, logic programming, and level design from industry veterans.</p>
            </div>
            <div>
              <h4 style={{ color: '#fff' }}>3D Modeling & Art</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Sculpt characters, rig skeletons, and texture environments ready for AAA titles.</p>
            </div>
            <div>
              <h4 style={{ color: '#fff' }}>Cambridge Certified</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Earn internationally recognized credentials to kickstart your career in the gaming industry.</p>
            </div>
          </div>
          
          <button className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default GamingSchool;
