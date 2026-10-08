import React, { useState, useEffect, useRef } from 'react';

const WalkthroughVideoHero = ({ onNavigate }) => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);

  const chapters = [
    {
      id: 'overview',
      title: 'Studio Tour: Afrofuturistic Vision',
      duration: '01:45',
      time: '00:15',
      image: '/assets/images/hero_afro_studio.jpg',
      badge: '4K SPATIAL REEL',
      desc: 'Inside iLe Gaming Studios: Black African engineers, game directors, and creative visionaries forging next-generation interactive worlds.',
      linkTarget: 'home',
      linkText: 'Explore Studio Hub'
    },
    {
      id: 'spatial',
      title: 'Spatial Intelligence Lab & NeRF 3D',
      duration: '02:30',
      time: '00:48',
      image: '/assets/images/spatial_lab.jpg',
      badge: 'NVIDIA SIL MIMIC LAB',
      desc: 'Real-time 3D neural reconstruction, embodied AI robotics, and physical simulation algorithms transforming spatial computing.',
      linkTarget: 'spatial',
      linkText: 'Open Spatial Lab Page'
    },
    {
      id: 'entertainment',
      title: 'Entertainment & Holographic Stage',
      duration: '02:15',
      time: '01:12',
      image: '/assets/images/entertainment_studio.jpg',
      badge: 'VIRTUAL PRODUCTION',
      desc: 'Choreographed holographic displays, enterprise video ads, 2D/3D character animations, and award-winning cinematic filmmaking.',
      linkTarget: 'entertainment',
      linkText: 'View Entertainment Studio'
    },
    {
      id: 'game',
      title: 'Unreal Engine 5 & AI Game Engine',
      duration: '03:10',
      time: '01:55',
      image: '/assets/images/game_studio.jpg',
      badge: 'AAA UNREAL ENGINE 5',
      desc: 'High-octane action gaming powered by neural NPC behavior, dynamic physics destruction, and photorealistic African sci-fi worlds.',
      linkTarget: 'games',
      linkText: 'Enter Game Studio'
    },
    {
      id: 'school',
      title: 'Cambridge Gaming School & 3D Lab',
      duration: '02:00',
      time: '02:18',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80',
      badge: 'CAMBRIDGE ACCREDITED',
      desc: 'Empowering the next generation of African game developers and 3D artists with internationally certified Cambridge diplomas.',
      linkTarget: 'school',
      linkText: 'Visit Gaming School'
    }
  ];

  // Beep synthesizer using Web Audio API for immersive tech sound
  const playSoundEffect = (freq = 440, type = 'sine') => {
    if (!audioEnabled) return;
    try {
      const ctx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (!audioCtx) setAudioCtx(ctx);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentChapter((ch) => (ch + 1) % chapters.length);
            return 0;
          }
          return prev + 1.2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, chapters.length]);

  const handleChapterClick = (index) => {
    setCurrentChapter(index);
    setProgress(0);
    playSoundEffect(600, 'triangle');
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    playSoundEffect(isPlaying ? 300 : 500, 'sine');
  };

  const toggleSound = () => {
    const nextState = !audioEnabled;
    setAudioEnabled(nextState);
    if (nextState) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      setAudioCtx(ctx);
    }
  };

  const activeChap = chapters[currentChapter];

  return (
    <div className="walkthrough-container">
      <div className="walkthrough-player">
        <img 
          src={activeChap.image} 
          alt={activeChap.title}
          className="walkthrough-player-bg" 
        />
        
        {/* Futuristic HUD overlay */}
        <div className="walkthrough-hud">
          <div className="walkthrough-hud-top">
            <div className="walkthrough-rec">
              <span className="rec-dot"></span>
              LIVE WALKTHROUGH REEL • {activeChap.badge}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <button 
                onClick={toggleSound}
                className="btn btn-secondary" 
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', borderRadius: '8px' }}
              >
                {audioEnabled ? '🔊 AUDIO ON' : '🔇 MUTE FX'}
              </button>
              <span className="stats-badge mono">CH {currentChapter + 1} / {chapters.length}</span>
            </div>
          </div>

          <div className="walkthrough-hud-center">
            {!isPlaying && (
              <button onClick={togglePlay} className="walkthrough-play-btn" title="Resume Walkthrough">
                ▶
              </button>
            )}
          </div>

          <div className="walkthrough-hud-bottom">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#fff' }}>
                  {activeChap.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem', maxWidth: '650px' }}>
                  {activeChap.desc}
                </p>
              </div>
              <button 
                onClick={() => onNavigate(activeChap.linkTarget)}
                className="btn btn-primary"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
              >
                {activeChap.linkText} →
              </button>
            </div>

            {/* Scrubber Bar */}
            <div 
              className="walkthrough-scrubber"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPct = (clickX / rect.width) * 100;
                setProgress(newPct);
              }}
            >
              <div 
                className="walkthrough-scrubber-progress" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="walkthrough-controls-bar">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button 
                  onClick={togglePlay}
                  style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.1rem' }}
                >
                  {isPlaying ? '⏸ Pause' : '▶ Play'}
                </button>
                <span className="mono" style={{ color: 'var(--text-muted)' }}>
                  {activeChap.time} / {activeChap.duration}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span className="stats-badge" style={{ color: 'var(--accent-emerald)' }}>
                  ● 60 FPS ULTRA-HD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Selection Bar */}
      <div className="walkthrough-chapter-selector">
        {chapters.map((chap, idx) => (
          <button
            key={chap.id}
            onClick={() => handleChapterClick(idx)}
            className={`chapter-btn ${idx === currentChapter ? 'active' : ''}`}
          >
            <span>0{idx + 1}</span> {chap.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WalkthroughVideoHero;
