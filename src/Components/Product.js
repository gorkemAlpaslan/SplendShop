import "./Product.css";
import { useState } from "react";

import { FaSearch, FaShare, FaHeart } from "react-icons/fa";

const Product = (props) => {
  let discountHandler = false;

  if (props.discount > 0) {
    discountHandler = true;
  }

  const productDetailsArray = [props.ProductDetails];
  const uniqueIdForProduct = productDetailsArray[0].title;
  const localStorageProductIds = [productDetailsArray[0].title];

  const addToCary = () => {
    localStorage.setItem(
      uniqueIdForProduct,
      JSON.stringify(productDetailsArray[0])
    );

    if (!localStorage.getItem("purchaseProducts")) {
      localStorage.setItem(
        "purchaseProducts",
        JSON.stringify(localStorageProductIds)
      );
    } else {
      let purchaseProducts = JSON.parse(
        localStorage.getItem("purchaseProducts")
      );
      purchaseProducts.push(uniqueIdForProduct);
      localStorage.setItem(
        "purchaseProducts",
        JSON.stringify(purchaseProducts)
      );
    }
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
                <a href="#">
                  <FaSearch />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaShare />
                </a>
              </li>
            </ul>
            <a class="add-to-cart" onClick={addToCary}>
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

export default Product;
