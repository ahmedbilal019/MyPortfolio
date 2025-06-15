import React from "react";

function Hero() {
  return (
    <>
      <div className="home-container">
        {" "}
        <div className="container col-xxl-8 px-4 py-1 home-container ">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            {" "}
            <div className="col-10 col-sm-8 col-lg-6">
              {" "}
              <img
                src="/assets/profile-picture.png"
                className="d-block mx-lg-auto img-fluid profileImg"
                alt="Profile Image"
                width="500"
                height="300"
                loading="lazy"
              />{" "}
            </div>{" "}
            <div className="col-lg-6">
              {" "}
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                I am Ahmed Bilal
              </h1>{" "}
              <p className="lead">
                Computer Science graduate passionate about frontend development,
                skilled in HTML, CSS, JavaScript, and React. Dedicated to
                building responsive and user-friendly web applications.
                Motivated to contribute to a professional team and continuously
                enhance technical skills.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Hero;
