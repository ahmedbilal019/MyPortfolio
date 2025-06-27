import React from "react";

function Projects({ project }) {
  return (
    <>
      <div className="project-card">
        <div className="card" style={{ width: "18rem", height: "22rem" }}>
          <img src={project.image} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.link} target="blank" className="btn btn-primary">
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
