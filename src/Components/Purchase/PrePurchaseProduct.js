import React from "react";
import "./PrePurchaseProduct.css";
import { MdClose } from "react-icons/md";
import { ImPlus, ImMinus } from "react-icons/im";

const PrePurchaseProduct = (props) => {
  const PurchaseCancle = () => {
    props.PurchaseCancle(props.title);
  };

  const AddCount = () => {
    props.AddCount(props.title);
  };
  const SubCount = () => {
    props.SubCount(props.title);
  };

  return (
    <div className="Product_Purchase_Wrapper">
      <div className="Product_Purchase_Card">
        <img
          src={props.image}
          alt="product"
          className="Product_Purchase_Image"
        ></img>
        <div className="Product_Purchase_Card_Info">
          <div className="Product_Purchase_Card_Name">{props.title}</div>
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
        <div className="Product_Purchase_Card_Price">${props.price}</div>
      </div>
      <MdClose
        className="Product_Purchase_Card_Button"
        onClick={PurchaseCancle}
      ></MdClose>
    </div>
  );
};

export default PrePurchaseProduct;
