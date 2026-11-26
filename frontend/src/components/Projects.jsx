import { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'PrintX3D',
    subtitle: 'Interactive 3D Keychain Customizer & Printing Platform',
    category: 'fullstack',
    badge: 'Live Platform + WP Plugin',
    color: '#14b8a6',
    iconClass: 'fa-solid fa-cubes',
    description:
      'Real-time 3D customization studio where customers preview multi-line text, fonts, and dual-filament colors in 3D while staff export exact print-ready procedural STL meshes. Includes role-based operator/admin queues and an embeddable WordPress plugin.',
    tech: ['Next.js 16', 'React 19', 'Three.js / R3F', 'Prisma', 'PostgreSQL', 'WordPress'],
    liveUrl: 'https://printx3d.onrender.com',
    repoUrl: 'https://github.com/Abrar2212/Printx3d'
  },
  {
    title: 'LearnMatrix',
    subtitle: 'Gamified Full-Stack Learning & Online Judge Platform',
    category: 'backend',
    badge: 'Enterprise Full-Stack',
    color: '#6366f1',
    iconClass: 'fa-solid fa-graduation-cap',
    description:
      'Interactive learning ecosystem featuring structured courses, quizzes, an embedded Monaco code editor, and gamification (XP, coins, badges, peer challenges, and live leaderboards) backed by JWT & Google OAuth2 authentication.',
    tech: ['Spring Boot 3', 'Java 21', 'React', 'TypeScript', 'Monaco Editor', 'MySQL', 'OAuth2'],
    repoUrl: 'https://github.com/Abrar2212/LearnMatrix'
  },
  {
    title: 'Skill Binimoy',
    subtitle: 'Peer-to-Peer Skill Barter & Live Mentorship Marketplace',
    category: 'fullstack',
    badge: 'Community Platform',
    color: '#10b981',
    iconClass: 'fa-solid fa-people-arrows',
    description:
      'Zero-cost knowledge exchange platform enabling learners to trade skills via two-way proposals, integrated 1-on-1 Jitsi video sessions, real-time peer messaging, reputation tracking, and an embedded AI learning assistant.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'GSAP'],
    repoUrl: 'https://github.com/Abrar2212/Skill_Binimoy'
  },
  {
    title: 'Starry-Wrap',
    subtitle: 'High-Performance Inventory & Retail Operations Suite',
    category: 'backend',
    badge: '<60ms API · 0ms UI',
    color: '#3b82f6',
    iconClass: 'fa-solid fa-boxes-stacked',
    description:
      'Full-stack business management dashboard engineered for sub-60ms API responses and zero-latency optimistic UI mutations, with concurrent Cloudinary multi-image streaming, HTTP-only JWT cookies, and 6-digit OTP verification.',
    tech: ['React 19', 'TypeScript', 'Express 5', 'PostgreSQL', 'Cloudinary', 'JWT'],
    repoUrl: 'https://github.com/Abrar2212/Starry-Wrap'
  },
  {
    title: 'Non-Visual Confidence Recall',
    subtitle: 'Assistive Egocentric Episodic Memory AI (FYDP Research)',
    category: 'ai',
    badge: 'FYDP Research · Active',
    color: '#a855f7',
    iconClass: 'fa-solid fa-brain',
    description:
      'Assistive vision-language pipeline for blind and low-vision smart-glass users. Combines temporal video segmentation, semantic keyframe indexing, and Google Gemini VLMs to deliver calibrated confidence communication.',
    tech: ['Python', 'Google Gemini VLM', 'OpenCV', 'Scikit-Learn', 'Semantic Retrieval']
  },
  {
    title: 'Autonomous Service Robot',
    subtitle: 'Computer-Vision Guided Table Delivery Robot',
    category: 'ai',
    badge: 'Robotics & Computer Vision',
    color: '#ec4899',
    iconClass: 'fa-solid fa-robot',
    description:
      'Low-cost autonomous restaurant delivery robot uniting a Raspberry Pi 5 vision subsystem (OpenCV ArUco marker table recognition & human request detection) with an Arduino Nano IR-array motor controller.',
    tech: ['C++', 'Python', 'OpenCV (ArUco)', 'Raspberry Pi 5', 'Arduino Nano'],
    repoUrl: 'https://github.com/Abrar2212/Autonomous-Restaurant-Service-Robot'
  },
  {
    title: 'Scholarship Scout',
    subtitle: 'AI University & Scholarship Research Agent',
    category: 'ai',
    badge: 'AI Agent Workflow',
    color: '#06b6d4',
    iconClass: 'fa-solid fa-magnifying-glass',
    description:
      'Intelligent research assistant that inspects official university & government scholarship domains, verifies source-backed eligibility against a student profile, and prepares human-reviewed Gmail enquiry drafts.',
    tech: ['Next.js 16', 'Gemini AI', 'Prisma', 'PostgreSQL', 'NextAuth', 'Gmail API']
  },
  {
    title: 'Qasar',
    subtitle: 'Modular-Monolith Luxury E-Commerce Platform',
    category: 'backend',
    badge: 'Modular Architecture',
    color: '#f59e0b',
    iconClass: 'fa-solid fa-gem',
    description:
      'Full-stack perfume e-commerce platform architected as a clean NestJS modular monolith with isolated Auth, Inventory, Cart, Order, Payment, and Admin reporting domains paired with a GSAP-animated React 19 storefront.',
    tech: ['NestJS', 'React 19', 'TypeScript', 'PostgreSQL', 'GSAP']
  },
  {
    title: 'Home Hunt',
    subtitle: 'Full-Stack Real Estate & Rental Discovery Platform',
    category: 'fullstack',
    badge: 'Web Application',
    color: '#f97316',
    iconClass: 'fa-solid fa-house',
    description:
      'Property search and house rental platform supporting multi-criteria location/budget filters, secure user authentication, listing management, and an administrative CRUD dashboard.',
    tech: ['PHP', 'MySQL', 'React', 'Node.js'],
    repoUrl: 'https://github.com/Abrar2212/Home-Hunt'
  }
];

const categories = [
  { id: 'all', label: 'All Projects (9)' },
  { id: 'fullstack', label: 'Full-Stack & 3D Web' },
  { id: 'backend', label: 'Backend & Enterprise' },
  { id: 'ai', label: 'Applied AI & Robotics' }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <h2 className="section-title">Featured Engineering Projects</h2>
            <p className="projects-subtitle">
              Production web apps, 3D customizers, enterprise APIs, and multimodal AI &amp; robotics systems.
            </p>
          </div>
          <a
            href="https://github.com/Abrar2212"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            <i className="fa-brands fa-github" aria-hidden="true" /> View GitHub Profile →
          </a>
        </div>

        <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-accent" style={{ backgroundColor: project.color }} />
              <div className="project-body">
                <div className="project-card-head">
                  <div
                    className="project-icon-wrap"
                    style={{ borderColor: `${project.color}40` }}
                  >
                    <i
                      className={project.iconClass}
                      style={{ color: project.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="project-badge">{project.badge}</span>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle-text">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-tech-list">
                  {project.tech.map((item) => (
                    <span key={item} className="project-tech-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  {project.liveUrl && (
                    <a
                      className="project-action-btn primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> Live Demo
                    </a>
                  )}
                  {project.repoUrl ? (
                    <a
                      className="project-action-btn"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true" /> Source Code
                    </a>
                  ) : (
                    <span className="project-private-tag">
                      <i className="fa-solid fa-lock" aria-hidden="true" /> Active Research / Private Build
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
