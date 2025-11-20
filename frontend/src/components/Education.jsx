import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'United International University',
      year: '2022 - Present',
      result: 'CGPA: 3.50/4.00',
      description: 'Currently pursuing degree focused on software engineering, database systems, and web development.'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Nawab Siraj-Ud-Dowla Government College, Natore',
      year: '2018 - 2020',
      result: 'GPA: 5.00/5.00',
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Natore GOVT. Boys High School',
      year: '2016 - 2018',
      result: 'GPA: 5.00/5.00',
    }
  ];

  const achievements = [
    {
      iconClass: 'fa-award',
      title: 'IDF Certified Professional',
      description: 'UI/UX Designer Certification',
      year: '2024'
    },
    {
      iconClass: 'fa-trophy',
      title: 'Best Project Award',
      description: 'Database Management System Project',
      year: '2024'
    },
    {
      iconClass: 'fa-rocket',
      title: 'Hackathon Winner',
      description: 'Full Stack Development Competition',
      year: '2023'
    },
    {
      iconClass: 'fa-graduation-cap',
      title: 'Academic Excellence',
      description: 'Top performer in Computer Science',
      year: '2023'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Achievements</h2>

        <div className="education-content">
          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-list">
              {educationData.map((item, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <div>
                      <h4 className="education-degree"><i className="fa-solid fa-graduation-cap edu-icon" aria-hidden></i> {item.degree}</h4>
                      <p className="education-institution">{item.institution}</p>
                      {item.result && <p className="education-result">{item.result}</p>}
                    </div>
                    <span className="education-year">{item.year}</span>
                  </div>
                  <p className="education-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
          <div>
          <aside className="achievements-section">
            <h3 className="subsection-title">Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon" aria-hidden>
                    <i className={`fa-solid ${achievement.iconClass}`} />
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
        </div>
    
    </section>
  );
};

export default Education;
