import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'App Design',
      color: '#FFB347',
      description: 'Mobile app design'
    },
    {
      title: 'Web Design',
      color: '#2D8B8B',
      description: 'Website interface'
    },
    {
      title: 'App Design',
      color: '#F4C430',
      description: 'Mobile application'
    }
  ];

  return (
    <section id="works" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">My Latest Works</h2>
          <a href="#" className="view-all-link">Explore More Works →</a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ backgroundColor: project.color }}>
              <div className="project-placeholder">
                <span className="project-icon">📱</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
