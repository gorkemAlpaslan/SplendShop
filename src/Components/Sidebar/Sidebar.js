import "../.././Styles/Home_Page/Sidebar/Sidebar.css";
import React, { useState } from "react";
import Select from "react-select";
import chroma from "chroma-js";
import Button from "@mui/material/Button";

const Sidebar = (props) => {
  const [Category, SetCategory] = useState("Any");
  const [Gender, SetGender] = useState("Any");
  const [Size, SetSize] = useState("Any");
  const [color, SetColor] = useState([]);

  const CategoryOptions = [
    { value: "Any", label: "Any" },
    { value: "category-1", label: "category-1" },
    { value: "category-2", label: "category-2" },
    { value: "category-3", label: "category-3" },
    { value: "category-4", label: "category-4" },
    { value: "category-5", label: "category-5" },
  ];

  const GenderOptions = [
    { value: "Any", label: "Any" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unisex", label: "Unisex" },
  ];

  const SizeOptions = [
    { value: "Any", label: "Any" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ];

  const ColourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9" },
    { value: "blue", label: "Blue", color: "#0052CC" },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "32vh",
      fontSize: "1.3vh",
      textAlign: "center",
    }),

    control: (_, { selectProps: { width } }) => ({
      width: "34vh",
      height: "2vh",
      display: "flex",
      alignItems: "center",
      borderBottom: ".1vh solid black",
      fontSize: "1.3vh",
      padding: "0.4vh",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      width: "2vh",
      height: "2vh",
    }),
    dropdownIndicator: (provided, state) => ({
      display: "none",
    }),
  };

  const colourStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "32vh",
      fontSize: "1.3vh",
      textAlign: "center",
    }),

    dropdownIndicator: (provided, state) => ({
      display: "none",
    }),

    control: (_, { selectProps: { width } }) => ({
      width: "34vh",
      height: "2vh",
      display: "flex",
      alignItems: "center",
      borderBottom: ".1vh solid black",
      fontSize: "1.3vh",
      padding: "0.4vh",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  return (
    <div className="Side-Card">
      <div className="Sidebar-Inner-Wrapper">
        <div className="unwrap">
          <Select
            placeholder="Category"
            styles={customStyles}
            options={CategoryOptions}
            onChange={(e) => {
              SetCategory(e.value);
            }}
          />
        </div>
        <div className="unwrap">
          <Select
            placeholder="Gender"
            styles={customStyles}
            options={GenderOptions}
            onChange={(e) => {
              SetGender(e.value);
            }}
          />
        </div>
        <div className="unwrap">
          <Select
            placeholder="Size"
            styles={customStyles}
            options={SizeOptions}
            onChange={(e) => {
              SetSize(e.value);
            }}
          />
        </div>
        <div className="unwrap">
          <Select
            placeholder="Colour"
            closeMenuOnSelect={false}
            styles={colourStyles}
            isMulti
            options={ColourOptions}
            onChange={(e) => {
              let color = [];
              for (let a = 0; a < e.length; a++) {
                color.push(e[a].value);
              }
              SetColor(color);
            }}
          />
        </div>
      </div>
      <div className="button">
        <Button
          variant="contained"
          color="success"
          sx={{
            width: "12vh",
            fontSize: "2vh",
            height: "3vh",
          }}
          onClick={() => {
            props.FilterItem({
              category: Category,
              colors: color,
              gender: Gender,
              size: Size,
            });
            console.log({
              category: Category,
              colors: color,
              gender: Gender,
              size: Size,
            });
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
