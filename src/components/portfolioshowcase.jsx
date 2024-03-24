import React from 'react';
import './portfolioshowcase.css';
import FludertImage from './Fludert.jpg';

const projects = [
  {
    name: 'Fludert',
    image: FludertImage,
    githubLink: 'https://github.com/Dinath01/Fludert'
  },
  {
    name: 'Beskar',
    image: 'project2.jpg',
    githubLink: 'https://github.com/Dinath01/Beskar'
  },
  {
    name: 'Film Pope',
    image: 'project3.jpg',
    githubLink: 'https://github.com/Dinath01/web-cw2'
  },
  {
    name: 'Shopping Cart',
    image: 'project4.jpg',
    githubLink: 'https://github.com'
  }
];

const PortfolioShowcase = () => {
  const handleButtonClick = (githubLink) => {
    window.open(githubLink, '_blank');
  }
  return (
    <div className="portfolio-showcase">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.name} />
            <div className="project-details">
              <h3>{project.name}</h3>
              <button className='project-name-button' onClick={() => handleButtonClick(project.githubLink)}>
                View on Github
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioShowcase;
