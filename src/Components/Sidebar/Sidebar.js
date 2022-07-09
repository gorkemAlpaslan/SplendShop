import "./Sidebar.css";
import ColorList from "./ColorList";
import React, { useState } from "react";
import Select from "react-select";

const Sidebar = (props) => {
  const [filter, Setfilter] = useState({});

  const colorFilter = (colors) => {
    Setfilter({ color: colors });
    console.log(filter);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="Sidebar-Inner-Wrapper">
      <div className="unwrap">
        <Select options={options} />
      </div>
      <div className="aggregation-seperator"></div>
      <div className="unwrap">
        <Select options={options} />
      </div>
      <div className="aggregation-seperator"></div>
      <div className="unwrap">
        <Select options={options} />
      </div>
      <div className="aggregation-seperator"></div>
      <div className="unwrap">
        <Select options={options} />
      </div>
      <div className="aggregation-seperator"></div>
      <div className="unwrap">
        <Select options={options} />
      </div>
      <div className="aggregation-seperator"></div>
      <td class="unwrap">
        <h5>Gender:</h5>
        <div>
          <ColorList ColorTaker={colorFilter}></ColorList>
        </div>
      </td>
      <div className="aggregation-seperator"></div>
    </div>
  );
};

export default Sidebar;
