import './About.css';

const About = () => {
  const services = [
    {
      icon: '⚛️',
      title: 'Frontend Development',
      count: '5 Projects',
      color: '#2D8B8B'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      count: '6 Projects',
      color: '#F4C430'
    },
    {
      icon: '🚀',
      title: 'Full Stack Solutions',
      count: '1 Projects',
      color: '#FF6B6B'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-services">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ backgroundColor: service.color }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-count">{service.count}</p>
              </div>
            ))}
          </div>
          <div className="about-description">
            <h2 className="section-title">Full Stack Developer Extraordinaire</h2>
            <p className="description-text">
              As a seasoned <strong>Full Stack Developer</strong>, I craft exceptional digital experiences from frontend to backend. I specialize in building robust, scalable applications that seamlessly integrate beautiful user interfaces with powerful server-side architecture.
            </p>
            <p className="description-text">
              My expertise spans modern frontend frameworks like <strong>React</strong> and <strong>Vue.js</strong>, coupled with backend mastery in <strong>Node.js</strong>, <strong>Express</strong>, and database technologies. I architect complete solutions that not only look stunning but perform flawlessly under any load.
            </p>
            <p className="description-text">
              Whether it's crafting pixel-perfect responsive designs, optimizing API performance, or implementing complex business logic, I deliver end-to-end solutions that exceed expectations and drive business growth.
            </p>
            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-number">2+</div>
                <div className="stat-label">Project Completed</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">0+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
