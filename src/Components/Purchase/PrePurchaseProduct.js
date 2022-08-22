import React from "react";
import "./PrePurchaseProduct.css";
import { MdClose } from "react-icons/md";

const PrePurchaseProduct = () => {
  return (
    <div className="Product_Purchase_Wrapper">
      <div className="Product_Purchase_Card">
        <img
          src="https://i.hizliresim.com/83hhx7w.png"
          alt="product"
          className="Product_Purchase_Image"
        ></img>
        <div className="Product_Purchase_Card_Info">
          <p className="Product_Purchase_Card_Name">Product Name</p>
          <p className="Product_Purchase_Card_Price">$23</p>
        </div>
      </div>
      <MdClose className="Product_Purchase_Card_Button "></MdClose>
    </div>
  );
};

export default PrePurchaseProduct;
