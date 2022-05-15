import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <Nav
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    ></Nav>
  );
}

export default Header;
