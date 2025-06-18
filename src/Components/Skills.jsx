import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";

function Skills() {
  return (
    <>
      <div className="skills-container">
        <div className="px-4 py-5 my-5 text-center ">
          {" "}
          <h2 className="display-5 fw-bold text-body-emphasis">Skills</h2>
          <div className="col-lg-6 mx-auto">
            <div className="skillsLogos">
              <figure>
                {" "}
                <FaHtml5 className="img-fluid" size={80} />
                <figcaption>HTML</figcaption>
              </figure>
              <figure>
                {" "}
                <FaCss3Alt className="img-fluid" size={80} />
                <figcaption>CSS</figcaption>
              </figure>
              <figure>
                <TbBrandJavascript className="img-fluid" size={80} />
                <figcaption>JS</figcaption>
              </figure>
              <figure>
                {" "}
                <FaBootstrap className="img-fluid" size={80} />
                <figcaption>Bootstrap</figcaption>
              </figure>
              <figure>
                {" "}
                <FaReact className="img-fluid" size={80} />
                <figcaption>REACT</figcaption>
              </figure>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Skills;
