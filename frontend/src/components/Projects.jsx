import { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'PrintX3D',
    subtitle: '3D Keychain Customizer & Order Platform',
    category: 'fullstack',
    badge: 'Live App + WP Plugin',
    color: '#2563EB',
    iconClass: 'fa-solid fa-cubes',
    description:
      'Custom 3D keychain ordering web app where customers type multi-line text, pick fonts and dual-filament colors with a live Three.js preview, while staff download print-ready procedural STL files. Also includes an embeddable WordPress customizer plugin.',
    tech: ['Next.js 16', 'React 19', 'Three.js / R3F', 'Prisma', 'PostgreSQL', 'WordPress'],
    liveUrl: 'https://printx3d.onrender.com',
    repoUrl: 'https://github.com/Abrar2212/Printx3d'
  },
  {
    title: 'LearnMatrix',
    subtitle: 'Gamified Learning & Code Practice Platform',
    category: 'backend',
    badge: 'Spring Boot + React',
    color: '#7C3AED',
    iconClass: 'fa-solid fa-graduation-cap',
    description:
      'Full-stack learning platform offering interactive courses, quizzes, an integrated Monaco code editor, community Q&A, peer challenges, and XP/coins/leaderboard gamification with JWT and Google OAuth2 sign-in.',
    tech: ['Spring Boot 3', 'Java 21', 'React', 'TypeScript', 'Monaco Editor', 'MySQL', 'OAuth2'],
    repoUrl: 'https://github.com/Abrar2212/LearnMatrix'
  },
  {
    title: 'Skill Binimoy',
    subtitle: 'Peer-to-Peer Skill Exchange & Mentorship Platform',
    category: 'fullstack',
    badge: 'Full-Stack Web App',
    color: '#10B981',
    iconClass: 'fa-solid fa-people-arrows',
    description:
      'Community skill-barter marketplace where members exchange teaching and learning proposals without tuition fees, featuring 1-on-1 Jitsi video sessions, real-time messaging, and an AI learning assistant.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'GSAP'],
    repoUrl: 'https://github.com/Abrar2212/Skill_Binimoy'
  },
  {
    title: 'Starry-Wrap',
    subtitle: 'Inventory & Product Management Dashboard',
    category: 'backend',
    badge: 'Full-Stack Dashboard',
    color: '#0891B2',
    iconClass: 'fa-solid fa-boxes-stacked',
    description:
      'Full-stack inventory and catalog management dashboard featuring optimistic UI state updates, concurrent Cloudinary multi-image uploads, stock tracking, HTTP-only cookie JWT auth, and 6-digit email OTP verification.',
    tech: ['React 19', 'TypeScript', 'Express 5', 'PostgreSQL', 'Cloudinary', 'JWT'],
    repoUrl: 'https://github.com/Abrar2212/Starry-Wrap'
  },
  {
    title: 'Non-Visual Confidence Recall',
    subtitle: 'Assistive Egocentric Episodic Memory AI (FYDP)',
    category: 'ai',
    badge: 'FYDP Prototype',
    color: '#8B5CF6',
    iconClass: 'fa-solid fa-brain',
    description:
      'Final Year Design Project developing calibrated non-visual confidence communication for blind and low-vision smart-glass users using temporal video segmentation, semantic indexing, and Google Gemini VLMs.',
    tech: ['Python', 'Google Gemini VLM', 'OpenCV', 'Scikit-Learn', 'TF-IDF Retrieval']
  },
  {
    title: 'Autonomous Service Robot',
    subtitle: 'Vision-Guided Restaurant Table Delivery Robot',
    category: 'ai',
    badge: 'Robotics & OpenCV',
    color: '#EC4899',
    iconClass: 'fa-solid fa-robot',
    description:
      'Hardware-software restaurant delivery robot integrating a Raspberry Pi 5 camera subsystem (OpenCV ArUco marker table detection) with an Arduino Nano IR-sensor line-following motor controller.',
    tech: ['C++', 'Python', 'OpenCV (ArUco)', 'Raspberry Pi 5', 'Arduino Nano'],
    repoUrl: 'https://github.com/Abrar2212/Autonomous-Restaurant-Service-Robot'
  },
  {
    title: 'Scholarship Scout',
    subtitle: 'AI University & Scholarship Research Assistant',
    category: 'ai',
    badge: 'In-Progress App',
    color: '#0EA5E9',
    iconClass: 'fa-solid fa-magnifying-glass',
    description:
      'Web application that researches official university and scholarship pages, compares requirements against a saved student study profile with source citations, and prepares user-reviewed Gmail enquiry drafts.',
    tech: ['Next.js 16', 'Gemini API', 'Prisma', 'PostgreSQL', 'NextAuth', 'Gmail API']
  },
  {
    title: 'Qasar',
    subtitle: 'Modular E-Commerce Storefront & Backend',
    category: 'backend',
    badge: 'NestJS + React',
    color: '#F59E0B',
    iconClass: 'fa-solid fa-gem',
    description:
      'Perfume e-commerce system organized as a modular NestJS backend (Auth, Products, Inventory, Cart, Orders, Payments, and Admin modules) paired with a responsive React 19 + TypeScript storefront.',
    tech: ['NestJS', 'React 19', 'TypeScript', 'PostgreSQL', 'GSAP']
  },
  {
    title: 'Home Hunt',
    subtitle: 'Real Estate & House Rental Web Application',
    category: 'fullstack',
    badge: 'DBMS Web Project',
    color: '#F97316',
    iconClass: 'fa-solid fa-house',
    description:
      'Property search and rental listing platform featuring user authentication, multi-criteria property search filters, and an admin CRUD management dashboard.',
    tech: ['PHP', 'MySQL', 'React', 'Node.js'],
    repoUrl: 'https://github.com/Abrar2212/Home-Hunt'
  }
];

const categories = [
  { id: 'all', label: 'All Projects (9)' },
  { id: 'fullstack', label: 'Full-Stack & 3D Web' },
  { id: 'backend', label: 'Backend & Systems' },
  { id: 'ai', label: 'AI, Vision & Robotics' }
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
            <span className="section-eyebrow">// 03 · Featured Work</span>
            <h2 className="section-title">Selected Software &amp; Hardware Projects</h2>
            <p className="section-subtitle">
              Full-stack web platforms, 3D customization studios, backend APIs, and academic AI/robotics builds.
            </p>
          </div>
          <a
            href="https://github.com/Abrar2212"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
            <span>All Repositories</span>
          </a>
        </div>

        <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat.id}
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
                    style={{ backgroundColor: `${project.color}16`, color: project.color }}
                  >
                    <i className={project.iconClass} aria-hidden="true" />
                  </div>
                  <span className="project-badge">{project.badge}</span>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle-text">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-tech-list" aria-label={`${project.title} technologies`}>
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
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.repoUrl ? (
                    <a
                      className="project-action-btn"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true" />
                      <span>Repository</span>
                    </a>
                  ) : (
                    <span className="project-private-tag">
                      <i className="fa-solid fa-code-commit" aria-hidden="true" />
                      <span>Local / Academic Repository</span>
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
