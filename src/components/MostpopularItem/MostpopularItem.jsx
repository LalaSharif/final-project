import React from "react";
import popimage from "../../assets/images/Rectangle 133.png";
import "./mostpopularItem.css";
function MostpopularItem() {
  return (
    <div className="popItem">
      <div className="popItems">
        <img src={popimage} alt="" />
        <div className="poptext">
          <h3>Grayson Premium Grey Wash Nest of Tables</h3>
          <h4>140$</h4>
        </div>
      </div>
    </div>
  );
}

export default MostpopularItem;
