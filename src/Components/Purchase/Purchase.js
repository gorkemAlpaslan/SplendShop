import React, { useState } from "react";
import "./Purchase.css";
import "./PrePurchaseProduct";
import PrePurchaseProduct from "./PrePurchaseProduct";
import PrePayment from "./PrePayment";

let PurchasedItemsListOfObj = [];

let PuchasedItemsArray = JSON.parse(localStorage.getItem("purchaseProducts"));
if (!PuchasedItemsArray) {
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
    const NumberOfitemsForLoop = PuchasedItemsArray.length;
    let NewPurchaseItemTitles = PuchasedItemsArray;
    let NewPurchaseItems = [];

    for (let i = 0; i < NumberOfitemsForLoop; i++) {
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
        let DummyItem = Item;
        DummyItem.count = 0;
        localStorage.setItem(Item.title, JSON.stringify(DummyItem));
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
        localStorage.setItem(obj.title, JSON.stringify(PItem));
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
      if (obj.title === title && obj.count > 0) {
        let PItem = { ...obj, count: obj.count - 1 };
        localStorage.setItem(obj.title, JSON.stringify(PItem));
        if (obj.count === 1) {
          sessionStorage.setItem("reloading", "true");
          window.location.reload(false);
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

  const NumberOfItemsHandler = (CountHandler) => {
    props.Count(CountHandler);
  };

  return (
    <div className="Purchase_Page">
      <div className="Purchase_Page_Wrapper">
        <div className="Purchase_Items">
          <h2>Products</h2>
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
                NumberOfItemsHandler={NumberOfItemsHandler}
              />
            ))}
          </div>
          <div className="Purchase_Favs">favs gonna be here</div>
        </div>
      </div>
      <div className="Payment_Wrapper">
        <PrePayment
          ProductList={PurchasedItems}
          PurchasePageHandlerWhenOrderComplate={PurchaseCancle}
        ></PrePayment>
      </div>
    </div>
  );
};

export default Purchase;
