import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import "./banner.css";
import bannerimg from "../../assets/images/Rectangle 106.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_text">
        <h2>20% DISCOUNT</h2>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo{" "}
        </p>
        <button className="shop-button">
          <FontAwesomeIcon icon={faShoppingBasket} /> SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
