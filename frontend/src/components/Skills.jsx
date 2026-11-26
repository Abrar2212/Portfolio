import './Skills.css';

const Skills = () => {
  const experience = [
    {
      title: 'Senior Developer',
      company: 'SinapsisIT',
      period: 'Nov 2025 - Present',
      description:
        'Leading full-stack architecture across TypeScript, Next.js, React, and scalable SQL/ORM backends, optimizing API latency, and mentoring developers in modern engineering workflows.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Twincle Company',
      period: 'Jan 2025 - Present',
      description:
        'Designed and shipped full-stack web applications using React, Node.js, Express, and relational/NoSQL databases, collaborating across product and engineering teams to deliver reliable releases.'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Work Experience</h2>
        <p className="section-subtitle">Professional teams and engineering roles</p>
        <div className="experience-list">
          {experience.map((exp) => (
            <div key={exp.company} className="experience-card">
              <div className="experience-icon" aria-hidden="true">💼</div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
