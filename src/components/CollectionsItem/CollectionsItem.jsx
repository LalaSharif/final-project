import React from "react";
import "./CollectionsItem.css";
import colimg from "..//..//assets/images/Rectangle 142.png";
function CollectionsItem() {
  return (
    <div className="ColItem">
      <img src={colimg} alt="" />
      <div className="colItem__blur">BEDROOM</div>
    </div>
  );
}

export default CollectionsItem;
