import React from "react";
import "./PrePurchaseProduct.css";

const PrePurchaseProduct = () => {
  return (
    <div className="Product_Purchase_Wrapper">
      <div className="Product_Purchase_Card">
        <img
          src="https://i.hizliresim.com/83hhx7w.png"
          className="Product_Purchase_Image"
        ></img>
        <div className="Product_Purchase_Card_Info">
          <p className="Product_Purchase_Card_Name">Product Name</p>
          <p className="Product_Purchase_Card_Description">
            Product Description
          </p>
          <p className="Product_Purchase_Card_Price">$23</p>
        </div>
      </div>
      <button className="Product_Purchase_Card_Button"></button>
    </div>
  );
};

export default PrePurchaseProduct;
