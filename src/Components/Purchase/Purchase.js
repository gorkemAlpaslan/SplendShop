import React, { useState } from "react";
import "./Purchase.css";
import "./PrePurchaseProduct";
import PrePurchaseProduct from "./PrePurchaseProduct";

let PurchasedItemsListOfObj = [];
let PuchasedItemsArray = JSON.parse(localStorage.getItem("purchaseProducts"));
for (let PurchasedItem of PuchasedItemsArray) {
  let Item = JSON.parse(localStorage.getItem(PurchasedItem));
  PurchasedItemsListOfObj.push(Item);
}

// counts the same Items in the Array of obj
const countDict = PurchasedItemsListOfObj.reduce((acc, curr) => {
  const { title } = curr;
  if (acc[title]) ++acc[title];
  else acc[title] = 1;
  return acc;
}, {});

const result = PurchasedItemsListOfObj.map((obj) => {
  obj["count"] = countDict[obj.title];
  localStorage.setItem(obj.title, JSON.stringify(obj));
  return obj;
});

const unique = [...new Map(result.map((m) => [m.id, m])).values()];

const Purchase = (props) => {
  const [PurchasedItems, SetPurchasedItems] = useState(unique);

  const PurchaseCancle = (PItem) => {
    let NewPurchaseItemTitles = PuchasedItemsArray;
    let NewPurchaseItems = [];
    for (let i = 0; i < NewPurchaseItemTitles.length; i++) {
      const index = NewPurchaseItemTitles.indexOf(PItem);
      if (index > -1) {
        NewPurchaseItemTitles.splice(index, 1);
      }
      localStorage.setItem(
        "purchaseProducts",
        JSON.stringify(NewPurchaseItemTitles)
      );
    }
    for (let Item of PurchasedItems) {
      if (PItem === Item.title) {
        continue;
      } else {
        NewPurchaseItems.push(Item);
      }
    }
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

    let NewPurchaseItemTitles = PuchasedItemsArray;
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
    let NewPurchaseItemTitles = PuchasedItemsArray;
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
