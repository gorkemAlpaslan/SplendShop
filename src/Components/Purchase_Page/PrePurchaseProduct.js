import React from "react";
import "../.././Styles/Purchase_Page/PrePurchaseProduct.css";
import { MdClose } from "react-icons/md";
import { ImPlus, ImMinus } from "react-icons/im";

const PrePurchaseProduct = (props) => {
  const PurchaseCancle = () => {
    props.PurchaseCancle(props.title);
    let numberofItems = JSON.parse(localStorage.getItem("purchaseProducts"));
    props.NumberOfItemsHandler(numberofItems);
  };

  const AddCount = () => {
    props.AddCount(props.title);
    let numberofItems = JSON.parse(localStorage.getItem("purchaseProducts"));
    props.NumberOfItemsHandler(numberofItems);
  };
  const SubCount = () => {
    props.SubCount(props.title);
    let numberofItems = JSON.parse(localStorage.getItem("purchaseProducts"));
    props.NumberOfItemsHandler(numberofItems);
  };

  return (
    <div className="Product_Purchase_Wrapper">
      <div className="Product_Purchase_Card">
        <a href={`/ProductPage/${props.refNum}`}>
          <img
            src={props.image}
            alt="product"
            className="Product_Purchase_Image"
          ></img>
        </a>
        <div className="Product_Purchase_Card_Info">
          <div>
            <div className="Product_Purchase_Card_Name">{props.title}</div>
            <div className="Product_Purchase_Info">{props.Category}</div>
            <div className="Product_Purchase_Info">{props.Gender}</div>
          </div>
          <div className="Purchase_Item_Count">
            <ImMinus
              className="Button_Cut Count_Button"
              onClick={SubCount}
            ></ImMinus>
            <div className="Count">{props.Count}</div>
            <ImPlus
              className="Button_Add Count_Button"
              onClick={AddCount}
            ></ImPlus>
          </div>
        </div>
      </div>
      <div className="Product_Purchase_Card_Price">
        <p>${props.price}</p>
        <p className="each">/ea</p>
      </div>
      <MdClose
        className="Product_Purchase_Card_Button"
        onClick={PurchaseCancle}
      ></MdClose>
    </div>
  );
};

export default PrePurchaseProduct;
