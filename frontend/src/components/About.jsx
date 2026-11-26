import './About.css';

const domains = [
  {
    title: 'Full-Stack & 3D Web',
    summary: 'React 19 and Next.js 16 applications, interactive Three.js 3D previews, procedural STL generation, and WordPress plugin integration.'
  },
  {
    title: 'Backend & API Design',
    summary: 'Structured REST services using Spring Boot 3 (Java 21), NestJS, Node.js, and Express with JWT and OAuth 2.0 authentication.'
  },
  {
    title: 'Databases & Cloud Media',
    summary: 'Relational and document schema design across PostgreSQL, MySQL, MongoDB, Prisma ORM, Firebase Firestore, and Cloudinary.'
  },
  {
    title: 'Applied AI & Robotics',
    summary: 'Multimodal vision pipelines with Google Gemini API and OpenCV, source-grounded AI research tools, and Raspberry Pi + Arduino robotics.'
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-left">
            <span className="section-index">01 / About</span>
            <h2 className="section-title">Practical engineering from schema to interface.</h2>
            <p className="description-text">
              I am an undergraduate studying Computer Science &amp; Engineering at United
              International University (UIU) in Dhaka. My work focuses on building clean,
              maintainable software across modern TypeScript and Java stacks.
            </p>
            <p className="description-text">
              Recently, I have built on-demand 3D customization tools with Next.js and Three.js, a
              gamified learning and code-practice platform on Spring Boot and React, peer-to-peer
              skill-sharing software, and full-stack inventory dashboards.
            </p>
            <p className="description-text">
              For my Final Year Design Project (FYDP), I am developing a calibrated non-visual
              confidence communication pipeline for egocentric memory recall using Google Gemini
              Vision-Language Models and OpenCV.
            </p>
          </div>

          <div className="about-domains">
            {domains.map((domain, idx) => (
              <div key={domain.title} className="domain-card">
                <span className="domain-num">0{idx + 1}</span>
                <div>
                  <h3 className="domain-title">{domain.title}</h3>
                  <p className="domain-summary">{domain.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
