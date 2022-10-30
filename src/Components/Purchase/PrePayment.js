import React, { useState } from "react";
import "./PrePayment.css";
import moment from "moment";

const PrePayment = (props) => {
  let Total = 0;
  for (let Price of props.ProductList) {
    Total += Price.count * Price.price;
  }

  if (!JSON.parse(localStorage.getItem("purchaseProducts"))) {
    localStorage.setItem("purchaseProducts", JSON.stringify([]));
  }

  const [orderEmptyError, SetorderEmptyError] = useState(false);

  const ItemPurchaseHandler = () => {
    if (JSON.parse(localStorage.getItem("purchaseProducts")).length > 0) {
      ItemsPurchased();
    } else {
      SetorderEmptyError(true);
    }
  };

  const ItemsPurchased = () => {
    let Order = JSON.parse(localStorage.getItem("purchaseProducts"));
    let OrderedItemList = [];

    for (let PurchasedItem of Order) {
      let Item = JSON.parse(localStorage.getItem(PurchasedItem));
      OrderedItemList.push(Item);
    }

    const result = OrderedItemList.map((obj) => {
      let time = moment().format("YYYY-MM-DD hh:mm:ss");
      obj["OrderTime"] = time;
      obj["OrderAdress"] = props.DeliveryAdress;
      obj["OrderID"] = Math.random() * 10000000000000000;
      localStorage.setItem(obj.title, JSON.stringify(obj));
      return obj;
    });

    const OrderedItemFiltered = [
      ...new Map(result.map((m) => [m.id, m])).values(),
    ];

    if (!JSON.parse(localStorage.getItem("Orders"))) {
      localStorage.setItem("Orders", JSON.stringify([OrderedItemFiltered]));
    } else {
      let TempOrderedArray = JSON.parse(localStorage.getItem("Orders"));
      TempOrderedArray.push(OrderedItemFiltered);
      localStorage.setItem("Orders", JSON.stringify(TempOrderedArray));
    }
    for (let OrderedItem of OrderedItemFiltered) {
      props.PurchasePageHandlerWhenOrderComplate(OrderedItem.title);
      sessionStorage.setItem("reloading", "true");
      window.location.reload(false);
    }
  };

  return (
    <div>
      {props.AdressIsSelected !== undefined && (
        <div className="Payment_Page_Wrapper">
          <h3 className="Payment_Summary_Title">Summary</h3>
          <div className="Product_Total_Prices">
            {props.ProductList.map((PurchaseItem) => (
              <div className="Each_Item_Wraper">
                <div className="Each_Item_Title">{PurchaseItem.title}</div>
                <div className="Each_Item_Prices">
                  ${PurchaseItem.count * PurchaseItem.price}
                </div>
              </div>
            ))}
          </div>
          <div className="Total_Price_Wrapper">
            <div className="Total">Total</div>
            <div className="Total_Price">${Total}</div>
          </div>
          {orderEmptyError && (
            <p className="OrderErrorMessage">There is not any item at card</p>
          )}
          <button className="Payment_Button" onClick={ItemPurchaseHandler}>
            Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default PrePayment;
