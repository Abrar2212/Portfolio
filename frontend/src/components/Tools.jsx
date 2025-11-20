import React from 'react';
import './Skills.css';

const Tools = () => {
  const tools = [
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'TypeScript', icon: 'fa-solid fa-code' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Express', icon: 'fab fa-node-js' },
    { name: 'React', icon: 'fab fa-react' },

    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Spring Boot', icon: 'fa-solid fa-seedling' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
    { name: 'SQL', icon: 'fa-solid fa-database' }
  
  ];

  return (
    <section id="tools" className="skills tools-section">
      <div className="container">
        <h2 className="tools-title">Tools & Technologies</h2>
        <p className="tools-sub">Technologies I use frequently to build reliable backend systems and web apps.</p>
        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-chip" title={tool.name}>
              <i className={`${tool.icon} tool-icon`} aria-hidden="true"></i>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
