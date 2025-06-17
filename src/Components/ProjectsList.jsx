import React from "react";
import Projects from "./Projects";

function ProjectsList({ Projects_array }) {
  console.log(Projects_array);

  return (
    <>
      <div className="project-list-container">
        <h2 className="display-5 fw-bold text-body-emphasis">Projects</h2>
      </div>
      <div className="project-list">
        <br />
        {Projects_array.map((project) => {
          return <Projects key={project.id} project={project} />;
        })}
      </div>
    </>
  );
}

export default ProjectsList;
