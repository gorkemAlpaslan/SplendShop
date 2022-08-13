import "./ColorList.css";
import { useState, useEffect } from "react";

const ColorList = (props) => {
  const [RedisActive, setRedisActive] = useState(true);
  const [OrangeisActive, setOrangeisActive] = useState(true);
  const [YellowisActive, setYellowisActive] = useState(true);
  const [GreenisActive, setGreenisActive] = useState(true);
  const [BlueisActive, setBlueisActive] = useState(true);
  const [PurpleisActive, setPurpleisActive] = useState(true);

  const [ColorList, SetColorList] = useState([]);

  const ColorTaker = (event) => {
    let color = event.target.dataset.user;
    if (color === "red") {
      setRedisActive((current) => !current);
    } else if (color === "orange") {
      setOrangeisActive((current) => !current);
    } else if (color === "yellow") {
      setYellowisActive((current) => !current);
    } else if (color === "green") {
      setGreenisActive((current) => !current);
    } else if (color === "blue") {
      setBlueisActive((current) => !current);
    } else if (color === "purple") {
      setPurpleisActive((current) => !current);
    }
    SetColorList((ColorList) => [...ColorList, event.target.dataset.user]);
  };

  const ColorData = () => {
    props.ColorTaker(ColorList);
  };

  return (
    <div className="Color-List-Wrapper">
      <div className="Color-List">
        <div
          className={
            RedisActive ? "Red-color Colors" : "Red-color Colors Selected-Color"
          }
          data-user="red"
          onClick={ColorTaker}
        ></div>
        <div
          className={
            OrangeisActive
              ? "Orange-color Colors"
              : "Orange-color Colors Selected-Color"
          }
          data-user="orange"
          onClick={ColorTaker}
        ></div>
        <div
          className={
            YellowisActive
              ? "Yellow-color Colors"
              : "Yellow-color Colors Selected-Color"
          }
          data-user="yellow"
          onClick={ColorTaker}
        ></div>
        <div
          className={
            GreenisActive
              ? "Green-color Colors"
              : "Green-color Colors Selected-Color"
          }
          data-user="green"
          onClick={ColorTaker}
        ></div>
        <div
          className={
            BlueisActive
              ? "Blue-color Colors"
              : "Blue-color Colors Selected-Color"
          }
          data-user="blue"
          onClick={ColorTaker}
        ></div>
        <div
          className={
            PurpleisActive
              ? "Purple-color Colors"
              : "Purple-color Colors Selected-Color"
          }
          data-user="purple"
          onClick={ColorTaker}
        ></div>
        <button onClick={ColorData} className="FML">
          Save
        </button>
      </div>
    </div>
  );
};

export default ColorList;
