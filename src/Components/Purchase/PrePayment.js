import React from "react";
import "./PrePayment.css";

const PrePayment = (props) => {
  let Total = 0;
  for (let Price of props.ProductList) {
    Total += Price.count * Price.price;
  }

  return (
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
      <button className="Payment_Button">Pay</button>
    </div>
  );
};

export default PrePayment;
