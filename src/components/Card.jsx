import React from "react";
import "./Card.css";

const Card = ({ title, github, live }) => {
  return (
    <div className="card">
      <div className="content_card">

        {/* BACK */}
        <div className="back">
          <div className="back-content">

            
            <strong>See Links</strong>

            <div className="card-links">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  GitHub
                </a>
              )}

              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Live
                </a>
              )}
            </div>

          </div>
        </div>

        {/* FRONT */}
        <div className="front">
          <div className="front-content">

            <small className="badge">Project</small>

            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{title}</strong>
                </p>
              </div>

              <p className="card-footer">
                React · Spring Boot · SQL
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
