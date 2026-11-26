import './About.css';

const About = () => {
  const services = [
    {
      iconClass: 'fa-solid fa-cubes',
      title: 'Full-Stack & 3D Web Systems',
      count: 'Next.js 16 · React 19 · Three.js / STL',
      color: '#14b8a6'
    },
    {
      iconClass: 'fa-solid fa-server',
      title: 'Backend & API Architecture',
      count: 'Spring Boot 3 · NestJS · Express 5',
      color: '#6366f1'
    },
    {
      iconClass: 'fa-solid fa-database',
      title: 'Databases, ORM & Cloud',
      count: 'PostgreSQL · Prisma · MySQL · Firebase',
      color: '#f59e0b'
    },
    {
      iconClass: 'fa-solid fa-brain',
      title: 'Applied AI, Vision & Robotics',
      count: 'Gemini VLMs · OpenCV · Raspberry Pi 5',
      color: '#ec4899'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-services">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon" style={{ backgroundColor: service.color }}>
                  <i className={service.iconClass} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-count">{service.count}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-description">
            <h2 className="section-title">Engineering Clean, Scalable &amp; Intelligent Systems</h2>
            <p className="description-text">
              I&apos;m <strong>Abrar Junaed</strong>, a Computer Science &amp; Engineering undergraduate at{' '}
              <strong>United International University (UIU)</strong> focused on building resilient,
              end-to-end software products from relational database schemas to zero-latency user interfaces.
            </p>
            <p className="description-text">
              Across the stack, I build interactive 3D web studios and e-commerce platforms with{' '}
              <strong>TypeScript, Next.js 16, React 19, and Three.js (R3F)</strong>, alongside secure,
              modular backends powered by <strong>Spring Boot 3 (Java 21), NestJS, Node.js, Express 5, Prisma, and PostgreSQL</strong>.
            </p>
            <p className="description-text">
              Beyond web engineering, my current Final Year Design Project (FYDP) researches{' '}
              <strong>Calibrated Non-Visual Confidence Communication</strong> for assistive smart-glass memory
              recall using <strong>Google Gemini Vision-Language Models</strong> and <strong>OpenCV</strong>,
              complemented by hands-on work in multi-agent AI pipelines and vision-guided robotics.
            </p>

            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-number">9+</div>
                <div className="stat-label">Full-Stack &amp; AI Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">5</div>
                <div className="stat-label">Engineering Domains</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">&lt;60ms</div>
                <div className="stat-label">API &amp; Optimistic UX Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
