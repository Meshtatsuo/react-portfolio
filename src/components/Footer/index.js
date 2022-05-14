import React from "react";

function Footer() {
  return (
    <footer>
      <div id="copyright">
        <p>&copy; Dominic Misasi. All Rights Reserved.</p>
      </div>
      <div className="social-icons" id="footer-icons">
        <ul>
          <a href="https://twitter.com/TheAudioBull" target="_blank">
            <li>
              <img
                src={require("../../assets/font-awesome-icons/twitter.png")}
                alt="twitter icon"
              />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/dominic-w-misasi/"
            target="_blank"
          >
            <li>
              <img
                src={require("../../assets/font-awesome-icons/linkedin.png")}
                alt="linked-in icon"
              />
            </li>
          </a>
          <a href="https://github.com/Meshtatsuo" target="_blank">
            <li>
              <img
                src={require("../../assets/font-awesome-icons/github.png")}
                alt="github icon"
              />
            </li>
          </a>
        </ul>
      </div>
      <div id="contact-info">
        <a href="mailto: info@dominicmisasi.com">info@dominicmisasi.com</a>
      </div>
    </footer>
  );
}

export default Footer;
