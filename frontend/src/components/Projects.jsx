import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      color: '#2D8B8B',
      iconClass: 'fa-laptop-code',
      description: 'Full-stack portfolio built with React & Node.js',
      tech: 'JavaScript, React, Node.js',
      link: 'https://github.com/Abrar2212/Portfolio'
    },
    {
      title: 'Home Hunt',
      color: '#F4C430',
      iconClass: 'fa-database',
      description: 'Find your own home with us',
      tech: 'PHP, MySQL',
      link: 'https://github.com/Abrar2212/Project-Dbms'
    },
    {
      title: 'GitHub Profile',
      color: '#FFB347',
      iconClass: 'fa-github',
      description: 'Personal GitHub profile repository',
      tech: 'Markdown',
      link: 'https://github.com/Abrar2212/Abrar2212'
    }
  ];

  return (
    <section id="works" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">My Latest Works</h2>
          <a href="https://github.com/Abrar2212" target="_blank" rel="noopener noreferrer" className="view-all-link">
            View GitHub Profile →
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-accent" style={{ backgroundColor: project.color }} />
              <div className="project-body">
                <div className="project-top">
                  <div className="project-media">
                    <div className="project-icon-wrap">
                      <i className={`fa-solid ${project.iconClass}`} aria-hidden />
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>

                <div className="project-footer">
                  <div className="project-tech">{project.tech}</div>
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <i className="fa-brands fa-github" />
                    <span className="sr-only">Open</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
