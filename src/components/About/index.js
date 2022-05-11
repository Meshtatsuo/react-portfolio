import React from "react";

function About() {
  return (
    <section>
      <div className="section-heading">
        <h2>About</h2>
      </div>
      <div class="section-content">
        <div id="profile-image">
          <img
            src={require("../../assets/profile-pic.jpg")}
            alt="profile of Dominic Misasi"
          />
        </div>
        <div id="about-me-text">
          <h3>About Me</h3>
          <p>
            After graduating college in 2016, I worked various odd jobs while
            freelancing as a sound engineer and audio programmer on the side. My
            experience designing audio systems for games motivated me to go back
            to school and learn what it takes to be a full stack developer.
            During school I built several web applications, including:
          </p>
          <ul>
            <li>
              A photo reviewing application that allows photographers to create
              clients and upload photos for their clients' approval.
            </li>
            <li>
              A desktop and mobile music player built using web technologies and
              Electron.
            </li>
            <li>
              A mental health check in application that allows you to keep tabs
              on your mental health.
            </li>
          </ul>
          <p>
            The skills picked up on my development journey have enabled me to
            take on some pretty exciting projects, and I'm looking forward to
            diving into my next!
          </p>
          <br />
          <a
            id="resume-link"
            href={require("../../assets/DMisasiResume_Web.pdf")}
            download
          >
            <h4>Download my Resume</h4>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
