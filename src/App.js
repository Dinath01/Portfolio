import React from 'react';
import backgroundImage from './bg.png';
import './App.css';

const Portfolio = () => {
  return (
    <div>
      <img className="background-image" src={backgroundImage} alt="Background" />
      <div className="portfolio-container">
        <div className="info">
          <h2>Hello,</h2>
          <h1>I'm Dinith Nethmina Surendra</h1>
          <p>Undergraduate</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
