import React from 'react';
import './App.css';
import userPicture from './User.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="info">
        <h1>Dinith Nethmina Surendra</h1>
        <p>Undergraduate</p>
      </div>
      <div className="image">
        <img src={userPicture} alt="User" />
      </div>
    </div>
  );
};

export default Portfolio;
