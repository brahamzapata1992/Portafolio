import React from "react";
import "./Card.css";

const Card = ({
  title,
  badge = "Project",
  github,
  live,
  tech = [],
  description = "",
  frontImage,
  backImage,
}) => {
  return (
    <div className="card">
      <div className="content_card">
        {/* FRONT (visible al cargar) */}
        <div className="front">
          <div
            className="front-bg"
            style={{ backgroundImage: `url(${frontImage})` }}
          />

          <div className="front-content">
            <small className="badge">{badge}</small>

            <div className="front-bottom">
              <h3 className="card-title">
                <strong>{title}</strong>
              </h3>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="back">
          <div className="back-content">
            <div className="back-thumb">
              <img src={backImage} alt={`${title} preview`} />
            </div>

            <div className="back-text">
              <h4 className="back-title">{title}</h4>

              {description && <p className="back-desc">{description}</p>}

              {tech?.length > 0 && (
                <>
                  <p className="back-subtitle">Technologies:</p>
                  <div className="tech-row">
                    {tech.map((t) => (
                      <span key={t} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

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
                    className="card-link card-link--accent"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* END */}
      </div>
    </div>
  );
};

export default Card;
