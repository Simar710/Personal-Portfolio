import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import '../pages/projects.css';

const ProjectCard = ({ id, title, description, slides, githubLink }) => {
  return (
    <div className="project-card">
    <div className="project-slideshow" style={{ overflow: "hidden" }}>
      <div className="project-slides" id={id}>
        {slides.map((slide, index) => (
          <div className="project-slide" key={index}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
        <div className="dots-container">
          {slides.map((_, index) => (
            <span className="dot" key={index}></span>
          ))}
        </div>
      </div>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  </div>
  );
};

export default ProjectCard;
