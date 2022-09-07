import "./Sidebar.css";
import React, { useState } from "react";
import Select from "react-select";

const Sidebar = (props) => {
  const [FilterList, SetFilterList] = useState();

  const ColorHandler = (colors) => {
    console.log(colors);
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
      <h2 className="Filter-Title">Filter</h2>
      <div className="unwrap select-top">
        <h3>Filter-Option :</h3>
        <Select options={Genders} />
      </div>
      <div className="unwrap">
        <h3>Filter-Option :</h3>
        <Select options={Category} />
      </div>
      <div className="unwrap">
        <h3>Filter-Option :</h3>
        <Select options={Size} />
      </div>
      <div className="unwrap">
        <h3>Filter-Option :</h3>
        <Select options={ProductRating} />
      </div>
      <div className="unwrap">
        <h3>Filter-Option :</h3>
        <Select options={Price} />
      </div>
    </div>
  );
};

export default Sidebar;
