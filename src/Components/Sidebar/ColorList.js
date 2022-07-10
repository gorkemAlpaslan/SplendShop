import "./ColorList.css";
import { useState } from "react";

const ColorList = (props) => {
  const [RedisActive, setRedisActive] = useState(true);
  const [OrangeisActive, setOrangeisActive] = useState(true);
  const [YellowisActive, setYellowisActive] = useState(true);
  const [GreenisActive, setGreenisActive] = useState(true);
  const [BlueisActive, setBlueisActive] = useState(true);
  const [PurpleisActive, setPurpleisActive] = useState(true);

  const ColorList = [
    { red: 0, orange: 0, yellow: 0, green: 0, blue: 0, purple: 0 },
  ];

  const colorTaker = (event) => {
    if (event.target.dataset.user === "red") {
      setRedisActive((current) => !current);
    } else if (event.target.dataset.user === "orange") {
      setOrangeisActive((current) => !current);
    } else if (event.target.dataset.user === "yellow") {
      setYellowisActive((current) => !current);
    } else if (event.target.dataset.user === "green") {
      setGreenisActive((current) => !current);
    } else if (event.target.dataset.user === "blue") {
      setBlueisActive((current) => !current);
    } else if (event.target.dataset.user === "purple") {
      setPurpleisActive((current) => !current);
    }
  };

  return (
    <div className="Color-List-Wrapper">
      <div className="Color-List">
        <div
          className={
            RedisActive ? "Red-color Colors" : "Red-color Colors Selected-Color"
          }
          data-user="red"
          onClick={colorTaker}
        ></div>
        <div
          className={
            OrangeisActive
              ? "Orange-color Colors"
              : "Orange-color Colors Selected-Color"
          }
          data-user="orange"
          onClick={colorTaker}
        ></div>
        <div
          className={
            YellowisActive
              ? "Yellow-color Colors"
              : "Yellow-color Colors Selected-Color"
          }
          data-user="yellow"
          onClick={colorTaker}
        ></div>
        <div
          className={
            GreenisActive
              ? "Green-color Colors"
              : "Green-color Colors Selected-Color"
          }
          data-user="green"
          onClick={colorTaker}
        ></div>
        <div
          className={
            BlueisActive
              ? "Blue-color Colors"
              : "Blue-color Colors Selected-Color"
          }
          data-user="blue"
          onClick={colorTaker}
        ></div>
        <div
          className={
            PurpleisActive
              ? "Purple-color Colors"
              : "Purple-color Colors Selected-Color"
          }
          data-user="purple"
          onClick={colorTaker}
        ></div>
      </div>
    </div>
  );
};

export default ColorList;
