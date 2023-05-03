import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";

function Navbar(props) {
  const { articles, setArticles } = props;
  return (
    <nav className="nav">
      <Logo />
      <SearchBar articles={articles} setArticles={setArticles} />
      <SortButton articles={articles} setArticles={setArticles} />
    </nav>
  );
}

export default Navbar;
