import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  // form state management
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // error message management
  const [errorMessage, setErrorMessage] = useState("");

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
    console.log(formState);
  }

  const { name, email, message } = formState;

  return (
    <section>
      <div className="section-heading">
        <h2>Contact</h2>
      </div>

      <div className="section-content">
        <div id="contact-form">
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleFormSubmit}>
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
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
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
