import React from "react";
import "./products.css";
import productsimg from "../../assets/images/Rectangle 117.png";

function Products() {
  return (
    <div className="products">
      <h3>PRODUCTS</h3>

      <div className="products_box">
        <div className="products_box-item">
          <img src={productsimg} alt="" />
          <h6>Grayson Premium Grey Wash Nest of Tables</h6>
          <p>140$</p>
        </div>
        <div className="products_box-item">
          <img src={productsimg} alt="" />
          <h6>Grayson Premium Grey Wash Nest of Tables</h6>
          <p>140$</p>
        </div>
        <div className="products_box-item">
          <img src={productsimg} alt="" />
          <h6>Grayson Premium Grey Wash Nest of Tables</h6>
          <p>140$</p>
        </div>
        <div className="products_box-item">
          <img src={productsimg} alt="" />
          <h6>Grayson Premium Grey Wash Nest of Tables</h6>
          <p>140$</p>
        </div>
        <div className="products_box-item">
          <img src={productsimg} alt="" />
          <h6>Grayson Premium Grey Wash Nest of Tables</h6>
          <p>140$</p>
        </div>
        <div className="products_box-item">
          <img src={productsimg} alt="" />
          <h6>Grayson Premium Grey Wash Nest of Tables</h6>
          <p>140$</p>
        </div>
        <div className="products_box-item">
          <img src={productsimg} alt="" />
          <h6>Grayson Premium Grey Wash Nest of Tables</h6>
          <p>140$</p>
        </div>
        <div className="products_box-item">
          <img src={productsimg} alt="" />
          <h6>Grayson Premium Grey Wash Nest of Tables</h6>
          <p>140$</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
