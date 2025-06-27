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
        <div className="card" style={{ width: "32rem", height: "33rem" }}>
          <div className="card-body">
            <h5 className="card-title">Contact Me!</h5>

            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="xyz@gmail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Write your message here..."
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
            <h6>Feel free to contact me through the following platforms:</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span>
                  {" "}
                  <MdEmail className="img-fluid icons" size={25} />
                </span>{" "}
                ahmed258bilal@gmail.com
              </li>
              <li className="list-group-item">
                <span>
                  {" "}
                  <FaWhatsapp className="img-fluid me-2 icons" size={25} />
                </span>
                +923135251927
              </li>
              <li className="list-group-item">
                <span>
                  <a
                    href="https://linkedin.com/in/ahmad-bilal-1872222b3"
                    className="card-link"
                  >
                    <FaLinkedin className="img-fluid me-2 icons" size={25} />
                  </a>
                </span>
              </li>

              <li className="list-group-item">
                <span>
                  <a
                    href="https://github.com/ahmedbilal019"
                    className="card-link"
                  >
                    <FaGithub className="img-fluid icons" size={25} />
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
