import React from "react";
import "../../Styles/Product_Page/ProductPage.css";
import Colors from "../../Components/Product_Page/Colors";
import DetailsThumb from "../../Components/Product_Page/DetailsThumb";
import AddToCary from "../../Components/Functions/AddToCary";

class ProductPage extends React.Component {
  state = {
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componenetDidMound() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { index } = this.state;
    const { ProductDetails, Count } = this.props;
    const productDetailsArray = [ProductDetails];

    const AddItemToPurchase = () => {
      AddToCary(ProductDetails);
      let numberofItems = JSON.parse(localStorage.getItem("purchaseProducts"));
      Count(numberofItems);
    };

    return (
      <div className="Product_Page_Card">
        {productDetailsArray.map((item) => (
          <div className="details" key={item._id}>
            <div className="big_img">
              <img src={item.src[index]} alt=""></img>
            </div>
            <div className="box">
              <div className="row">
                <div className="product-title">{item.title}</div>
                <span>${item.price}</span>
              </div>
              <Colors colors={item.colors}></Colors>

              <div className="product-desc">{item.description}</div>
              <div className="product-cont">{item.content}</div>
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              ></DetailsThumb>
              <button className="card" onClick={AddItemToPurchase}>
                Add To Card
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductPage;
