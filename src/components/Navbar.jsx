import React, { useState } from 'react';

const Navbar = ({ activePage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="container nav-container">
        <div className="logo" onClick={() => handleNav('home')}>
          <div className="logo-badge">iLe</div>
          <div>
            <span>iLe</span> <span style={{ color: 'var(--accent-cyan)' }}>Gaming Studios</span>
          </div>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <button 
            onClick={() => handleNav('home')} 
            className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('spatial')} 
            className={`nav-item ${activePage === 'spatial' ? 'active' : ''}`}
          >
            Spatial Lab
          </button>
          <button 
            onClick={() => handleNav('entertainment')} 
            className={`nav-item ${activePage === 'entertainment' ? 'active' : ''}`}
          >
            Entertainment
          </button>
          <button 
            onClick={() => handleNav('games')} 
            className={`nav-item ${activePage === 'games' ? 'active' : ''}`}
          >
            Game Studio
          </button>
          <button 
            onClick={() => handleNav('school')} 
            className={`nav-item ${activePage === 'school' ? 'active' : ''}`}
          >
            Gaming School
          </button>
          <button 
            onClick={() => handleNav('contact')} 
            className={`nav-item ${activePage === 'contact' ? 'active' : ''}`}
          >
            Contact & Locations
          </button>
          <button 
            onClick={() => handleNav('contact')} 
            className="btn btn-primary nav-cta"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
