import React from "react";
import "./Projects.css";
import { useTheme } from "../context/ThemeContext";
import Card from "../components/Card";

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Dental Clinic App",
      github: "https://github.com/tu-user/dental-clinic",
      live: "https://tu-deploy.com",
    },
    {
      id: 2,
      title: "Music Rent E-commerce",
      github: "https://github.com/tu-user/music-rent",
      live: "",
    },
    // Agrega más proyectos aquí...
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
            github={p.github}
            live={p.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
