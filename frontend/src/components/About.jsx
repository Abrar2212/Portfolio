import './About.css';

const domains = [
  {
    iconClass: 'fa-solid fa-cubes',
    title: 'Full-Stack & 3D Web',
    summary: 'Interactive React 19 & Next.js 16 web apps, Three.js 3D previews, procedural STL export, and WordPress plugin integration.',
    accent: '#2563EB'
  },
  {
    iconClass: 'fa-solid fa-server',
    title: 'Backend & REST APIs',
    summary: 'Structured backend services using Spring Boot 3 (Java 21), NestJS, Node.js, and Express with JWT & OAuth 2.0 authentication.',
    accent: '#0891B2'
  },
  {
    iconClass: 'fa-solid fa-database',
    title: 'Databases & Cloud Storage',
    summary: 'Relational and document data modeling with PostgreSQL, MySQL, MongoDB, Prisma ORM, Firebase Firestore, and Cloudinary.',
    accent: '#7C3AED'
  },
  {
    iconClass: 'fa-solid fa-microchip',
    title: 'Applied AI, Vision & Robotics',
    summary: 'Vision-language pipelines with Google Gemini API & OpenCV, AI research agents, and Raspberry Pi + Arduino robotics.',
    accent: '#10B981'
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <span className="section-eyebrow">// 01 · About Me</span>
          <h2 className="section-title">Focused on Clean Architecture &amp; Practical Problem Solving</h2>
        </div>

        <div className="about-content">
          <div className="about-narrative">
            <p className="description-text">
              I&apos;m <strong>Abrar Junaed</strong>, an undergraduate studying{' '}
              <strong>Computer Science &amp; Engineering at United International University (UIU)</strong>{' '}
              in Dhaka, Bangladesh. I enjoy turning complex ideas into well-structured, maintainable
              software across both frontend and backend stacks.
            </p>
            <p className="description-text">
              My recent projects span custom <strong>3D web customization platforms</strong> with{' '}
              <strong>Next.js 16 and Three.js</strong>, gamified learning systems built on{' '}
              <strong>Spring Boot 3 and React</strong>, peer-to-peer skill exchange communities, and
              full-stack inventory management dashboards.
            </p>
            <p className="description-text">
              Alongside web engineering, my Final Year Design Project (FYDP) explores{' '}
              <strong>Calibrated Non-Visual Confidence Communication</strong> for assistive smart-glass
              memory recall using <strong>Google Gemini Vision-Language Models</strong> and{' '}
              <strong>OpenCV</strong>, complemented by hands-on hardware integration with{' '}
              <strong>Raspberry Pi 5 and Arduino</strong>.
            </p>
          </div>

          <div className="about-domains-grid">
            {domains.map((domain) => (
              <div key={domain.title} className="domain-bento-card">
                <div
                  className="domain-icon"
                  style={{ backgroundColor: `${domain.accent}18`, color: domain.accent }}
                >
                  <i className={domain.iconClass} aria-hidden="true" />
                </div>
                <h3 className="domain-title">{domain.title}</h3>
                <p className="domain-summary">{domain.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
