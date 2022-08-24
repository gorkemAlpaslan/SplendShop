import React from "react";
import "./PrePurchaseProduct.css";
import { MdClose } from "react-icons/md";

const PrePurchaseProduct = (props) => {
  return (
    <div className="Product_Purchase_Wrapper">
      <div className="Product_Purchase_Card">
        <img
          src={props.image}
          alt="product"
          className="Product_Purchase_Image"
        ></img>
        <div className="Product_Purchase_Card_Info">
          <p className="Product_Purchase_Card_Name">{props.title}</p>
          <p> {props.Count}</p>
          <p className="Product_Purchase_Card_Price">${props.price}</p>
        </div>
      </div>
      <MdClose className="Product_Purchase_Card_Button "></MdClose>
    </div>
  );
};

export default PrePurchaseProduct;
