import { React, useState } from "react";
import "./FavoriteProducts.css";
import { FaTimes } from "react-icons/fa";
import AddToCary from "../../Functions/AddToCary";

const FavoriteProducts = (props) => {
  let discountHandler = false;

  if (props.discount > 0) {
    discountHandler = true;
  }

  const productDetailsArray = props.ProductDetails;

  const AddItemToPurchase = () => {
    AddToCary(productDetailsArray);
    let numberofItems = JSON.parse(localStorage.getItem("purchaseProducts"));
    props.NumberOfItemsHandler(numberofItems);
  };

  const FavItemDeleteHandler = () => {
    props.FavItemDeleteHandler(props.title);
  };

  return (
    <div className="row">
      <div className="FavContainer">
        <div className="FavInnerContainer">
          <div className="fav-product-image">
            <a href={`/ProductPage/${props.refNum}`} className="fav-image">
              <img src={props.image}></img>
            </a>
            <span className="fav-product-discount-label">
              {discountHandler && `-${props.discount * 100}%`}
            </span>
            <ul className="fav-product-links">
              <li>
                <a onClick={FavItemDeleteHandler}>
                  <FaTimes></FaTimes>
                </a>
              </li>
            </ul>
            <a className="fav-add-to-cart" onClick={AddItemToPurchase}>
              Add to Cart
            </a>
          </div>
          <div className="fav-product-content">
            <h3 className="fav-title">
              <a href={`/ProductPage/${props.refNum}`}>{props.title}</a>
            </h3>
            <div className="price">
              {`$${props.price - props.price * props.discount} `}
              {discountHandler && (
                <span className="if-discount-ol">{`$${props.price}`}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProducts;
