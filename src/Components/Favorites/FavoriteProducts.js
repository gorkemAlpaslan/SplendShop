import { React, useState } from "react";
import "./FavoriteProducts.css";
import { FaTimes } from "react-icons/fa";
import AddToCary from "../Functions/AddToCary";

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
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="product-grid">
          <div class="product-image">
            <a href={`/ProductPage/${props.refNum}`} class="image">
              <img src={props.image}></img>
            </a>
            <span class="product-discount-label">
              {discountHandler && `-${props.discount * 100}%`}
            </span>
            <ul class="product-links">
              <li>
                <a onClick={FavItemDeleteHandler}>
                  <FaTimes></FaTimes>
                </a>
              </li>
            </ul>
            <a class="add-to-cart" onClick={AddItemToPurchase}>
              Add to Cart
            </a>
          </div>
          <div class="product-content">
            <h3 class="title">
              <a href={`/ProductPage/${props.refNum}`}>{props.title}</a>
            </h3>
            <div class="price">
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
