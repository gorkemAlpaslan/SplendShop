import { React } from "react";
import "../../../Styles/Profile_Page/Favorites/FavoriteProducts.css";
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
    let PuchasedItemsArray = JSON.parse(
      localStorage.getItem("purchaseProducts")
    );
    console.log(PuchasedItemsArray);
    if (!PuchasedItemsArray) {
      PuchasedItemsArray = [];
    }
    props.Count(PuchasedItemsArray);
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
              <img alt={props.title} src={props.image}></img>
            </a>
            <span className="fav-product-discount-label">
              {discountHandler && `-${props.discount * 100}%`}
            </span>
            <ul className="fav-product-links">
              <li>
                <div className="heartIco" onClick={FavItemDeleteHandler}>
                  <FaTimes></FaTimes>
                </div>
              </li>
            </ul>
            <div className="fav-add-to-cart" onClick={AddItemToPurchase}>
              Add to Cart
            </div>
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
