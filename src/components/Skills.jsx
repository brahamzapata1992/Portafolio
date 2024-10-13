import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from '../context/ThemeContext';
import './Skills.css';

const skillsData = [
  { skill: 'HTML', percentage: 80 },
  { skill: 'JavaScript', percentage: 80 },
  { skill: 'CSS', percentage: 70 },
  { skill: 'REACT', percentage: 80 },
  { skill: 'Responsive', percentage: 75 },
  { skill: 'JAVA', percentage: 65 },
  { skill: 'POO', percentage: 80 },
  { skill: 'Spring Boot', percentage: 75 },
  { skill: 'SQL', percentage: 60 },
  { skill: 'Git', percentage: 85 },
  { skill: 'GitHub', percentage: 75 },
  { skill: 'Trello', percentage: 55 },
];

const Skills = () => {

    const { darkMode } = useTheme(); 

  return (
    <div className="skills-container">
      {skillsData.map((item, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-name">{item.skill}</div>
          <div className="skill-bar">
            <CircularProgressbar
              value={item.percentage}
              text={`${item.percentage}%`}
              styles={buildStyles({
                pathColor: `#FDA310`,
                textColor: darkMode ? '#FFF' : '#000',
                trailColor: '#e0e0e0',
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
