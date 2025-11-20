import './Skills.css';

const Skills = () => {
  const experience = [
    {
      title: 'Senior Developer',
      company: 'Sinapsis IT',
      period: 'Nov 2025 - Present',
      description: 'Leading full stack development projects, architecting scalable web applications, and mentoring junior developers in modern web technologies.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Twincle Company',
      period: 'Jan 2025 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and Express. Collaborated with cross-functional teams to deliver high-quality solutions.'
    }
  ];

  return (
    <section id="experience" className="skills">
      <div className="container">
        <h2 className="section-title">My Work Experience</h2>
        <p className="section-subtitle">Companies I have worked with before</p>
        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-icon">💼</div>
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
