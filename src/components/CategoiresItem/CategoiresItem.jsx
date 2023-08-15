import React from "react";
import "./categoriesItem.css";
import img from "../../assets/images/Rectangle 111.png";
function CategoiresItem() {
  return (
    <div className="catItem">
      <img src={img} alt="" />
      <div className="catItem__blur">SOFAS</div>
    </div>
  );
}

export default CategoiresItem;
