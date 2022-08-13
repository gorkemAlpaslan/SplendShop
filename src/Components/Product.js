import "./Product.css";
import { Alert } from "bootstrap";
import { render } from "@testing-library/react";
const Product = (props) => {
  return (
    <div className="boutique-product">
      <a href={`ProductPage/${props.refNum}`}>
        <div className="image-container">
          <img className="p-card-img" src={props.image}></img>
        </div>
        <div className="description fixed-elements">
          <div className="product-brand-description two-line-text">
            <span className="brand">{props.title}</span>
            <div>{props.description}</div>
          </div>
          <div className="price-container">
            <div className="prices">
              <div className="price-box discountedv2">${props.price}</div>
            </div>
          </div>
          <div></div>
        </div>
      </a>
      <div></div>
    </div>
  );
};

export default Product;
