import React from "react";
import "./Projects.css";
import { useTheme } from "../context/ThemeContext";
import Card from "../components/Card";

// Imágenes (por ahora las mismas para todas, luego cambias)
import musicFront from "../assets/projects/music-front.png";
import musicBack from "../assets/projects/music-back.png";
import dentalFront from "../assets/projects/consultorio_front.png";
import dentalBack from "../assets/projects/consultorio_back.png";

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Dental Clinic App",
      badge: "BackEnd",
      github: "https://github.com/brahamzapata1992/Clinica_Odontologica_BackEnd",
      live: "https://clinicaodontologicabackend-production.up.railway.app/",
      description:
        "A dental clinic management system with patient records and appointment scheduling.",
      tech: ["Java", "SQL", "Spring Boot"],
      frontImage: dentalFront, 
      backImage: dentalBack,   
    },
    {
      id: 2,
      title: "Music Rent E-commerce",
      badge: "Full Stack",
      github: "https://github.com/tu-user/music-rent",
      live: "",
      description:
        "A music instrument rental e-commerce platform with search, categories, and rental dates.",
      tech: ["React", "Java", "SQL"],
      frontImage: musicFront,
      backImage: musicBack,
    },
  ];

  return (
    <section className={`principal_contenedor_all ${darkMode ? "dark-mode" : ""}`}>
      <div className="contenedor_projects_principal_text">
        <h1 className="about_text_title">
          MY <span className="projects_letra_me">PORTFOLIO</span>
        </h1>
      </div>

      <h2 className="text_about_title_personal">PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            badge={p.badge}
            github={p.github}
            live={p.live}
            description={p.description}
            tech={p.tech}
            frontImage={p.frontImage}
            backImage={p.backImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

