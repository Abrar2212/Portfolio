import './Education.css';

const educationData = [
  {
    degree: 'B.Sc. in Computer Science & Engineering (CSE)',
    institution: 'United International University (UIU), Dhaka',
    year: '2022 – Present',
    result: 'CGPA: 3.50 / 4.00',
    description:
      'Undergraduate coursework and lab projects in Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, Web Engineering, Computer Vision, and Final Year Design Project (FYDP).'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Nawab Siraj-Ud-Dowla Government College, Natore',
    year: '2018 – 2020',
    result: 'GPA: 5.00 / 5.00'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Natore Govt. Boys High School',
    year: '2016 – 2018',
    result: 'GPA: 5.00 / 5.00'
  }
];

const focusAreas = [
  {
    iconClass: 'fa-solid fa-eye',
    title: 'Final Year Design Project (FYDP)',
    detail: 'Calibrated non-visual confidence communication for assistive egocentric memory recall using Gemini VLMs & OpenCV.'
  },
  {
    iconClass: 'fa-solid fa-layer-group',
    title: 'Full-Stack & Object-Oriented Systems',
    detail: 'Hands-on academic and personal builds across Spring Boot 3 (Java 21), Next.js 16, NestJS, and TypeScript.'
  },
  {
    iconClass: 'fa-solid fa-database',
    title: 'Relational & Cloud Data Design',
    detail: 'Schema design, SQL query optimization, and ORM workflows with PostgreSQL, MySQL, Prisma, and Firestore.'
  },
  {
    iconClass: 'fa-solid fa-microchip',
    title: 'Embedded & Vision Lab Work',
    detail: 'Sensor-driven navigation and ArUco computer-vision integration on Raspberry Pi 5 and Arduino Nano.'
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education-heading">
          <span className="section-eyebrow">// 04 · Education</span>
          <h2 className="section-title">Academic Background &amp; Research Focus</h2>
          <p className="section-subtitle">
            Formal education and core computer science areas explored through university coursework and capstone research.
          </p>
        </div>

        <div className="education-layout">
          <div className="education-timeline">
            <h3 className="subsection-title">Academic Timeline</h3>
            <div className="education-list">
              {educationData.map((item) => (
                <div key={item.degree} className="education-item">
                  <div className="education-item-top">
                    <div>
                      <h4 className="education-degree">
                        <i className="fa-solid fa-graduation-cap edu-icon" aria-hidden="true" />
                        <span>{item.degree}</span>
                      </h4>
                      <p className="education-institution">{item.institution}</p>
                    </div>
                    <span className="education-year">{item.year}</span>
                  </div>
                  {item.result && <p className="education-result">{item.result}</p>}
                  {item.description && (
                    <p className="education-description">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className="focus-section" aria-label="Academic focus areas">
            <h3 className="subsection-title">Coursework &amp; Capstone Focus</h3>
            <div className="focus-grid">
              {focusAreas.map((area) => (
                <div key={area.title} className="focus-card">
                  <div className="focus-icon" aria-hidden="true">
                    <i className={area.iconClass} />
                  </div>
                  <div>
                    <h4 className="focus-title">{area.title}</h4>
                    <p className="focus-detail">{area.detail}</p>
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
