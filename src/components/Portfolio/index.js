import React from "react";
import Project from "../Project";

function Portfolio(props) {
  const { portfolio_items, showcase_items } = props;
  return (
    <section>
      <div className="section-heading">
        <h2>Portfolio</h2>
      </div>
      <Project
        portfolio_items={portfolio_items}
        showcase_items={showcase_items}
      >
      </Project>
      
    </section>
  );
}

export default Portfolio;
