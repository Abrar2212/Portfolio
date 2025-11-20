import './Skills.css';

const Skills = () => {
  const experience = [
    {
      title: 'Full Employed',
      company: 'Facebook Industry',
      period: 'Jun 2019 - Aug 2021',
      description: 'Lorem dimpson dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…'
    },
    {
      title: 'UX/UI Designer',
      company: 'Google Industry',
      period: 'Jun 2021 - Present',
      description: 'Lorem dimpson dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…'
    },
    {
      title: 'Sr. Product Designer',
      company: 'Global Solution',
      period: 'Jun 2019 - Aug 2021',
      description: 'Lorem dimpson dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…'
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
