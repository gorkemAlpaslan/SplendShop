import React from "react";
import "./Purchase.css";
import "./PrePurchaseProduct";
import PrePurchaseProduct from "./PrePurchaseProduct";

const Purchase = () => {
  return (
    <div className="Purchase_Page">
      <div className="Purchase_Page_Wrapper">
        <div className="Purchase_Items">
          <h4>Products</h4>
          <div className="Pre_Purchase_Wrapper">
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
            <PrePurchaseProduct></PrePurchaseProduct>
          </div>
          <div className="Purchase_Favs"></div>
        </div>
      </div>
      <div className="Payment_Wrapper"></div>
    </div>
  );
};

export default Purchase;
