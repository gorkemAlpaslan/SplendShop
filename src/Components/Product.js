import "./Product.css";
import image from "./image.png";
const Product = (props) => {
  return (
    <div class="boutique-product">
      <a href="#">
        <div class="image-container">
          <img class="p-card-img" src={image}></img>
        </div>
        <div class="description fixed-elements">
          <div class="product-brand-description two-line-text">
            <span class="brand">ITEM HEAD</span>
            <span class="name">ITEM</span>
          </div>
          <div class="price-container">
            <div class="prices">
              <div class="price-box discountedv2">$24</div>
            </div>
          </div>
          <div></div>
        </div>
      </a>
      <div></div>
    </div>

    // <a href="#" className="Product-Card-Item">
    //   <div class="image-container">
    //     <img src={image} className="Product-Image"></img>
    //   </div>
    //   <div className="Product-Description-Wrapper">
    //     <div className="Product-Description">
    //       <span className="Product-Description-Head">Kulaklık</span>
    //       <span className="Product-Description-Exp">sdfgdfsgdsfgdsfgd</span>
    //     </div>
    //     <div className="Price"> 256</div>
    //   </div>
    // </a>
  );
};

export default Product;
