import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCaptchaV2 from "react-google-recaptcha";
import { send } from "emailjs-com";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  const navigate = useNavigate();
  // form state management
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    token: null,
  });
  // error message management
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleToken = (token) => {
    console.log("Token validated");
    setFormState({ ...formState, token });
  };

  const handleExpire = (token) => {
    setFormState({ ...formState, token: null });
  };

  function handleFormChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`);
        } else {
          setErrorMessage("");
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // would normally send the email in this bit, console logging for now.
    if (formState.token) {
      send(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        formState,
        process.env.REACT_APP_EMAILJS_USERID
      );
      navigate("/contact-sent");
    } else {
      setErrorMessage("Must validate reCAPTCHA!");
    }
  }

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
          <form id="contact-form" onSubmit={handleFormSubmit}>
            {errorMessage ? (
              <div>
                <p id="contact-error-text">{errorMessage}</p>
              </div>
            ) : (
              <div>
                <p id="contact-error-text">&nbsp;</p>
              </div>
            )}
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleFormChange}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                onBlur={handleFormChange}
                defaultValue={email}
                name="email"
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                onBlur={handleFormChange}
                name="message"
                defaultValue={message}
                rows="5"
              />
            </div>
            <ReCaptchaV2
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={handleToken}
              onExpired={handleExpire}
            />
            <button type="submit">Submit</button>
          </form>
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

export default Contact;
