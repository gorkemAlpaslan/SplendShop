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

  const Genders = [
    { value: "all", label: "Any" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
  ];

  const Category = [
    { value: "all", label: "Any" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
  ];

  const Size = [
    { value: "all", label: "Any" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
  ];

  const ProductRating = [
    { value: "all", label: "Any" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
  ];

  const Price = [
    { value: "all", label: "Any" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
  ];

  return (
    <div className="Sidebar-Inner-Wrapper">
      <div className="unwrap">
        <Select options={Genders} />
      </div>
      <div className="aggregation-seperator"></div>
      <div className="unwrap">
        <Select options={Category} />
      </div>
      <div className="aggregation-seperator"></div>
      <div className="unwrap">
        <Select options={Size} />
      </div>
      <div className="aggregation-seperator"></div>
      <div className="unwrap">
        <Select options={ProductRating} />
      </div>
      <div className="aggregation-seperator"></div>
      <div className="unwrap">
        <Select options={Price} />
      </div>
      <div className="aggregation-seperator"></div>
      <td class="unwrap">
        <h5>Color</h5>
        <div>
          <ColorList ColorTaker={colorFilter}></ColorList>
        </div>
      </td>
      <div className="aggregation-seperator"></div>
    </div>
  );
};

export default Sidebar;
