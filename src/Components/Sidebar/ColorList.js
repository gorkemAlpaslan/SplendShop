import "./ColorList.css";
import { useState } from "react";

const ColorList = (props) => {
  const ColorSelected = [];

  const colorTaker = (event) => {
    console.log(event.target.dataset.user);
  };

  return (
    <div className="Color-List-Wrapper">
      <div className="Color-List">
        <div
          className="Red-color Colors"
          data-user="red"
          onClick={colorTaker}
        ></div>
        <div
          className="Orange-color Colors"
          data-user="orange"
          onClick={colorTaker}
        ></div>
        <div
          className="Yellow-color Colors"
          data-user="yellow"
          onClick={colorTaker}
        ></div>
        <div
          className="Green-color Colors"
          data-user="green"
          onClick={colorTaker}
        ></div>
        <div
          className="Blue-color Colors"
          data-user="blue"
          onClick={colorTaker}
        ></div>
        <div
          className="Purple-color Colors"
          data-user="purple"
          onClick={colorTaker}
        ></div>
      </div>
    </div>
  );
};

export default ColorList;
