import React, { useState } from "react";
import "./Purchase.css";
import "./PrePurchaseProduct";
import PrePurchaseProduct from "./PrePurchaseProduct";
import PrePayment from "./PrePayment";

// Notes for myself:
// Fıx the issues that couse user can't load the products page without any localstorage data
//fix the issue that when item deleted from the purchases, localstorage still keeps the data as count of 1 (i need to delete the data or set teh count to 0 not 1)

let PurchasedItemsListOfObj = [];

let PuchasedItemsArray = JSON.parse(localStorage.getItem("purchaseProducts"));
if (PuchasedItemsArray) {
  JSON.parse(localStorage.getItem("purchaseProducts"));
} else {
  PuchasedItemsArray = [];
}

for (let PurchasedItem of PuchasedItemsArray) {
  let Item = JSON.parse(localStorage.getItem(PurchasedItem));
  PurchasedItemsListOfObj.push(Item);
}

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
    for (let i = 0; i < 99; i++) {
      const index = NewPurchaseItemTitles.indexOf(PItem);
      if (index > -1) {
        NewPurchaseItemTitles.splice(index, 1);
      }
    }
    localStorage.setItem(
      "purchaseProducts",
      JSON.stringify(NewPurchaseItemTitles)
    );

    for (let Item of PurchasedItems) {
      if (PItem === Item.title) {
        localStorage.removeItem(Item.title);
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

  // Notes for myself:
  // - fix the count 0 problem
  const SubCount = (title) => {
    const newState = PurchasedItems.map((obj) => {
      if (obj.title === title && obj.count > 0) {
        let PItem = { ...obj, count: obj.count - 1 };
        if (PItem.count === 0) {
          localStorage.removeItem(PItem.title);
        } else {
          localStorage.setItem(obj.title, JSON.stringify(PItem));
        }
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
      <div className="Payment_Wrapper">
        <PrePayment ProductList={PurchasedItems}></PrePayment>
      </div>
    </div>
  );
};

export default Purchase;
