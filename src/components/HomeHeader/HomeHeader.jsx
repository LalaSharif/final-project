import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./homeHeader.css";
import headerimg from "../../assets/images/Rectangle 1.png";
function HomeHeader() {
  return (
    <div className="downheader">
      <div className="left-side">
        <h1>THE FURNITURE THAT DEFINES YOU</h1>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum
        </p>
        <button className="shop-button">
          <FontAwesomeIcon icon={faShoppingBasket} /> Shop Now
        </button>
      </div>
      <div className="right-side">
        <img src={headerimg} alt="Image" />
      </div>
    </div>
  );
}

export default HomeHeader;
