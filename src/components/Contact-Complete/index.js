import React from "react";

function ContactComplete() {
  return (
    <section>
      <div className="section-heading">
        <h2>Contact</h2>
      </div>

      <div className="section-content" id="contact-me">
        <div id="contact-text">
          <h3>Reaching Out</h3>
          <p>
            I'm always interested in discussing new oppurtinites. If there is a
            project you think I'd be a good fit for feel free to reach out by
            filling out the contact form or sending me an email at{" "}
            <a href="mailto: info@dominicmisasi.com">info@DominicMisasi.com</a>,
            and I'll get back to you as soon as I can!
          </p>
          <br />
        </div>
        <div id="contact-form">
          <h3>
            Thank you for reaching out! I will try to respond within 48 hours.
          </h3>
        </div>
        <div id="contact-socials" className="social-icons">
          <h3>Find me on social media!</h3>
          <ul>
            <a
              href="https://twitter.com/TheAudioBull"
              rel="noreferrer"
              target="_blank"
            >
              <li>
                <img
                  src={require("../../assets/font-awesome-icons/twitter.png")}
                  alt="twitter icon"
                />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/dominic-w-misasi/"
              rel="noreferrer"
              target="_blank"
            >
              <li>
                <img
                  src={require("../../assets/font-awesome-icons/linkedin.png")}
                  alt="linked-in icon"
                />
              </li>
            </a>
            <a
              href="https://github.com/Meshtatsuo"
              rel="noreferrer"
              target="_blank"
            >
              <li>
                <img
                  src={require("../../assets/font-awesome-icons/github.png")}
                  rel="noreferrer"
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

export default ContactComplete;
