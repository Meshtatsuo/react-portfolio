import React from "react";

function Home() {
  return (
    <section>
      <div className="section-heading">
        <h2>Welcome</h2>
      </div>
      <div className="section-content">
        <div id="waka-stats">
          <figure>
            <h3>Coding Time (Past 7 Days)</h3>
            <embed src="https://wakatime.com/share/@cf37e14b-4843-4839-83b3-613cd104b12c/0514c424-742f-4fa3-9f1a-c5e034c5d49a.svg"></embed>
          </figure>

          <div id="graphtest"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
