import React from "react";

function Hero() {
  return (
    <>
      <section>
        {" "}
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            {" "}
            <div className="col-10 col-sm-8 col-lg-6">
              {" "}
              <img
                src="src\assets\profile-picture.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Profile Image"
                width="700"
                height="500"
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
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {" "}
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Primary
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Default
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </section>
    </>
  );
}

export default Hero;
