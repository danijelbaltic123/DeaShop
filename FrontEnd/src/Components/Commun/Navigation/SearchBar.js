import React from "react";

import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  return (
    <div className="search">
      <input className="search-bar" type="text" placeholder="Pretraži" />
      <div className="search-bar__icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
