import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!visible && isElementInViewport()) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  const isElementInViewport = () => {
    const element = document.querySelector('.skills-container');
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  return (
    <div className="skills-container">
      <div className="skills-description">
        <h2>Skills</h2>
        <p>
          Here is a brief description about my skills. I'm proficient in various technologies and tools.
          Below you can see the percentage of proficiency for each skill.
        </p>
      </div>
      <div className="skills-bars">
        <div className="skill">
          <div className="skill-name">HTML</div>
          <div className="skill-bar">
            <div className={`skill-fill ${visible ? 'animate' : ''}`} style={{ width: '90%' }}></div>
            {/*<div className="skill-level">90%</div>*/}
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Java</div>
          <div className="skill-bar">
            <div className={`skill-fill ${visible ? 'animate' : ''}`} style={{ width: '80%' }}></div>
            {/*<div className="skill-level">80%</div>*/}
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Flutter</div>
          <div className="skill-bar">
            <div className={`skill-fill ${visible ? 'animate' : ''}`} style={{ width: '80%' }}></div>
            {/*<div className="skill-level">80%</div>*/}
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Python</div>
          <div className="skill-bar">
            <div className={`skill-fill ${visible ? 'animate' : ''}`} style={{ width: '70%' }}></div>
            {/*<div className="skill-level">80%</div>*/}
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">React.js</div>
          <div className="skill-bar">
            <div className={`skill-fill ${visible ? 'animate' : ''}`} style={{ width: '60%' }}></div>
            {/*<div className="skill-level">80%</div>*/}
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">MongoDB</div>
          <div className="skill-bar">
            <div className={`skill-fill ${visible ? 'animate' : ''}`} style={{ width: '60%' }}></div>
            {/*<div className="skill-level">80%</div>*/}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
