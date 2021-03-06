import React from "react";

function Hero() {
  return (
    <section id="hero">
      <img src={require("../../assets/HeroBanner.png")} alt="audiobull logo" />
      <div id="hero-text">
        <h2 className="hero-name">
          <span className="blue-text ">DOMINIC</span> MISASI
        </h2>
        <h2>
          FULL STACK <span className="blue-text">DEVELOPER</span>
        </h2>
      </div>
    </section>
  );
}

export default Hero;
