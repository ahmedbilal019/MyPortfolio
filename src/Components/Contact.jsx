import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
function Contact() {
  return (
    <>
      <div className="contact-card">
        <div class="card" style={{ width: "30rem", height: "20rem" }}>
          <div class="card-body">
            <h5 class="card-title">Contact Me!</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span>
                {" "}
                <MdEmail className="img-fluid" size={25} />
              </span>{" "}
              ahmed258bilal@gmail.com
            </li>
            <li class="list-group-item">
              <span>
                {" "}
                <FaWhatsapp className="img-fluid" size={25} />
              </span>
              +923135251927
            </li>
            <li class="list-group-item">
              <span>
                <FaSquarePhone className="img-fluid" size={25} />
              </span>
              +923135251927
            </li>
          </ul>
          <div class="card-body">
            <a
              href="https:linkedin.com/in/ahmad-bilal-1872222b3"
              class="card-link"
            >
              <FaLinkedin className="img-fluid" size={25} />
            </a>
            <a href="https:github.com/ahmedbilal019" class="card-link">
              <FaGithub className="img-fluid" size={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
