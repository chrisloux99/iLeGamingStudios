import React, { useState } from 'react';

const GameStudioPage = ({ onNavigate }) => {
  const [activeGame, setActiveGame] = useState('aethelgard');

  const games = [
    {
      id: 'aethelgard',
      title: 'Aethelgard: Neural Genesis',
      genre: 'Afrofuturist Cyberpunk Action RPG',
      engine: 'Unreal Engine 5.4 + Neural Networks',
      status: 'In Alpha Testing',
      image: '/assets/images/game_studio.jpg',
      badge: 'FLAGSHIP TITLE',
      desc: 'Set in a sprawling cyberpunk metropolis, players wield cyber-swords and spatial telekinesis against rogue biomechanical titans controlled by real-time deep neural networks.',
      features: [
        'Unscripted Boss AI that analyzes and counteracts player combat habits in real-time.',
        'Full Nanite & Lumen photorealistic African cyberpunk city with dynamic weather.',
        'Procedural quest lines adapting to player morality and faction relationships.'
      ]
    },
    {
      id: 'chobe',
      title: 'Chobe: Deep Wild',
      genre: 'Spatial AI Ecosystem & Survival Simulator',
      engine: 'Unreal Engine 5 + Spatial Agent Simulation',
      status: 'Coming Q4',
      image: '/assets/images/hero_afro_studio.jpg',
      badge: 'SPATIAL SIMULATION',
      desc: 'An authentic African savannah wilderness simulator where 10,000+ wildlife agents run on real-time neural flocking and biological spatial intelligence models.',
      features: [
        'Biological spatial intelligence: Animals hunt, migrate, and adapt using reinforcement learning.',
        'High-density foliage and water fluid dynamics simulating Zambezi ecosystem hydrology.',
        'Cooperative survival and conservation gameplay modes.'
      ]
    },
    {
      id: 'kigali',
      title: 'Kigali 2099: Speed Zero',
      genre: 'Anti-Gravity Combat Racer',
      engine: 'Unreal Engine 5 + Chaos Physics',
      status: 'Beta Launch',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      badge: 'HIGH OCTANE',
      desc: 'Breakneck 800 km/h anti-gravity racing across neon-lit skyways and subterranean mag-lev tubes of a futuristic African supercity.',
      features: [
        'Sub-millisecond Chaos physics engine handling dynamic hovercraft drift.',
        'Adaptive electronic synth soundtrack with African polyrhythms synced to race tempo.',
        'Cross-platform 16-player multiplayer lobbies.'
      ]
    }
  ];

  return (
    <div className="game-studio-page">
      {/* Page Header */}
      <div className="page-header container">
        <span className="section-tag">AAA GAME DEVELOPMENT DIVISION</span>
        <h1>
          Unreal Engine & <span className="gradient-text">AI Game Studio</span>
        </h1>
        <p>
          We engineer next-generation video games where photorealistic graphics rendered in Unreal Engine 5 collide with sentient AI behavior. 
          Pioneering Afrofuturistic storytelling, unscripted bosses, and dynamic living worlds.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => onNavigate('contact')} className="btn btn-primary">
            Request Studio Playtest Key →
          </button>
          <a href="#games-catalog" className="btn btn-secondary">
            View Game Catalog
          </a>
        </div>
      </div>

      {/* Picture Gallery featuring African Game Developers */}
      <section style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="grid-3">
            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="/assets/images/game_studio.jpg" 
                alt="Cyberpunk Action Combat in Unreal Engine" 
              />
              <div className="picture-badge">REAL-TIME GAMEPLAY</div>
              <div className="picture-overlay">
                <h4>Aethelgard Combat System</h4>
                <p>Neural operative battling mechanical apex units</p>
              </div>
            </div>

            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="/assets/images/hero_afro_studio.jpg" 
                alt="African Game Developers Studio" 
              />
              <div className="picture-badge">DEV TEAM HUB</div>
              <div className="picture-overlay">
                <h4>Lead Game Architects</h4>
                <p>Reviewing level geometry and AI pathfinding graphs</p>
              </div>
            </div>

            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80" 
                alt="QA Playtesting Battle Station" 
              />
              <div className="picture-badge">QA & BENCHMARKING</div>
              <div className="picture-overlay">
                <h4>Neural Playtesting Lab</h4>
                <p>Stress-testing 120 FPS ray-traced graphics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Games Catalog */}
      <section id="games-catalog">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">GAME TITLES</span>
            <h2>Our Unreal Engine <span className="gradient-text">Showcase</span></h2>
            <p>
              Explore our portfolio of original intellectual properties blending high technology with rich African mythos.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {games.map((game, idx) => (
              <div key={game.id} className="glass-card" style={{ padding: '3rem' }}>
                <div className="grid-2" style={{ alignItems: 'center' }}>
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span className="section-tag" style={{ margin: 0 }}>{game.badge}</span>
                      <span className="stats-badge" style={{ color: 'var(--accent-emerald)' }}>● {game.status}</span>
                    </div>

                    <h3 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.5rem' }}>
                      {game.title}
                    </h3>
                    <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
                      {game.genre} • {game.engine}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                      {game.desc}
                    </p>

                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                      <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                        Innovation & Technical Features:
                      </h4>
                      <ul className="feature-list" style={{ marginTop: 0 }}>
                        {game.features.map((feat, fIdx) => (
                          <li key={fIdx} style={{ fontSize: '0.9rem' }}>{feat}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <button onClick={() => onNavigate('contact')} className="btn btn-primary">
                        Sign Up for Alpha Key →
                      </button>
                      <button onClick={() => onNavigate('school')} className="btn btn-secondary">
                        Learn How We Built This
                      </button>
                    </div>
                  </div>

                  <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                    <div className="picture-frame" style={{ height: '380px' }}>
                      <img src={game.image} alt={game.title} />
                      <div className="picture-overlay">
                        <h4>{game.title}</h4>
                        <p>{game.engine}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI in Gaming Tech Breakdown */}
          <div style={{ marginTop: '5rem' }}>
            <div className="glass-card" style={{ padding: '3.5rem' }}>
              <div className="section-header" style={{ marginBottom: '2.5rem' }}>
                <span className="section-tag">ENGINEERING DEEP DIVE</span>
                <h2>How We Integrate <span className="gradient-text">AI Into Unreal Engine</span></h2>
                <p>Moving beyond predictable scripted behaviors into true neural game mechanics.</p>
              </div>

              <div className="grid-3">
                <div style={{ padding: '1.75rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                  <div className="card-icon">🤖</div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.75rem' }}>Deep Q-Network Bosses</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Enemies trained across millions of simulated skirmishes in Python/PyTorch that export directly into Unreal ONNX Runtime for zero-latency in-game decision making.
                  </p>
                </div>

                <div style={{ padding: '1.75rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                  <div className="card-icon">🎙️</div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.75rem' }}>LLM Dynamic Dialogues</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Non-player characters with unique cultural personalities and memories that respond contextually to vocal player microphone input and game events.
                  </p>
                </div>

                <div style={{ padding: '1.75rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                  <div className="card-icon">🌍</div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.75rem' }}>Neural World Synthesis</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Diffusion-accelerated terrain generators that auto-populate biomes with realistic flora distribution and river erosion models in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameStudioPage;
