import React, { useState } from 'react';
import backgroundImage from './bg.png';
import './App.css';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <div>
      <img className="background-image" src={backgroundImage} alt="Background" />
      <div className="navbar">
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {menuOpen && (
          <div className="menu-links">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Me</a>
          </div>
        )}
      </div>
      <div className="portfolio-container">
        <div className="info">
          <h2>Hello,</h2>
          <h1>I'm Dinith Nethmina Surendra</h1>
          <p>Undergraduate</p>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="about-me-container">
        <h2>About Me</h2>
        <div className="about-me-content">
          <p><strong>Software Engineer</strong> Based on Colombo</p>
          <p><strong>Description:</strong> A dedicated and commited student Who has dived into the depth of software engineering along with a personality Which perfectly compatible for team work packed with another set of skills of graphic designing where rm driven with mere passion to expose aestheticaly pleasing designs.</p>
          <div className="about-me-list">
            <div>
              <h3>Personal Information</h3>
              <ul>
                <li>Birthday: August 9, 2001</li>
                <li>Age: 22</li>
                <li>Residence: Matara, SriLanka</li>
                <li>Address: Mount Lavinia, Colombo</li>
              </ul>
            </div>
            <div>
              <h3>Contact Information</h3>
              <ul>
                <li>Email: dinithnethmina101@gmail.com</li>
                <li>Phone: +71 625 4427</li> 
                <li>Skype: id</li>
                <li>Freelance: Available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
