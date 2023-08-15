import React from "react";
import "./Productscomponent.css";
import prodimg from "../../assets/images/Rectangle 117.png";

function Productscomponent() {
  return (
    <div className="products">
      <h3>PRODUCTS</h3>
      <h4>
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus id quod maxime.
      </h4>

      <div className="products__wrapper">
        <div className="products_list">
          <div className="products_categories">
            <h4>CATEGORIES</h4>
            <ul>
              <li>ALL</li>
              <li>SOFAS</li>
              <li>BEDS AND HEADBOARDS</li>
              <li>RUGS</li>
              <li>CUSHIONS</li>
              <li>SOFAS</li>
              <li>HEADBOARDS</li>
            </ul>
          </div>
          <div className="products__collections">
            <h4>COLLECTIONS</h4>
            <ul>
              <li>ALL</li>
              <li>BEDROOM</li>
              <li>LIVING ROOM</li>
              <li>KITCHEN</li>
              <li>LIBRARY</li>
              <li>OFFICE</li>
              <li>LAUNDRY ROOM</li>
              <li>GUEST ROOM</li>
              <li>FAMILY ROOM</li>
              <li>BATHROOM</li>
            </ul>
          </div>
        </div>
        <div className="products_box">
          <div className="products_box-item">
            <img src={prodimg} alt="" />
            <h6>Grayson Premium Grey Wash Nest of Tables</h6>
            <p>140$</p>
          </div>
          <div className="products_box-item">
            <img src={prodimg} alt="" />
            <h6>Grayson Premium Grey Wash Nest of Tables</h6>
            <p>140$</p>
          </div>
          <div className="products_box-item">
            <img src={prodimg} alt="" />
            <h6>Grayson Premium Grey Wash Nest of Tables</h6>
            <p>140$</p>
          </div>
          <div className="products_box-item">
            <img src={prodimg} alt="" />
            <h6>Grayson Premium Grey Wash Nest of Tables</h6>
            <p>140$</p>
          </div>
          <div className="products_box-item">
            <img src={prodimg} alt="" />
            <h6>Grayson Premium Grey Wash Nest of Tables</h6>
            <p>140$</p>
          </div>
          <div className="products_box-item">
            <img src={prodimg} alt="" />
            <h6>Grayson Premium Grey Wash Nest of Tables</h6>
            <p>140$</p>
          </div>
          <div className="products_box-item">
            <img src={prodimg} alt="" />
            <h6>Grayson Premium Grey Wash Nest of Tables</h6>
            <p>140$</p>
          </div>
          <div className="products_box-item">
            <img src={prodimg} alt="" />
            <h6>Grayson Premium Grey Wash Nest of Tables</h6>
            <p>140$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productscomponent;
