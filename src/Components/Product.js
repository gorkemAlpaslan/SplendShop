import "./Product.css";
import { FaHeart } from "react-icons/fa";
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
    <div className="row">
      <div className="PerItemWrapper">
        <div className="product-grid">
          <div className="product-image">
            <a href={`/ProductPage/${props.refNum}`} className="image">
              <img src={props.image} alt={props.title}></img>
            </a>
            <span className="product-discount-label">
              {discountHandler && `-${props.discount * 100}%`}
            </span>
            <ul className="product-links">
              <li>
                <div className="heartIco" onClick={AddFavororitesHandler}>
                  <FaHeart></FaHeart>
                </div>
              </li>
            </ul>
            <div className="add-to-cart" onClick={AddItemToPurchase}>
              Add to Cart
            </div>
          </div>
          <div className="product-content">
            <Rating
              name="read-only"
              value={props.Rate}
              readOnly
              precision={0.5}
              size="small"
            />
            <h3 className="title">
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

export default Product;
