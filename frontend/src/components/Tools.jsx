import React, { useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Java 21', 'Python', 'C++', 'C', 'SQL', 'PHP', 'HTML5', 'CSS3']
  },
  {
    id: 'frontend',
    title: 'Frontend & 3D Web',
    items: ['React 19', 'Next.js 16 (App Router)', 'Three.js / React Three Fiber', 'Tailwind CSS v4', 'GSAP', 'Vite', 'WordPress Plugin Dev']
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    items: ['Spring Boot 3', 'NestJS', 'Node.js', 'Express.js 5', 'Prisma ORM', 'JWT & OAuth 2.0', 'NextAuth.js', 'Zod']
  },
  {
    id: 'cloud',
    title: 'Databases & Tooling',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Firestore', 'SQLite', 'Cloudinary', 'Vercel & Render', 'Docker', 'Git & GitHub Actions', 'Maven & Linux']
  },
  {
    id: 'ai',
    title: 'AI, Vision & Hardware',
    items: ['Google Gemini API (VLMs)', 'Multi-Agent Workflows', 'OpenCV (ArUco & Video)', 'Scikit-Learn', 'NumPy & Pandas', 'Raspberry Pi 5', 'Arduino Nano']
  }
];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const visibleGroups =
    activeCategory === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeCategory);

  return (
    <section id="tools" className="skills">
      <div className="container">
        <div className="tools-header">
          <span className="section-index">02 / Tech Stack</span>
          <h2 className="section-title">Tools &amp; Technologies</h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and hardware tools used across my projects.
          </p>

          <div className="tools-filter-bar" role="tablist" aria-label="Filter skills by category">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === group.id}
                className={`filter-pill ${activeCategory === group.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(group.id)}
              >
                {group.title}
              </button>
            ))}
          </div>
        </div>

        <div className="stack-table">
          {visibleGroups.map((group) => (
            <div key={group.id} className="stack-row">
              <h3 className="stack-category">{group.title}</h3>
              <div className="tools-grid">
                {group.items.map((name) => (
                  <span key={name} className="tool-chip">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
