import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

function Skills() {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        {" "}
        <h2 class="display-5 fw-bold text-body-emphasis">Skills</h2>
        <div class="col-lg-6 mx-auto skillsLogo">
          <figure>
            {" "}
            <FaHtml5 className="img-fluid" size={50} />
            <figcaption>HTML</figcaption>
          </figure>
          <figure>
            {" "}
            <FaCss3Alt className="img-fluid" size={50} />
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <TbBrandJavascript className="img-fluid" size={50} />
            <figcaption>JS</figcaption>
          </figure>
          <figure>
            {" "}
            <FaReact className="img-fluid" size={50} />
            <figcaption>REACT</figcaption>
          </figure>
        </div>{" "}
      </div>
    </>
  );
}

export default Skills;
