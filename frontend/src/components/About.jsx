import './About.css';

const About = () => {
  const services = [
    {
      icon: 'W',
      title: 'Website Design',
      count: '76 Projects',
      color: '#2D8B8B'
    },
    {
      icon: 'M',
      title: 'Mobile App Design',
      count: '63 Projects',
      color: '#F4C430'
    },
    {
      icon: 'B',
      title: 'Brand Identity',
      count: '47 Projects',
      color: '#FF6B6B'
    }
  ];

  return (
    <section id="services" className="about">
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
            <h2 className="section-title">What do I help?</h2>
            <p className="description-text">
              I will help you with finding a solution and solve your problems. We use process design to create digital products. Besides that also help their business.
            </p>
            <p className="description-text">
              We use process design to create digital products. Besides that also help their business.
            </p>
            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-number">285+</div>
                <div className="stat-label">Project Completed</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">190+</div>
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
