import './Education.css';

const educationData = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'United International University (UIU), Dhaka',
    year: '2022 – Present',
    result: 'CGPA 3.50 / 4.00',
    description:
      'Coursework in Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, Web Programming, Computer Vision, and Final Year Design Project (FYDP).'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Nawab Siraj-Ud-Dowla Government College, Natore',
    year: '2018 – 2020',
    result: 'GPA 5.00 / 5.00'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Natore Govt. Boys High School',
    year: '2016 – 2018',
    result: 'GPA 5.00 / 5.00'
  }
];

const focusAreas = [
  {
    title: 'Final Year Design Project (FYDP)',
    detail: 'Calibrated non-visual confidence communication for assistive egocentric memory recall using Gemini VLMs and OpenCV.'
  },
  {
    title: 'Object-Oriented & Web Systems',
    detail: 'Academic and personal software built with Spring Boot 3 (Java 21), Next.js 16, NestJS, and TypeScript.'
  },
  {
    title: 'Database Systems',
    detail: 'Relational schema design, SQL queries, and ORM integration across PostgreSQL, MySQL, and Prisma.'
  },
  {
    title: 'Embedded & Vision Lab Work',
    detail: 'Sensor navigation and ArUco marker computer-vision control on Raspberry Pi 5 and Arduino Nano.'
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education-heading">
          <span className="section-index">04 / Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-layout">
          <div className="education-list">
            {educationData.map((item) => (
              <div key={item.degree} className="education-item">
                <div className="education-item-top">
                  <div>
                    <h3 className="education-degree">{item.degree}</h3>
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

          <aside className="focus-section" aria-label="Coursework and research focus">
            <h3 className="subsection-title">Coursework &amp; Research Focus</h3>
            <div className="focus-list">
              {focusAreas.map((area) => (
                <div key={area.title} className="focus-item">
                  <h4 className="focus-title">{area.title}</h4>
                  <p className="focus-detail">{area.detail}</p>
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
