import React from "react";

function Hero({ selectedTab, setSelectedTab }) {
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
                src="/profileImg.png"
                className="d-block mx-lg-auto img-fluid profileImg"
                alt="Profile Image"
                width="500"
                height="200"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 about-section">
              <h1 className="myname display-5 fw-bold text-body-emphasis lh-1 mb-3  ">
                I am Ahmed Bilal
              </h1>
              <p className="lead aboutme">
                Computer Science graduate passionate about{" "}
                <strong>frontend development</strong> , skilled in HTML, CSS,
                JavaScript, and React. Dedicated to building responsive and
                user-friendly web applications. Motivated to contribute to a
                professional team and continuously enhance technical skills.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 btn-goToProjects"
                >
                  <a href="https://drive.google.com/drive/folders/1MG1niPXRT9_I3fl8pjnxrYSTLK4z_PKN">
                    Download CV
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 btn-goToProjects"
                >
                  <a href="https://github.com/ahmedbilal019">GitHub Repo</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
