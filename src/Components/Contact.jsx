import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
  };
  return (
    <>
      <div className="contact-card">
        <div class="card" style={{ width: "32rem", height: "33rem" }}>
          <div class="card-body">
            <h5 class="card-title">Contact Me!</h5>

            <form action="" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </form>

            <ul class="list-group list-group-flush">
              <h6>Feel free to contact me through the following platforms:</h6>
              <li class="list-group-item">
                <span>
                  {" "}
                  <MdEmail className="img-fluid icons" size={25} />
                </span>{" "}
                ahmed258bilal@gmail.com
              </li>
              <li class="list-group-item">
                <span>
                  {" "}
                  <FaWhatsapp className="img-fluid me-2 icons" size={25} />
                </span>
                +923135251927
              </li>
              <li class="list-group-item">
                <span>
                  <a
                    href="https://linkedin.com/in/ahmad-bilal-1872222b3"
                    class="card-link"
                  >
                    <FaLinkedin className="img-fluid me-2 icons" size={20} />
                  </a>
                </span>
              </li>
              <li class="list-group-item">
                <span>
                  <a href="https://github.com/ahmedbilal019" class="card-link">
                    <FaGithub className="img-fluid icons" size={20} />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
