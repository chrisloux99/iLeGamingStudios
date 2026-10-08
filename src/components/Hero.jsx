import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container animate-fade-in">
        <h1>
          Where Reality Meets <span className="gradient-text">Imagination</span>
        </h1>
        <p>
          iLe Gaming Studios is a premier multimedia gaming and entertainment company. 
          We build the future of play, film, and spatial computing all in one place.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#gamestudio" className="btn btn-primary">Explore Our Games</a>
          <a href="#entertainment" className="btn btn-secondary">Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
