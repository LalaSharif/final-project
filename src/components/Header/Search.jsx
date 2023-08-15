import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function Search({ setOpenSearch }) {
  return (
    <div className="overlay">
      <div className="search_div">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="SEARCH OUR STORE" />
        <FontAwesomeIcon
          onClick={() => setOpenSearch(false)}
          icon={faTimes}
          className="close-icon"
        />
      </div>
    </div>
  );
}

export default Search;
