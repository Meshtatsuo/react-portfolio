import React from "react";

function Project(props) {
  const { portfolio_items, showcase_items } = props;
  return (
    <div className="section-content">
      {showcase_items.map((item) => {
        return (
          <div className="showcase-item" key={item.title}>
            <a href={item.link} target="_blank" rel="noreferrer">
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
          <div className="portfolio-item" key={item.title}>
            <a href={item.link} target="_blank" rel="noreferrer">
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
      <p>
        Additionally, this entire site was built with React.{" "}
        <a
          href="https://github.com/Meshtatsuo/react-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          View the repository here!
        </a>
      </p>
    </div>
  );
}

export default Project;
