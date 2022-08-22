import React, { useState } from "react";
import "./Purchase.css";
import "./PrePurchaseProduct";
import PrePurchaseProduct from "./PrePurchaseProduct";

const Purchase = (props) => {
  let PurchasedItemsList = [];
  let PuchasedItems = JSON.parse(localStorage.getItem("purchaseProducts"));

  for (let PurchasedItem of PuchasedItems) {
    let Item = JSON.parse(localStorage.getItem(PurchasedItem));
    PurchasedItemsList.push(Item);
  }

  return (
    <div className="Purchase_Page">
      <div className="Purchase_Page_Wrapper">
        <div className="Purchase_Items">
          <h4>Products</h4>
          <div className="Pre_Purchase_Wrapper">
            {PurchasedItemsList.map((PurchaseItem) => (
              <PrePurchaseProduct
                title={PurchaseItem.title}
                price={PurchaseItem.price}
                description={PurchaseItem.description}
                key={PurchaseItem.id}
                image={PurchaseItem.minisrc}
                refNum={PurchaseItem.id}
              />
            ))}
          </div>
          <div className="Purchase_Favs"></div>
        </div>
      </div>
      <div className="Payment_Wrapper"></div>
    </div>
  );
};

export default Purchase;
