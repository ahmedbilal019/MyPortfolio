import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

function Education() {
  return (
    <>
      <div className="education-container">
        {" "}
        <div className="px-5 py-5 my-5 text-center">
          {" "}
          <FaGraduationCap
            size={72}
            className="mx-auto mb-4 text-blue-600 caplogo"
          />
          <h2 className="display-5 fw-bold text-body-emphasis">Education</h2>
          <h3 className="display-7 fw-bold text-body-emphasis">
            Bachelors in Computer Science
          </h3>{" "}
          <div className="col-lg-6 mx-auto about-Edu">
            {" "}
            <p className="lead mb-4">
              I have completed Bachelors in Computer Science at Comsats
              University Islamabad, Attock Campus from 2020-2024
            </p>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Education;
