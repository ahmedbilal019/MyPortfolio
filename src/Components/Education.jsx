import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

function Education() {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        {" "}
        <FaGraduationCap size={72} className="mx-auto mb-4 text-blue-600" />
        <h2 class="display-5 fw-bold text-body-emphasis">Education</h2>
        <h3 class="display-7 fw-bold text-body-emphasis">
          Bachelors in Computer Science
        </h3>{" "}
        <div class="col-lg-6 mx-auto">
          {" "}
          <p class="lead mb-4">
            I have completed Bachelors in Computer Science at Comsats University
            Islamabad, Attock Campus from 2020-2024
          </p>{" "}
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>{" "}
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Education;
