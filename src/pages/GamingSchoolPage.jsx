import React, { useState, useMemo } from 'react';

const cadgiCourses = [
    {
      id: 'm7',
      code: 'M7',
      title: 'Introduction to Unreal Engine 5, Part 1',
      url: 'https://school.cadgi.org/courses/2634120',
      access: ['IVGC Free', 'IVGC+'],
      instructor: 'Matthew Dickson',
      role: 'Senior Unreal Engine Architect',
      category: 'engine',
      desc: 'Master the fundamentals of Unreal Engine 5: project setup, viewport navigation, Level Design with Nanite geometry, and core visual scripting with Blueprints.'
    },
    {
      id: 'm8',
      code: 'M8',
      title: 'Introduction to Unreal Engine 5, Part 2',
      url: 'https://school.cadgi.org/courses/2672635',
      access: ['IVGC+'],
      instructor: 'Matthew Dickson',
      role: 'Senior Unreal Engine Architect',
      category: 'engine',
      desc: 'Advanced Unreal Engine 5 pipelines: dynamic global illumination with Lumen, Chaos physics simulations, character animation blueprints, and lighting optimization.'
    },
    {
      id: 'm3',
      code: 'M3',
      title: '"Merlin\'s Demon War", Card Combat Game',
      url: 'https://school.cadgi.org/courses/2688928',
      access: ['IVGC+'],
      instructor: 'Matthew Dickson',
      role: 'Senior Gameplay Programmer',
      category: 'engine',
      desc: 'Construct a complete tactical card battler from the ground up: card draw mechanics, turn state machines, custom UI canvases, and gameplay animation state logic.'
    },
    {
      id: 'm6',
      code: 'M6',
      title: 'Space Shooter',
      url: 'https://school.cadgi.org/courses/2690775',
      access: ['IVGC+'],
      instructor: 'Matthew Dickson',
      role: 'Senior Gameplay Programmer',
      category: 'engine',
      desc: 'Build an arcade space combat game: projectile ballistics, particle visual effects, dynamic enemy wave spawners, score multipliers, and 60 FPS performance tuning.'
    },
    {
      id: 'm5',
      code: 'M5',
      title: 'Mobile Snake Game',
      url: 'https://school.cadgi.org/courses/2690070',
      access: ['IVGC+'],
      instructor: 'Matthew Dickson',
      role: 'Mobile Game Dev Lead',
      category: 'engine',
      desc: 'Hands-on mobile mechanics engineering: responsive swipe gestures, grid-based movement arrays, touch UX considerations, and multi-device aspect ratio scaling.'
    },
    {
      id: 'm10',
      code: 'M10',
      title: 'History of Games',
      url: 'https://school.cadgi.org/courses/2680871',
      access: ['IVGC+'],
      instructor: 'James Shepherd',
      role: 'Industry Veteran & Creative Director',
      category: 'design',
      desc: 'An authoritative journey through pivotal milestones in video game history, examining the technological breakthroughs and creative paradigms that shaped modern interactive media.'
    },
    {
      id: 'm18',
      code: 'M18',
      title: 'Game Concept Design',
      url: 'https://school.cadgi.org/courses/2682773',
      access: ['IVGC Free', 'IVGC+'],
      instructor: 'James Shepherd',
      role: 'Industry Veteran & Creative Director',
      category: 'design',
      desc: 'Transform raw creative sparks into viable game concept documents (GDD), high concepts, elevator pitches, player persona profiles, and market-ready prototypes.'
    },
    {
      id: 'm31',
      code: 'M31',
      title: 'Narrative in Games',
      url: 'https://school.cadgi.org/courses/2762956',
      access: ['IVGC+'],
      instructor: 'James Shepherd',
      role: 'Narrative Lead & Director',
      category: 'design',
      desc: 'Craft immersive interactive storylines, branching narrative trees, environmental lore exposition, dialogue trees, and emotionally resonant player dilemmas.'
    },
    {
      id: 'm32',
      code: 'M32',
      title: 'Gameplay, Game Mechanics and Game Features',
      url: 'https://school.cadgi.org/courses/2762962',
      access: ['IVGC+'],
      instructor: 'James Shepherd',
      role: 'Game Systems Designer',
      category: 'design',
      desc: 'Deep structural analysis of core game loops, auxiliary progression mechanics, input responsiveness, cognitive player feedback, and pacing curves.'
    },
    {
      id: 'm11',
      code: 'M11',
      title: 'Game Experience Analysis - My Favourite Game',
      url: 'https://school.cadgi.org/courses/2681336',
      access: ['IVGC+'],
      instructor: 'Dr. Jan Storgårds',
      role: 'Director CADGI • Cambridge Academic',
      category: 'design',
      desc: 'Deconstruct your favorite games through rigorous academic frameworks: assess immersion hooks, heuristic usability evaluations, aesthetic coherence, and player retention.'
    },
    {
      id: 'm14',
      code: 'M14',
      title: 'Analysis of the Game I Play Now',
      url: 'https://school.cadgi.org/courses/2681955',
      access: ['IVGC+'],
      instructor: 'Dr. Jan Storgårds',
      role: 'Director CADGI • Cambridge Academic',
      category: 'design',
      desc: 'Conduct real-time teardowns of active commercial titles: inspect live-service events, monetization fairness, social loops, and player progression friction.'
    },
    {
      id: 'm13',
      code: 'M13',
      title: 'The Games Industry and Data Analytics',
      url: 'https://school.cadgi.org/courses/2681856',
      access: ['IVGC+'],
      instructor: 'Dr. Jan Storgårds',
      role: 'Director CADGI • Cambridge Academic',
      category: 'business',
      desc: 'Harness telemetry, in-game analytics, cohort retention curves, churn modeling, and market data intelligence to drive data-informed game production and publishing.'
    },
    {
      id: 'm22',
      code: 'M22',
      title: 'Teams: Roles and Opportunities in Games Development',
      url: 'https://school.cadgi.org/courses/2762949',
      access: ['IVGC+'],
      instructor: 'James Shepherd',
      role: 'Production & Talent Mentor',
      category: 'business',
      desc: 'Demystify studio career structures: explore programming, art, sound, production, QA, and agile sprint workflows to identify your optimal entry pathway into the industry.'
    },
    {
      id: 'm23',
      code: 'M23',
      title: 'Winning Investment',
      url: 'https://school.cadgi.org/courses/2813889',
      access: ['IVGC+'],
      instructor: 'Aimee Freeding',
      role: 'Games Venture Advisor',
      category: 'business',
      desc: 'Learn how indie creators and studios secure capital: prepare investor decks, master publisher term sheets, financial forecasting, valuation models, and grant applications.'
    },
    {
      id: 'm25',
      code: 'M25',
      title: 'Building a Game Brand',
      url: 'https://school.cadgi.org/courses/2813917',
      access: ['IVGC+'],
      instructor: 'Alex Noon',
      role: 'Games Brand Strategist',
      category: 'business',
      desc: 'Develop enduring studio and IP brand identities: trailer design, capsule art conversion on Steam, press kits, influencer outreach, and visual brand equity.'
    },
    {
      id: 'm26',
      code: 'M26',
      title: 'Community and Social',
      url: 'https://school.cadgi.org/courses/2813967',
      access: ['IVGC+'],
      instructor: 'Cameron Thomas',
      role: 'Community Lead',
      category: 'business',
      desc: 'Cultivate engaged gaming communities: launch Discord hubs, manage open and closed playtests, moderate community discussions, and turn players into studio evangelists.'
    },
    {
      id: 'm9',
      code: 'M9',
      title: 'Sound Design for Videogames',
      url: 'https://school.cadgi.org/courses/2190387',
      access: ['IVGC+'],
      instructor: 'Niccolò Pagnacco',
      role: 'Interactive Audio Designer',
      category: 'audio',
      desc: 'Design and synthesize dynamic game soundscapes: foley effects, adaptive combat audio triggers, spatial HRTF positioning, middleware integration, and mixing.'
    },
    {
      id: 'internship',
      code: 'IVGC Internship',
      title: 'IVGC Internship Programme',
      url: 'https://school.cadgi.org/courses/2932780',
      access: ['IVGC Free', 'IVGC+'],
      instructor: 'Dr. Jan Storgårds & James Shepherd',
      role: 'Executive Mentors • Cambridge UK',
      category: 'business',
      desc: 'Elite hands-on studio internship: collaborate on live studio milestones with international teams, receive Cambridge faculty mentorship, and graduate with certified portfolio credits.'
    }
  ];

const GamingSchoolPage = ({ onNavigate }) => {
  const [selectedTrack, setSelectedTrack] = useState('unreal');
  const [courseFilter, setCourseFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [enrolled, setEnrolled] = useState(false);
  const [studentForm, setStudentForm] = useState({ 
    name: '', 
    email: '', 
    track: 'M7 | Introduction to Unreal Engine 5, Part 1 (IVGC Free)', 
    ageGroup: '18-25',
    message: ''
  });

  const handleEnroll = (e) => {
    e.preventDefault();
    setEnrolled(true);
    setTimeout(() => setEnrolled(false), 7000);
  };

  const filteredCourses = useMemo(() => {
    return cadgiCourses.filter((course) => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.desc.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (courseFilter === 'free') {
        return course.access.includes('IVGC Free');
      }
      if (courseFilter === 'engine') {
        return course.category === 'engine';
      }
      if (courseFilter === 'design') {
        return course.category === 'design';
      }
      if (courseFilter === 'business') {
        return course.category === 'business';
      }
      if (courseFilter === 'audio') {
        return course.category === 'audio';
      }
      return true;
    });
  }, [courseFilter, searchQuery]);

  const tracks = [
    {
      id: 'unreal',
      title: 'Track 1: Unreal Engine 5 & Game Architecture (C++)',
      duration: '12 Months • Full-Time / Part-Time',
      certification: 'Cambridge Professional Diploma in Interactive Systems',
      desc: 'Master the AAA engine powering global game studios. From Blueprint visual scripting to high-performance C++ multiplayer netcode.',
      modules: [
        'Unreal Engine 5 Core: Nanite, Lumen & Chaos Physics (Modules M7 & M8)',
        'Gameplay Programming in C++ & Blueprint Architecture (Module M3)',
        'Multiplayer Networking, Server Replication & Client Prediction',
        'Final Capstone: Ship Your Own Commercial Indie Game on Steam'
      ]
    },
    {
      id: '3dmodeling',
      title: 'Track 2: AAA 3D Sculpting, Modeling & Character Art',
      duration: '9 Months • Hands-on Studio Practice',
      certification: 'Cambridge Certification in Digital 3D Asset Artistry',
      desc: 'Learn digital sculpting, anatomical modeling, hard-surface weapon design, and hyper-realistic PBR texturing for video games and films.',
      modules: [
        'Organic Digital Sculpting in ZBrush & Blender',
        'Retopology, UV Unwrapping & Polycount Optimization',
        'Texturing & Shading with Substance 3D Painter & Designer',
        'Character Skeletal Rigging, Skinning & Facial Blendshapes'
      ]
    },
    {
      id: 'ai-game',
      title: 'Track 3: AI in Game Development & Spatial Simulation',
      duration: '6 Months • Advanced Specialization',
      certification: 'iLe & Cambridge Certificate in Game AI Engineering',
      desc: 'Infuse games with intelligence. Train neural networks, create generative landscapes, and code reactive non-player characters.',
      modules: [
        'Reinforcement Learning Agents for Combat & Steering',
        'Procedural Dungeon & Open-World Biome Generation',
        'LLM NPC Brains & Real-time Neural Voice Integration',
        'Integration with Spatial Intelligence Lab Pipelines'
      ]
    }
  ];

  return (
    <div className="gaming-school-page">
      {/* Page Header */}
      <div className="page-header container">
        <span className="section-tag">OFFICIAL CAMBRIDGE & CADGI ACCREDITATION</span>
        <h1>
          iLe <span className="gradient-text">Gaming School</span> & CADGI Academy
        </h1>
        <p>
          Master industry-standard game development with the International Video Game Certificate (IVGC). Powered by Cambridge Academy of Digital Games and Innovation (CADGI), Cambridge, United Kingdom.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#courses-catalog" className="btn btn-accent">
            Explore Courses & Syllabus ↓
          </a>
          <a href="#enroll" className="btn btn-secondary">
            Apply for Next Cohort →
          </a>
          {onNavigate && (
            <button onClick={() => onNavigate('contact')} className="btn btn-secondary">
              Contact Admissions
            </button>
          )}
        </div>
      </div>

      {/* Picture Gallery featuring African Students & Academy Classroom */}
      <section style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="grid-3">
            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                alt="Instructor Teaching 3D Game Design" 
              />
              <div className="picture-badge">CAMBRIDGE INSTRUCTOR</div>
              <div className="picture-overlay">
                <h4>Interactive Studio Class</h4>
                <p>One-on-one mentorship with industry game veterans</p>
              </div>
            </div>

            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                alt="Students Collaborating on 3D Models" 
              />
              <div className="picture-badge">STUDENT LAB</div>
              <div className="picture-overlay">
                <h4>Cohort Game Jam</h4>
                <p>Students designing and playtesting indie prototypes</p>
              </div>
            </div>

            <div className="picture-frame" style={{ height: '340px' }}>
              <img 
                src="/assets/images/hero_afro_studio.jpg" 
                alt="Gaming Academy High-Tech Lab" 
              />
              <div className="picture-badge">STUDIO GRADE HARDWARE</div>
              <div className="picture-overlay">
                <h4>Hardware & Workstations</h4>
                <p>Dual-monitor RTX rigs, VR kits & Wacom drawing tablets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Courses - Live CADGI & IVGC Catalog */}
      <section id="courses-catalog" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="course-catalog-header">
            <div>
              <span className="section-tag" style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(0, 243, 255, 0.4)' }}>
                INTERNATIONAL VIDEO GAME CERTIFICATE (IVGC)
              </span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                Explore Our <span className="gradient-text">Courses</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '750px' }}>
                Still unconvinced? Have a look at some of our content to find the perfect match for your learning goals! Access free introductory modules or enroll in the full IVGC+ professional curriculum.
              </p>
            </div>

            {/* Filter Buttons & Search Input */}
            <div className="course-controls-row">
              <div className="course-filter-group">
                <button 
                  className={`course-filter-btn ${courseFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setCourseFilter('all')}
                >
                  All Courses ({cadgiCourses.length})
                </button>
                <button 
                  className={`course-filter-btn ${courseFilter === 'free' ? 'active' : ''}`}
                  onClick={() => setCourseFilter('free')}
                >
                  ✨ Free Starter ({cadgiCourses.filter(c => c.access.includes('IVGC Free')).length})
                </button>
                <button 
                  className={`course-filter-btn ${courseFilter === 'engine' ? 'active' : ''}`}
                  onClick={() => setCourseFilter('engine')}
                >
                  🎮 Unreal & Coding ({cadgiCourses.filter(c => c.category === 'engine').length})
                </button>
                <button 
                  className={`course-filter-btn ${courseFilter === 'design' ? 'active' : ''}`}
                  onClick={() => setCourseFilter('design')}
                >
                  🎨 Design & Story ({cadgiCourses.filter(c => c.category === 'design').length})
                </button>
                <button 
                  className={`course-filter-btn ${courseFilter === 'business' ? 'active' : ''}`}
                  onClick={() => setCourseFilter('business')}
                >
                  💼 Business & Careers ({cadgiCourses.filter(c => c.category === 'business').length})
                </button>
                <button 
                  className={`course-filter-btn ${courseFilter === 'audio' ? 'active' : ''}`}
                  onClick={() => setCourseFilter('audio')}
                >
                  🎧 Audio ({cadgiCourses.filter(c => c.category === 'audio').length})
                </button>
              </div>

              <div className="course-search-wrapper">
                <span className="course-search-icon">🔍</span>
                <input 
                  type="text"
                  className="course-search-input"
                  placeholder="Search course, code, or instructor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length === 0 ? (
            <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>No courses matched your query</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Try clearing your search term or selecting "All Courses".</p>
              <button 
                onClick={() => { setCourseFilter('all'); setSearchQuery(''); }}
                className="btn btn-secondary" 
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div>
                    <div className="course-card-top">
                      <span className="course-code-badge">{course.code}</span>
                      <div className="course-access-tags">
                        {course.access.map((acc, aIdx) => (
                          <span 
                            key={aIdx} 
                            className={acc === 'IVGC Free' ? 'badge-free' : 'badge-plus'}
                          >
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-desc">{course.desc}</p>
                  </div>

                  <div>
                    <div className="course-instructor-info">
                      <div className="instructor-avatar-badge">
                        {course.instructor.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="instructor-meta">
                        <span className="instructor-name">{course.instructor}</span>
                        <span className="instructor-role">{course.role}</span>
                      </div>
                    </div>

                    <div className="course-action-row">
                      <a 
                        href={course.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="course-link-btn"
                      >
                        <span>Access on CADGI Portal</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Official CADGI Partner Footer Banner */}
          <div className="cadgi-partner-footer">
            <div style={{ maxWidth: '650px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.4rem' }}>🏛️</span>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '1.25rem' }}>
                  Cambridge Academy of Digital Games and Innovation (CADGI Ltd.)
                </h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem', lineHeight: '1.6' }}>
                All curriculum modules and certifications are governed under CADGI accreditation standards. 
                Courses are delivered in collaboration with iLe Gaming Studios to empower the next generation of international game developers.
              </p>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                📍 C/O Windsor House Station Court, Station Road, Great Shelford, Cambridge, United Kingdom, CB22 5NE
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
              <a 
                href="https://school.cadgi.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ background: '#00E563', color: '#000', border: 'none', fontWeight: 700 }}
              >
                <span>Visit school.cadgi.org</span> ↗
              </a>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem' }}>
                <a 
                  href="https://www.cadgi.org/tos" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
                >
                  Terms of Service
                </a>
                <a 
                  href="https://www.cadgi.org/privacypolicy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Certification Highlight Banner */}
      <section style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(255, 170, 0, 0.08), rgba(181, 61, 255, 0.08))', border: '1px solid rgba(255, 170, 0, 0.3)', padding: '3rem' }}>
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="section-tag" style={{ color: 'var(--accent-amber)', borderColor: 'rgba(255, 170, 0, 0.4)' }}>
                  ACCREDITED EXCELLENCE
                </span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  Why Study Under <span className="gradient-text-gold">Cambridge Certifications</span>?
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Our curriculum adheres to the rigorous benchmarks established by Cambridge international educational standards. When you complete our gaming courses, you receive accredited diplomas recognized by universities and top game studios worldwide.
                </p>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-amber)' }}>100%</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Cambridge Verified Credentials</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>88%</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Direct Studio Placement Rate</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>3+</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Commercial Games Shipped per Student</div>
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ background: 'rgba(5, 7, 12, 0.8)' }}>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Graduate Skills Portfolio</h4>
                <ul className="feature-list">
                  <li>Unreal Engine 5 C++ & Blueprint Architecture</li>
                  <li>3D Character Sculpting & Environment Texturing</li>
                  <li>Game Audio & Interactive Foley Production</li>
                  <li>Cambridge Portfolio Review & Industry Mock Interviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Tracks */}
      <section id="curriculum">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">COMPREHENSIVE STUDIO TRACKS</span>
            <h2>Long-Term Diplomas & <span className="gradient-text">Specializations</span></h2>
            <p>Combine individual CADGI modules into cohesive professional diploma programs spanning 6 to 12 months.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {tracks.map((trk) => (
              <div 
                key={trk.id} 
                className="glass-card"
                style={{ 
                  borderLeft: selectedTrack === trk.id ? '4px solid var(--accent-purple)' : '1px solid var(--glass-border)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedTrack(trk.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{trk.title}</h3>
                    <span className="stats-badge" style={{ color: 'var(--accent-amber)', marginTop: '0.4rem' }}>
                      🎓 {trk.certification}
                    </span>
                  </div>
                  <span className="stats-badge mono">{trk.duration}</span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  {trk.desc}
                </p>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                    What You Will Build & Master:
                  </h4>
                  <ul className="feature-list" style={{ marginTop: 0 }}>
                    {trk.modules.map((mod, mIdx) => (
                      <li key={mIdx} style={{ fontSize: '0.9rem' }}>{mod}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application / Enrollment Form */}
      <section id="enroll">
        <div className="container">
          <div className="glass-card" style={{ padding: '3.5rem', background: 'linear-gradient(135deg, rgba(20, 15, 38, 0.9), rgba(8, 10, 18, 0.95))' }}>
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="section-tag" style={{ color: 'var(--accent-purple)', borderColor: 'rgba(181, 61, 255, 0.4)' }}>
                  APPLICATION PORTAL
                </span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  Join Our Next <span className="gradient-text">Academic Cohort</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Applications for our upcoming semester and individual CADGI module cohorts are now open. We offer flexible learning models, computer lab access, and merit-based partial scholarships for African creative talent.
                </p>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <div>📍 <strong>Campus:</strong> Innovation Park, Great East Road, Lusaka, Zambia</div>
                  <div>🌐 <strong>Distance Learning:</strong> Interactive online studio sessions available worldwide via CADGI</div>
                  <div>📜 <strong>Awarding Body:</strong> CADGI Ltd., Cambridge, United Kingdom</div>
                </div>
              </div>

              <div>
                {enrolled ? (
                  <div style={{ padding: '2.5rem', background: 'rgba(0, 255, 170, 0.1)', border: '1px solid var(--accent-emerald)', borderRadius: '1.25rem', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>Application Submitted!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Welcome! Our admissions coordinator will send the syllabus packet and schedule your introductory creative interview.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEnroll} className="glass-card" style={{ background: 'rgba(6, 9, 16, 0.85)' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: '#fff' }}>
                      Apply to iLe Gaming School
                    </h3>

                    <div className="input-group">
                      <label className="input-label">Student Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="e.g. Kuda Moyo"
                        value={studentForm.name}
                        onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                      />
                    </div>

                    <div className="input-group">
                      <label className="input-label">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="student@example.com"
                        value={studentForm.email}
                        onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                      />
                    </div>

                    <div className="input-group">
                      <label className="input-label">Desired Course or Track</label>
                      <select 
                        className="form-input" 
                        style={{ background: '#0d111d' }}
                        value={studentForm.track}
                        onChange={(e) => setStudentForm({ ...studentForm, track: e.target.value })}
                      >
                        <optgroup label="Free Starter Modules">
                          <option>M7 | Introduction to Unreal Engine 5, Part 1 (IVGC Free)</option>
                          <option>M18 | Game Concept Design (IVGC Free)</option>
                          <option>IVGC Internship Programme (IVGC Free / Plus)</option>
                        </optgroup>
                        <optgroup label="Full Diploma Tracks">
                          <option>Track 1: Unreal Engine 5 & Game Architecture (C++)</option>
                          <option>Track 2: AAA 3D Sculpting, Modeling & Character Art</option>
                          <option>Track 3: AI in Game Development & Spatial Simulation</option>
                        </optgroup>
                        <optgroup label="Specialized CADGI Modules (IVGC+)">
                          <option>M8 | Introduction to Unreal Engine 5, Part 2</option>
                          <option>M3 | "Merlin's Demon War", Card Combat Game</option>
                          <option>M6 | Space Shooter Game Dev</option>
                          <option>M5 | Mobile Snake Game</option>
                          <option>M9 | Sound Design for Videogames</option>
                          <option>M13 | The Games Industry and Data Analytics</option>
                          <option>M23 | Winning Investment</option>
                          <option>M25 | Building a Game Brand</option>
                          <option>M31 | Narrative in Games</option>
                          <option>M32 | Gameplay, Game Mechanics and Features</option>
                        </optgroup>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>
                      Submit Student Application →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamingSchoolPage;
