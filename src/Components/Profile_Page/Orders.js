import React from "react";
import "./Orders.css";

const Orders = (props) => {
  console.log(props.OrderedInfo);

  let ItemPcs = 0;
  let Price = 0;

  for (let item of props.OrderedInfo) {
    ItemPcs += item.count;
    console.log(item.Price);
    Price += item.count * item.price;
  }

  return (
    <div className="OrderWraper">
      <div className="OrderItemHead">
        <div className="OrderItemDetails">
          <h2>Order Number:</h2>
          <p>{props.OrderedInfo[0].OrderID}</p>
        </div>
        <div className="OrderItemDetails">
          <h2>Order Date:</h2>
          <p>{props.OrderedInfo[0].OrderTime}</p>
        </div>

        <div className="OrderItemDetails">
          <h2>Delivery to:</h2>
          <p>Adress will be here </p>
        </div>
        <div className="OrderItemDetails">
          <h2>Amount of Items:</h2>
          <p>{ItemPcs}</p>
        </div>
        <div className="OrderItemDetails">
          <h2>Total Price:</h2>
          <p className="Price">${Price}</p>
        </div>
      </div>
      <div className="OrderItemDetails OrderItemBody">
        <div className="OrderImages">
          {props.OrderedInfo.map((e) => {
            return (
              <a href={`/ProductPage/${e.id}`} className="OrderImagesWithPcs">
                <img src={e.minisrc[0]} className="miniImage"></img>
                <div className="AmountOfItems">{e.count}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
