import React from "react";

function Nav(props) {
  const { pages, setCurrentPage, currentPage } = props;

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
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
