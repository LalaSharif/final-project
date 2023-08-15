import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <header>
      {openSearch ? <Search setOpenSearch={setOpenSearch} /> : null}

      <div className="header">
        <div className="topnav">
          <div className="language">Az</div>
          <FontAwesomeIcon
            onClick={() => setOpenSearch(true)}
            icon={faSearch}
          />
          <div className="logo">HomeDecor</div>
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="downnav">
          <div className="navbar">
            <nav>
              <ul>
                <li>
                  <NavLink className="navbar_link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar_link" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar_link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar_link" to="/collections">
                    Collections
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar_link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
