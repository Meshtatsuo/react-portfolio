import React from "react";

function Portfolio(props) {
  const { portfolio_items, showcase_items } = props;
  return (
    <section>
      <div className="section-heading">
        <h2>Portfolio</h2>
      </div>

      <div className="section-content">
        {showcase_items.map((item) => {
          return (
            <div className="showcase-item">
              <a href={item.link}>
                <div className="hover-overlay">
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className="portfolio-item-text" id="showcase-text">
                  <h4>{item.title}</h4>
                  <p>{item.tech}</p>
                </div>
              </a>
            </div>
          );
        })}
        {portfolio_items.map((item) => {
          return (
            <div className="portfolio-item">
              <a href={item.link}>
                <div className="hover-overlay">
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className="portfolio-item-text" id="portfolio-text">
                  <h4>{item.title}</h4>
                  <p>{item.tech}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
