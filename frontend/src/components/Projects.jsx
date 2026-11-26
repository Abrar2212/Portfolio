import { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'PrintX3D',
    subtitle: '3D Keychain Customizer & Order Platform',
    category: 'fullstack',
    description:
      'Custom 3D keychain ordering web app where customers type multi-line text, pick fonts and dual-filament colors with a live Three.js preview, while staff download print-ready procedural STL files. Includes an embeddable WordPress customizer plugin.',
    tech: ['Next.js 16', 'React 19', 'Three.js / R3F', 'Prisma', 'PostgreSQL', 'WordPress'],
    liveUrl: 'https://printx3d.onrender.com',
    repoUrl: 'https://github.com/Abrar2212/Printx3d'
  },
  {
    title: 'LearnMatrix',
    subtitle: 'Gamified Learning & Code Practice Platform',
    category: 'backend',
    description:
      'Full-stack learning platform offering interactive courses, quizzes, an integrated Monaco code editor, community Q&A, peer challenges, and XP/coins/leaderboard tracking with JWT and Google OAuth2 sign-in.',
    tech: ['Spring Boot 3', 'Java 21', 'React', 'TypeScript', 'Monaco Editor', 'MySQL'],
    repoUrl: 'https://github.com/Abrar2212/LearnMatrix'
  },
  {
    title: 'Skill Binimoy',
    subtitle: 'Peer-to-Peer Skill Exchange Marketplace',
    category: 'fullstack',
    description:
      'Community skill-barter platform where members exchange teaching and learning proposals without tuition fees, featuring 1-on-1 Jitsi video sessions, real-time messaging, and an AI study assistant.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'GSAP'],
    repoUrl: 'https://github.com/Abrar2212/Skill_Binimoy'
  },
  {
    title: 'Starry-Wrap',
    subtitle: 'Inventory & Product Management Dashboard',
    category: 'backend',
    description:
      'Full-stack inventory and catalog dashboard featuring optimistic UI updates, concurrent Cloudinary multi-image uploads, stock tracking, HTTP-only cookie JWT authentication, and email OTP verification.',
    tech: ['React 19', 'TypeScript', 'Express 5', 'PostgreSQL', 'Cloudinary', 'JWT'],
    repoUrl: 'https://github.com/Abrar2212/Starry-Wrap'
  },
  {
    title: 'Non-Visual Confidence Recall',
    subtitle: 'Assistive Episodic Memory AI (FYDP)',
    category: 'ai',
    description:
      'Final Year Design Project developing calibrated non-visual confidence communication for blind and low-vision smart-glass users via temporal video segmentation, semantic indexing, and Google Gemini VLMs.',
    tech: ['Python', 'Google Gemini VLM', 'OpenCV', 'Scikit-Learn']
  },
  {
    title: 'Autonomous Service Robot',
    subtitle: 'Vision-Guided Table Delivery Robot',
    category: 'ai',
    description:
      'Hardware-software restaurant delivery robot combining a Raspberry Pi 5 camera module (OpenCV ArUco marker table recognition) with an Arduino Nano IR-sensor line-following motor controller.',
    tech: ['C++', 'Python', 'OpenCV', 'Raspberry Pi 5', 'Arduino Nano'],
    repoUrl: 'https://github.com/Abrar2212/Autonomous-Restaurant-Service-Robot'
  },
  {
    title: 'Scholarship Scout',
    subtitle: 'AI University & Scholarship Research Tool',
    category: 'ai',
    description:
      'Web application that inspects official university and scholarship pages, checks eligibility requirements against a saved student profile with source links, and prepares user-reviewed Gmail drafts.',
    tech: ['Next.js 16', 'Gemini API', 'Prisma', 'PostgreSQL', 'NextAuth', 'Gmail API']
  },
  {
    title: 'Qasar',
    subtitle: 'Modular E-Commerce Storefront & API',
    category: 'backend',
    description:
      'Perfume e-commerce platform structured as a modular NestJS backend (Auth, Products, Inventory, Cart, Orders, Payments, and Admin) paired with a React 19 + TypeScript storefront.',
    tech: ['NestJS', 'React 19', 'TypeScript', 'PostgreSQL', 'GSAP']
  },
  {
    title: 'Home Hunt',
    subtitle: 'Real Estate & House Rental Web App',
    category: 'fullstack',
    description:
      'Property search and rental listing web application supporting user authentication, multi-criteria property filters, and an admin CRUD management dashboard.',
    tech: ['PHP', 'MySQL', 'React', 'Node.js'],
    repoUrl: 'https://github.com/Abrar2212/Home-Hunt'
  }
];

const categories = [
  { id: 'all', label: 'All (9)' },
  { id: 'fullstack', label: 'Web & 3D' },
  { id: 'backend', label: 'Backend & Systems' },
  { id: 'ai', label: 'AI & Robotics' }
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
            <span className="section-index">03 / Selected Work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Selected web applications, backend services, and academic research builds.
            </p>
          </div>
          <a
            href="https://github.com/Abrar2212?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <i className="fa-brands fa-github" aria-hidden="true" />
            <span>View All on GitHub</span>
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
          {filteredProjects.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-card-top">
                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      className="project-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>
                  )}
                  {project.repoUrl ? (
                    <a
                      className="project-link"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Source</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="project-status">Academic / Local</span>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle-text">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tech-list" aria-label={`${project.title} technologies`}>
                {project.tech.map((item) => (
                  <span key={item} className="project-tech-item">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
