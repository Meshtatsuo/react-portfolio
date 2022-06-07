import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { pages, setCurrentPage, currentPage } = props;

  function getRouterLink(pageName) {
    let link = pageName.toLowerCase();
    return link;
  }

  return (
    <header>
      <div id="logo">
        <button>
          <span
            onClick={() => {
              setCurrentPage("HOME");
            }}
          >
            <img
              src={require("../../assets/AudioBullWordmark.png")}
              alt="audiobull logo"
            />
          </span>
        </button>
      </div>

      <nav>
        <ul>
          {pages.map((page) => {
            return (
              <Link to={getRouterLink(page.name)} key={page.name}>
                <button
                  onClick={() => {
                    setCurrentPage(page.name);
                  }}
                  key={page.name}
                >
                  <li
                    className={`${
                      currentPage.name === page.name &&
                      !currentPage &&
                      `navActive`
                    }`}
                  >
                    {page.name}
                  </li>
                </button>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
