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

// counts the same Items in the Array of obj
const countDict = PurchasedItemsList.reduce((acc, curr) => {
  const { title } = curr;
  if (acc[title]) ++acc[title];
  else acc[title] = 1;
  return acc;
}, {});

const result = PurchasedItemsList.map((obj) => {
  obj["count"] = countDict[obj.title];
  localStorage.setItem(obj.title, JSON.stringify(obj));
  return obj;
});

const unique = [...new Map(result.map((m) => [m.id, m])).values()];

const Purchase = (props) => {
  const [PurchasedItems, SetPurchasedItems] = useState(unique);

  const PurchaseCancle = (PItem) => {
    let NewPurchaseItems = [];
    let NewPurchaseItemTitles = [];
    for (let Item of PurchasedItems) {
      if (PItem === Item.title) {
        continue;
      } else {
        NewPurchaseItemTitles.push(Item.title);
        NewPurchaseItems.push(Item);
      }
    }
    localStorage.setItem(
      "purchaseProducts",
      JSON.stringify(NewPurchaseItemTitles)
    );
    SetPurchasedItems(NewPurchaseItems);
  };

  const AddCount = (title) => {
    const newState = PurchasedItems.map((obj) => {
      if (obj.title === title) {
        let PItem = { ...obj, count: obj.count + 1 };
        localStorage.setItem(obj.title, JSON.stringify(obj));
        return PItem;
      }
      return obj;
    });

    let NewPurchaseItemTitles = PuchasedItems;
    NewPurchaseItemTitles.push(title);
    localStorage.setItem(
      "purchaseProducts",
      JSON.stringify(NewPurchaseItemTitles)
    );

    SetPurchasedItems(newState);
  };

  const SubCount = (title) => {
    const newState = PurchasedItems.map((obj) => {
      if (obj.title === title) {
        let PItem = { ...obj, count: obj.count - 1 };
        localStorage.setItem(obj.title, JSON.stringify(obj));
        return PItem;
      }
      return obj;
    });
    let NewPurchaseItemTitles = PuchasedItems;
    const index = NewPurchaseItemTitles.indexOf(title);
    if (index > -1) {
      NewPurchaseItemTitles.splice(index, 1);
    }
    localStorage.setItem(
      "purchaseProducts",
      JSON.stringify(NewPurchaseItemTitles)
    );

    SetPurchasedItems(newState);
  };

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
                PurchaseCancle={PurchaseCancle}
                AddCount={AddCount}
                SubCount={SubCount}
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
