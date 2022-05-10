import React from "react";

function About() {
  return (
    <section>
      <div className="section-heading">
        <h2>About Me</h2>
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
            freelancing as an audio engineer on the side. Over time my duties on
            my freelance audio work began drifting more and more into the game
            audio field and the implementation aspect of sounds in games. Ever
            since, I've designed various audio systems for many projects
            including:
          </p>
          <ul>
            <li>
              A custom real time breathing system for non player characters that
              adjusts a character's breathing based on external monitoring
              systems
            </li>
            <li>
              A dynamic weather system including real time weather patterns and
              seamless transitions between weather types.
            </li>
            <li>
              A radio audio system that generates and modulates static between
              stations in real time
            </li>
          </ul>
          <p>
            My interest in the back end of audio development would lead me down
            the path to full stack development as a more stable career to pursue
            while continuing my audio work on the side.
          </p>
          <h3>My Work</h3>
          <p>
            Currently you will find some work for both audio development and
            full stack development in my portfolio, but this will shift towards
            a heavy emphasis into full stack development as I develop more
            portfolio items.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
