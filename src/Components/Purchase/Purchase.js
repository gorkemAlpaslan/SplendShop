import React, { useState } from "react";
import "./Purchase.css";
import "./PrePurchaseProduct";
import PrePurchaseProduct from "./PrePurchaseProduct";

let PurchasedItemsList = [];
let PuchasedItems = JSON.parse(localStorage.getItem("purchaseProducts"));
for (let PurchasedItem of PuchasedItems) {
  let Item = JSON.parse(localStorage.getItem(PurchasedItem));
  PurchasedItemsList.push(Item);
}

const countDict = PurchasedItemsList.reduce((acc, curr) => {
  const { title } = curr;
  if (acc[title]) ++acc[title];
  else acc[title] = 1;
  return acc;
}, {});

const result = PurchasedItemsList.map((obj) => {
  obj["count"] = countDict[obj.title];
  return obj;
});

const unique = [...new Map(result.map((m) => [m.id, m])).values()];
console.log(unique);

const Purchase = (props) => {
  const [PurchasedItems, SetPurchasedItems] = useState(unique);

  return (
    <div className="Purchase_Page">
      <div className="Purchase_Page_Wrapper">
        <div className="Purchase_Items">
          <h4>Products</h4>
          <div className="Pre_Purchase_Wrapper">
            {PurchasedItems.map((PurchaseItem) => (
              <PrePurchaseProduct
                title={PurchaseItem.title}
                price={PurchaseItem.price}
                description={PurchaseItem.description}
                key={PurchaseItem.id}
                image={PurchaseItem.minisrc}
                refNum={PurchaseItem.id}
                Count={PurchaseItem.count}
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
