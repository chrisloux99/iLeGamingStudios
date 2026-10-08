import React, { useEffect, useRef, useState } from 'react';

const SpatialLabPage = ({ onNavigate }) => {
  const canvasRef = useRef(null);
  const [activeArea, setActiveArea] = useState('embodied');

  // Interactive 3D Particle Cloud Canvas mimicking Spatial Point Clouds & NeRFs
  useEffect(() => {
    const canvas = canvasRef.null || canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 360);

    const particles = [];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 0.8 + width / 2,
        y: (Math.random() - 0.5) * height * 0.8 + height / 2,
        z: Math.random() * 400 - 200,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        vz: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
        color: Math.random() > 0.5 ? '#00f3ff' : '#b53dff'
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.fillStyle = '#060911';
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles with depth perspective
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        if (p.z < -200 || p.z > 200) p.vz *= -1;

        // Interactive gravity towards mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }

        // Draw connections
        particles.slice(idx + 1).forEach((p2) => {
          const dxx = p.x - p2.x;
          const dyy = p.y - p2.y;
          const d = Math.sqrt(dxx * dxx + dyy * dyy);
          if (d < 70) {
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.25 - d / 280})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        const scale = 300 / (300 + p.z);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const researchAreas = [
    {
      id: 'embodied',
      title: 'Embodied AI & Spatial Robotics',
      tag: 'CORE AREA 01',
      summary: 'Training autonomous neural agents that perceive, reason, and act in realistic 3D physical spaces.',
      details: [
        'Simulation-to-Reality transfer pipelines for bipedal and dexterous manipulation robots.',
        'Vision-Language-Action (VLA) foundation models trained on 3D spatial representations.',
        'Continuous physical reasoning in complex non-structured environments.'
      ]
    },
    {
      id: 'nerf',
      title: '3D Neural Reconstruction & Gaussian Splats',
      tag: 'CORE AREA 02',
      summary: 'Translating sparse 2D video feeds into photorealistic, interactive 3D digital twins in real time.',
      details: [
        'Real-time neural radiance field (NeRF) decoding on client hardware.',
        'Sub-millimeter 3D Gaussian Splatting for historical African monuments and architectures.',
        'Dynamic relighting and material decomposition under arbitrary illumination.'
      ]
    },
    {
      id: 'worldgen',
      title: 'Generative World Models & Physics Engines',
      tag: 'CORE AREA 03',
      summary: 'Synthesizing infinite interactive 3D worlds governed by rigorous Newtonian physics.',
      details: [
        'Diffusion-based 3D environment synthesis with coherent spatial topology.',
        'AI-accelerated differentiable physics simulators running at 120 FPS.',
        'Multi-agent spatial reinforcement learning playgrounds.'
      ]
    },
    {
      id: 'heritage',
      title: 'African Spatial Computing & Digital Twins',
      tag: 'CORE AREA 04',
      summary: 'Pioneering localized spatial intelligence for Africa’s landscapes, urban centers, and cultural preservation.',
      details: [
        'High-density spatial mapping of Zambian and Pan-African historical heritage sites.',
        'Localized spatial models optimized for resource-constrained edge computing devices.',
        'Open-source African Spatial Intelligence dataset benchmarking initiative.'
      ]
    }
  ];

  return (
    <div className="spatial-page">
      {/* Page Header */}
      <div className="page-header container">
        <span className="section-tag">R&D DIVISION • MIMICKING NVIDIA SIL</span>
        <h1>
          Spatial <span className="gradient-text">Intelligence</span> Lab
        </h1>
        <p>
          Mimicking the pioneering content and research areas of NVIDIA's Spatial Intelligence Lab (SIL), we push the limits of embodied AI, real-time 3D reconstruction, and physics-informed neural simulations from our studios in Africa.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => onNavigate('contact')} className="btn btn-primary">
            Collaborate on Research →
          </button>
          <a href="#simulator" className="btn btn-secondary">
            Launch 3D Simulator
          </a>
        </div>
      </div>

      {/* Picture Gallery featuring African AI Researchers */}
      <section style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="grid-3">
            <div className="picture-frame" style={{ height: '320px' }}>
              <img 
                src="/assets/images/spatial_lab.jpg" 
                alt="Spatial Lab Holographic Setup" 
              />
              <div className="picture-badge">NEURAL RECONSTRUCTION</div>
              <div className="picture-overlay">
                <h4>Holographic NeRF Testbed</h4>
                <p>Real-time 3D scene decomposition & volumetric rendering</p>
              </div>
            </div>

            <div className="picture-frame" style={{ height: '320px' }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                alt="African Senior AI Scientist" 
              />
              <div className="picture-badge">EMBODIED AI TEAM</div>
              <div className="picture-overlay">
                <h4>Dr. Amina Mwansa</h4>
                <p>Lead Scientist, Physics-Informed Neural Networks</p>
              </div>
            </div>

            <div className="picture-frame" style={{ height: '320px' }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                alt="African Robotics & Spatial Computing Researchers" 
              />
              <div className="picture-badge">LAB COLLABORATION</div>
              <div className="picture-overlay">
                <h4>Spatial Robotics Cluster</h4>
                <p>Validating multi-agent reinforcement learning in simulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Simulator */}
      <section id="simulator" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="section-tag">LIVE WEBGL / 3D CANVAS</span>
                <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>Interactive Spatial Point Cloud Sandbox</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Move your cursor over the grid below to dynamically interact with simulated 3D spatial feature vectors and neural nodes.
                </p>
              </div>
              <span className="stats-badge mono" style={{ color: 'var(--accent-cyan)' }}>
                POINT CLOUD DENSITY: 120 NODES
              </span>
            </div>

            <div style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
              <canvas ref={canvasRef} style={{ width: '100%', height: '360px', display: 'block', cursor: 'crosshair' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas (mimicking NVIDIA SIL) */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">RESEARCH AREAS</span>
            <h2>Mimicking the Frontier of <span className="gradient-text">Spatial Intelligence</span></h2>
            <p>
              Directly aligned with global benchmarks in spatial AI, our lab investigates four interconnected pillars.
            </p>
          </div>

          <div className="grid-2">
            {researchAreas.map((area) => (
              <div 
                key={area.id}
                className="glass-card"
                style={{ 
                  borderLeft: activeArea === area.id ? '4px solid var(--accent-cyan)' : '1px solid var(--glass-border)' 
                }}
                onClick={() => setActiveArea(area.id)}
              >
                <span className="section-tag" style={{ fontSize: '0.75rem' }}>{area.tag}</span>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.75rem' }}>{area.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{area.summary}</p>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Focus Highlights:</h4>
                  <ul className="feature-list" style={{ marginTop: '0.5rem' }}>
                    {area.details.map((detail, idx) => (
                      <li key={idx} style={{ fontSize: '0.88rem' }}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Published Papers / Whitepapers */}
          <div style={{ marginTop: '4rem' }}>
            <div className="glass-card">
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#fff' }}>
                Recent Preprints & Technical Reports
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>
                      AfroSplat: High-Fidelity 3D Heritage Reconstruction via Sparse Monocular Video
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                      C. M. Lukonde, A. Mwansa, et al. • iLe Spatial Intelligence Lab Technical Report
                    </p>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    Request Whitepaper
                  </button>
                </div>

                <div style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>
                      Neural Physics for Zero-Shot Sim-to-Real Robot Navigation in Semi-Arid Terrains
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                      iLe Robotics & Embodied AI Working Group • Joint Research Memo
                    </p>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    Request Whitepaper
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpatialLabPage;
