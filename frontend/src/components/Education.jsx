import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc. in Computer Science & Engineering (CSE)',
      institution: 'United International University (UIU), Dhaka',
      year: '2022 - Present',
      result: 'CGPA: 3.50/4.00',
      description:
        'Focused on full-stack software engineering, enterprise object-oriented architecture, database systems, computer vision, and assistive multimodal AI research (FYDP).'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Nawab Siraj-Ud-Dowla Government College, Natore',
      year: '2018 - 2020',
      result: 'GPA: 5.00/5.00'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Natore Govt. Boys High School',
      year: '2016 - 2018',
      result: 'GPA: 5.00/5.00'
    }
  ];

  const achievements = [
    {
      iconClass: 'fa-brain',
      title: 'FYDP AI & Vision Research',
      description: 'Calibrated Non-Visual Confidence Recall for Blind & Low-Vision Users',
      year: '2026'
    },
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
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education &amp; Achievements</h2>

        <div className="education-content">
          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-list">
              {educationData.map((item) => (
                <div key={item.degree} className="education-item">
                  <div className="education-header">
                    <div>
                      <h4 className="education-degree">
                        <i className="fa-solid fa-graduation-cap edu-icon" aria-hidden="true" />
                        {item.degree}
                      </h4>
                      <p className="education-institution">{item.institution}</p>
                      {item.result && <p className="education-result">{item.result}</p>}
                    </div>
                    <span className="education-year">{item.year}</span>
                  </div>
                  {item.description && (
                    <p className="education-description">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className="achievements-section">
            <h3 className="subsection-title">Highlights &amp; Recognition</h3>
            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="achievement-card">
                  <div className="achievement-icon" aria-hidden="true">
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
