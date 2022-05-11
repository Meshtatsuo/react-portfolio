import React from "react";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <header>
      <div id="logo">
        <a href="#">
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
        </a>
      </div>

      <nav>
        <ul>
          {pages.map((page) => {
            return (
              <a>
                <span
                  onClick={() => {
                    setCurrentPage(page.name);
                  }}
                >
                  <li
                    className={`${
                      currentPage.name === page.name &&
                      !currentPage &&
                      `navActive`
                    }`}
                    key={page.name}
                  >
                    {page.name}
                  </li>
                </span>
              </a>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
