import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
    year: '2024 - PRESENT',
    title: 'Software Engineering',
    company: 'Politecnico',
    description: 'As a Software Engineer, I am prepared to design, develop, and manage software projects, focusing on programming, algorithms, data structures, and software architecture. My training emphasizes project management and collaboration, enabling me to deliver high-quality, scalable software solutions that meet diverse user needs.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2023 - 2024',
    title: 'Ecommerce Project',
    company: 'Digital House',
    description: 'I created an e-commerce platform for renting musical instruments, encompassing the backend, database, and frontend, all optimized for mobile use. The platform features an intuitive user interface, enabling users to search for and rent items with ease and efficiency.',
    icon: <FaBriefcase />,
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Digital House',
    description: 'I am a full-stack developer with a passion for creating responsive web applications. I specialize in both frontend and backend technologies, including JavaScript, React, and Node.js, as well as SQL and NoSQL databases. My aim is to enhance user experience while maintaining the performance and security of every project. I thrive on continuous learning and actively seek out new challenges to further develop my skills.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2019 - 2021',
    title: 'English Course B2',
    company: 'ICT Georgia',
    description: 'As a student in an English course, I have significantly improved my communication skills, enabling me to speak the language fluently and confidently in both everyday and professional contexts. This course has been pivotal for my personal and career growth, providing me with essential tools to excel in my field.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2016 - 2017',
    title: 'Internship.',
    company: 'IMAL-Colombia',
    description: 'During my internship at a leading vehicle suspension manufacturing company, I actively contributed to the maintenance department. My responsibilities included designing parts and creating a Visual Basic program to analyze operator downtime as part of a SMED initiative. This hands-on experience not only honed my technical skills but also allowed me to engage in process optimization, ultimately enhancing the operational efficiency of the plant and supporting a culture of continuous improvement.',
    icon: <FaBriefcase />,
  },
  {
    year: '2010 - 2016',
    title: 'Mechanical Engineer.',
    company: 'U. Libre de Colombia',
    description: 'During my studies in Mechanical Engineering, I gained not only technical skills in design, maintenance, and automation of systems but also learned to approach industrial problems with an innovative and sustainable mindset. I trained to work effectively in diverse teams and adapt to a changing global environment, all while fostering a strong ethical and responsible commitment to the environment and society.',
    icon: <FaGraduationCap />,
  },
];

const Experience = () => {

    const { darkMode } = useTheme(); 

  return (
    <div className="experience-container">
      {experienceData.map((item, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-icon">{item.icon}</div>
          <div className="experience-details">
            <div className="experience-year">{item.year}</div>
            <div className="experience-title">
              {item.title} <span className="experience-company">- {item.company}</span>
            </div>
            <div className="experience-description">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
