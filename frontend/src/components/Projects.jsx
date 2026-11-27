import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import './Projects.css';

const projectsData = [
  {
    title: 'PrintX3D',
    subtitle: '3D Keychain Customizer & Order Platform',
    category: 'fullstack',
    description:
      'Custom 3D keychain ordering web app where customers type multi-line text, pick fonts and dual-filament colors with a live Three.js preview, while staff download print-ready procedural STL files. Includes an embeddable WordPress customizer plugin.',
    highlights: [
      'Up to 3 lines of text with font, text colour and base colour on a live 3D preview',
      'Cash-on-delivery checkout with an order code customers use to track their order',
      'Staff order queue with status updates and print-ready STL downloads',
      'Admin control over filament colours and keychain settings'
    ],
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
    highlights: [
      'Courses, lessons and quizzes with an in-browser Monaco code editor',
      'XP, coins, levels, badges and leaderboards',
      'Community Q&A forums and peer challenges',
      'JWT and Google OAuth2 sign-in with email password reset'
    ],
    tech: ['Spring Boot 3', 'Java 21', 'React', 'TypeScript', 'Monaco Editor', 'MySQL'],
    repoUrl: 'https://github.com/Abrar2212/LearnMatrix'
  },
  {
    title: 'Skill Binimoy',
    subtitle: 'Peer-to-Peer Skill Exchange Marketplace',
    category: 'fullstack',
    description:
      'Community skill-barter platform where members exchange teaching and learning proposals without tuition fees, featuring 1-on-1 Jitsi video sessions, real-time messaging, and an AI study assistant.',
    highlights: [
      'Peer marketplace to search members by skill and propose exchanges',
      'Two-way exchange request hub with live status',
      '1-on-1 Jitsi video sessions with peer ratings and reviews',
      'Messaging plus an embedded AI learning assistant'
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'GSAP'],
    repoUrl: 'https://github.com/Abrar2212/Skill_Binimoy'
  },
  {
    title: 'Starry-Wrap',
    subtitle: 'Inventory & Product Management Dashboard',
    category: 'backend',
    description:
      'Full-stack inventory and catalog dashboard featuring optimistic UI updates, concurrent Cloudinary multi-image uploads, stock tracking, HTTP-only cookie JWT authentication, and email OTP verification.',
    highlights: [
      'JWT auth in HTTP-only cookies with 6-digit email OTP verification',
      'Parallel Cloudinary uploads, up to 10 photos per product',
      'Optimistic UI for instant stock and image updates',
      'Stock levels, low-stock thresholds, pricing and categories'
    ],
    tech: ['React 19', 'TypeScript', 'Express 5', 'PostgreSQL', 'Cloudinary', 'JWT'],
    liveUrl: 'https://starry-wrap-client.onrender.com/',
    repoUrl: 'https://github.com/Abrar2212/Starry-Wrap'
  },
  {
    title: 'Non-Visual Confidence Recall',
    subtitle: 'Assistive Episodic Memory AI (FYDP)',
    category: 'ai',
    description:
      'Final Year Design Project developing calibrated non-visual confidence communication for blind and low-vision smart-glass users via temporal video segmentation, semantic indexing, and Google Gemini VLMs.',
    highlights: [
      'Temporal video segmentation and keyframe extraction',
      'Semantic indexing and top-K retrieval of memory segments',
      'Gemini 2.5 Flash answers questions over retrieved keyframes',
      'Ground-truth evaluation logs and result plots'
    ],
    tech: ['Python', 'Google Gemini VLM', 'OpenCV', 'Scikit-Learn']
  },
  {
    title: 'Autonomous Service Robot',
    subtitle: 'Vision-Guided Table Delivery Robot',
    category: 'ai',
    description:
      'Hardware-software restaurant delivery robot combining a Raspberry Pi 5 camera module (OpenCV ArUco marker table recognition) with an Arduino Nano IR-sensor line-following motor controller.',
    highlights: [
      'Raspberry Pi 5 camera reads ArUco markers to identify tables',
      'Arduino Nano follows lines with IR sensors and drives the motors',
      'Vision and motor control split across the two boards'
    ],
    tech: ['C++', 'Python', 'OpenCV', 'Raspberry Pi 5', 'Arduino Nano'],
    repoUrl: 'https://github.com/Abrar2212/Autonomous-Restaurant-Service-Robot'
  },
  {
    title: 'Scholarship Scout',
    subtitle: 'AI University & Scholarship Research Tool',
    category: 'ai',
    description:
      'Web application that inspects official university and scholarship pages, checks eligibility requirements against a saved student profile with source links, and prepares user-reviewed Gmail drafts.',
    highlights: [
      'Google sign-in and a saved study profile',
      'Researches official university and scholarship pages, with source links',
      'Explains each match, separating confirmed eligibility from a possible fit',
      'Saves reviewed emails as Gmail drafts and never sends automatically'
    ],
    tech: ['Next.js 16', 'Gemini API', 'Prisma', 'PostgreSQL', 'NextAuth', 'Gmail API']
  },
  {
    title: 'Qasar',
    subtitle: 'Modular E-Commerce Storefront & API',
    category: 'backend',
    description:
      'Perfume e-commerce platform structured as a modular NestJS backend (Auth, Products, Inventory, Cart, Orders, Payments, and Admin) paired with a React 19 + TypeScript storefront.',
    highlights: [
      'NestJS modules for Auth, Products, Inventory, Cart, Orders, Payments and Admin',
      'Prisma and PostgreSQL with JWT access and refresh tokens',
      'React + TypeScript storefront with GSAP animations'
    ],
    tech: ['NestJS', 'React 19', 'TypeScript', 'PostgreSQL', 'GSAP']
  },
  {
    title: 'Home Hunt',
    subtitle: 'Real Estate & House Rental Web App',
    category: 'fullstack',
    description:
      'Property search and rental listing web application supporting user authentication, multi-criteria property filters, and an admin CRUD management dashboard.',
    highlights: [
      'User sign-up and login',
      'Property search with multi-criteria filters',
      'Admin dashboard to create, edit and delete listings'
    ],
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

const ProjectLinks = ({ project }) => (
  <>
    {project.liveUrl && (
      <a className="project-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <span>Live</span>
        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
      </a>
    )}
    {project.repoUrl ? (
      <a className="project-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
        <span>Source</span>
        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
      </a>
    ) : (
      <span className="project-status">Academic / Local</span>
    )}
  </>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  // Render content before showModal so focus lands on the close button.
  // `selected` is never cleared, so content stays visible during the close animation.
  const openProject = (project) => {
    flushSync(() => setSelected(project));
    dialogRef.current.showModal();
  };

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
                  <ProjectLinks project={project} />
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">
                  {/* ::after stretches this button over the whole card */}
                  <button type="button" className="project-open" onClick={() => openProject(project)}>
                    {project.title}
                  </button>
                </h3>
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

      <dialog
        ref={dialogRef}
        className="project-modal"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
      >
        {selected && (
          <div className="project-modal-body">
            <button
              type="button"
              className="project-modal-close"
              aria-label="Close"
              onClick={() => dialogRef.current.close()}
            >
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
            <h3 id="project-modal-title" className="project-title">{selected.title}</h3>
            <p className="project-subtitle-text">{selected.subtitle}</p>
            <p className="project-description">{selected.description}</p>
            <ul className="project-highlights">
              {selected.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-tech-list">
              {selected.tech.map((item) => (
                <span key={item} className="project-tech-item">
                  {item}
                </span>
              ))}
            </div>
            <div className="project-links">
              <ProjectLinks project={selected} />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};

export default Projects;
