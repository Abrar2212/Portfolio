import React, { useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'fa-solid fa-code',
    items: [
      { name: 'TypeScript 5', icon: 'fa-solid fa-file-code' },
      { name: 'JavaScript (ES6+)', icon: 'fa-brands fa-js' },
      { name: 'Java 21', icon: 'fa-brands fa-java' },
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'C++', icon: 'fa-solid fa-microchip' },
      { name: 'C', icon: 'fa-solid fa-terminal' },
      { name: 'SQL', icon: 'fa-solid fa-database' },
      { name: 'PHP', icon: 'fa-brands fa-php' },
      { name: 'HTML5', icon: 'fa-brands fa-html5' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend, 3D & Motion',
    icon: 'fa-solid fa-cube',
    items: [
      { name: 'React 19', icon: 'fa-brands fa-react' },
      { name: 'Next.js 16 (App Router)', icon: 'fa-solid fa-layer-group' },
      { name: 'Three.js / R3F', icon: 'fa-solid fa-cubes' },
      { name: 'Tailwind CSS v4', icon: 'fa-solid fa-palette' },
      { name: 'GSAP 3', icon: 'fa-solid fa-wand-magic-sparkles' },
      { name: 'Vite', icon: 'fa-solid fa-bolt' },
      { name: 'WordPress Plugin Dev', icon: 'fa-brands fa-wordpress' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & API Architecture',
    icon: 'fa-solid fa-server',
    items: [
      { name: 'Spring Boot 3', icon: 'fa-solid fa-seedling' },
      { name: 'NestJS', icon: 'fa-solid fa-diagram-project' },
      { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      { name: 'Express.js 5', icon: 'fa-solid fa-network-wired' },
      { name: 'Prisma ORM', icon: 'fa-solid fa-table-columns' },
      { name: 'JWT & OAuth 2.0', icon: 'fa-solid fa-shield-halved' },
      { name: 'NextAuth.js', icon: 'fa-solid fa-key' },
      { name: 'Zod Validation', icon: 'fa-solid fa-circle-check' }
    ]
  },
  {
    id: 'cloud',
    title: 'Databases, Cloud & DevOps',
    icon: 'fa-solid fa-cloud',
    items: [
      { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
      { name: 'MySQL', icon: 'fa-solid fa-database' },
      { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
      { name: 'Firebase / Firestore', icon: 'fa-solid fa-fire' },
      { name: 'SQLite', icon: 'fa-solid fa-hard-drive' },
      { name: 'Cloudinary', icon: 'fa-solid fa-cloud-arrow-up' },
      { name: 'Vercel & Render', icon: 'fa-solid fa-rocket' },
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'Git & GitHub Actions', icon: 'fa-brands fa-git-alt' },
      { name: 'Maven & Linux', icon: 'fa-brands fa-linux' }
    ]
  },
  {
    id: 'ai',
    title: 'Applied AI, Vision & Robotics',
    icon: 'fa-solid fa-brain',
    items: [
      { name: 'Google Gemini API (VLMs)', icon: 'fa-solid fa-wand-sparkles' },
      { name: 'Multi-Agent Pipelines', icon: 'fa-solid fa-sitemap' },
      { name: 'OpenCV (ArUco & Video)', icon: 'fa-solid fa-eye' },
      { name: 'Scikit-Learn', icon: 'fa-solid fa-chart-line' },
      { name: 'NumPy & Pandas', icon: 'fa-solid fa-table' },
      { name: 'Raspberry Pi 5', icon: 'fa-brands fa-raspberry-pi' },
      { name: 'Arduino Nano', icon: 'fa-solid fa-robot' }
    ]
  }
];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const visibleGroups =
    activeCategory === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeCategory);

  return (
    <section id="tools" className="skills tools-section-wrapper">
      <div className="container">
        <div className="tools-header">
          <h2 className="section-title">Tech Stack &amp; Engineering Arsenal</h2>
          <p className="section-subtitle">
            Languages, frameworks, cloud infrastructure, and AI/vision tooling I use across production and research systems.
          </p>

          <div className="tools-filter-bar" role="tablist" aria-label="Filter skills by domain">
            <button
              type="button"
              className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Domains
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`filter-pill ${activeCategory === group.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(group.id)}
              >
                {group.title}
              </button>
            ))}
          </div>
        </div>

        <div className="skill-domains-grid">
          {visibleGroups.map((group) => (
            <div key={group.id} className="skill-domain-card">
              <div className="skill-domain-header">
                <span className="skill-domain-icon">
                  <i className={group.icon} aria-hidden="true" />
                </span>
                <h3 className="tools-title">{group.title}</h3>
              </div>
              <div className="tools-grid">
                {group.items.map((tool) => (
                  <div key={tool.name} className="tool-chip" title={tool.name}>
                    <i className={`${tool.icon} tool-icon`} aria-hidden="true"></i>
                    <span className="tool-name">{tool.name}</span>
                  </div>
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
