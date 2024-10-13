import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
    year: '2024 - PRESENT',
    title: 'Software Engineering',
    company: 'Politecnico',
    description: 'As a Software Engineer, I will be equipped to design, develop, and manage software projects, mastering key areas like programming, algorithms, data structures, and software architecture. My skills will also cover project management and teamwork, preparing me to create high-quality, scalable software solutions.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2023 - 2024',
    title: 'Ecommerce Project',
    company: 'Digital House',
    description: 'I developed an e-commerce platform for renting musical instruments, which includes the backend, database, and frontend, all optimized for mobile devices. The site offers an intuitive user experience, allowing users to efficiently search for and rent items.',
    icon: <FaBriefcase />,
  },
  {
    year: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'Digital House',
    description: 'I am a full stack developer experienced in creating responsive web applications. I work with both frontend and backend technologies, such as JavaScript, React, and Node.js, as well as SQL and NoSQL databases. My focus is on optimizing user experience while ensuring the performance and security of projects. I constantly seek to improve my skills and tackle new challenges.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2019 - 2021',
    title: 'English Course B2',
    company: 'ICT Georgia',
    description: 'As an English course student, I have enhanced my communication skills, allowing me to use the language fluently and confidently in everyday and professional situations. This course has been essential for my personal and career development, equipping me with the necessary tools to advance in my field.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2016 - 2017',
    title: 'Internship.',
    company: 'IMAL-Colombia',
    description: 'During my internship at a leading suspension manufacturing company for vehicles, I played a key role in the maintenance area. I was responsible for designing parts and developed a Visual Basic program to analyze operators downtime as part of a SMED project. This experience allowed me to apply my technical skills and contribute to process optimization, improving the operational efficiency of the plant.',
    icon: <FaBriefcase />,
  },
  {
    year: '2010 - 2016',
    title: 'Mechanical Engineer.',
    company: 'U. Libre de Colombia',
    description: 'During my studies in Mechanical Engineering, I developed skills in designing, maintaining, and automating systems with a focus on sustainability. I learned to apply scientific and technological knowledge to solve industrial problems and contribute to innovation while effectively collaborating in diverse teams and adapting to a globalized and ever-changing environment.',
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
