import "./Product.css";
import { useState } from "react";
import { FaSearch, FaShare, FaHeart } from "react-icons/fa";
import AddToCary from "./Functions/AddToCary";
import Rating from "@mui/material/Rating";

const Product = (props) => {
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

  const AddFavororitesHandler = () => {
    localStorage.setItem(
      productDetailsArray.title,
      JSON.stringify(productDetailsArray)
    );

    if (!localStorage.getItem("FavoriteProducts")) {
      localStorage.setItem(
        "FavoriteProducts",
        JSON.stringify([productDetailsArray.title])
      );
    } else {
      let FavoriteProducts = JSON.parse(
        localStorage.getItem("FavoriteProducts")
      );
      FavoriteProducts.push(productDetailsArray.title);
      let asdvsda = [...new Set(FavoriteProducts)];
      localStorage.setItem("FavoriteProducts", JSON.stringify(asdvsda));
    }
  };

  return (
    <div class="row">
      <div class="PerItemWrapper">
        <div class="product-grid">
          <div class="product-image">
            <a href={`/ProductPage/${props.refNum}`} className="image">
              <img src={props.image}></img>
            </a>
            <span class="product-discount-label">
              {discountHandler && `-${props.discount * 100}%`}
            </span>
            <ul class="product-links">
              <li>
                <a onClick={AddFavororitesHandler}>
                  <FaHeart></FaHeart>
                </a>
              </li>
            </ul>
            <a class="add-to-cart" onClick={AddItemToPurchase}>
              Add to Cart
            </a>
          </div>
          <div class="product-content">
            <Rating
              name="read-only"
              value={props.Rate}
              readOnly
              precision={0.5}
              size="small"
            />
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

export default Product;
