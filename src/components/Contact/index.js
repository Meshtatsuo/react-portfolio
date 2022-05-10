import React from "react";

function Contact() {
  return (
    <section>
      <div className="section-heading">
        <h2>Contact</h2>
      </div>
      <div className="section-content">
        <div className="social-icons">
          <ul>
            <a href="https://www.twitter.com" target="_blank">
              <li>
                <img
                  src={require("../../assets/font-awesome-icons/twitter.png")}
                  alt="twitter icon"
                />
              </li>
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <li>
                <img
                  src={require("../../assets/font-awesome-icons/linkedin.png")}
                  alt="linked-in icon"
                />
              </li>
            </a>
            <a href="https://www.github.com" target="_blank">
              <li>
                <img
                  src={require("../../assets/font-awesome-icons/github.png")}
                  alt="github icon"
                />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
