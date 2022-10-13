import "./Sidebar.css";
import React, { useState } from "react";
import Select from "react-select";
import chroma from "chroma-js";
import Button from "@mui/material/Button";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Sidebar = (props) => {
  const [Category, SetCategory] = useState("Any");
  const [Gender, SetGender] = useState("Any");
  const [Size, SetSize] = useState("Any");
  const [color, SetColor] = useState("Any");

  const [isCategoryActive, SetIsCategoryActive] = useState(false);
  const [isGenderActive, SetIsGenderActive] = useState(false);
  const [isSizeActive, SetIsSizeActive] = useState(false);
  const [isColorActive, SetIsColorActive] = useState(false);

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

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
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
          <div className="dropdown">
            <h3>Category :</h3>
            {isCategoryActive ? (
              <ArrowDropUpIcon
                onClick={() => {
                  SetIsCategoryActive(!isCategoryActive);
                }}
              />
            ) : (
              <ArrowDropDownIcon
                onClick={() => {
                  SetIsCategoryActive(!isCategoryActive);
                }}
              />
            )}
          </div>
          {isCategoryActive && (
            <Select
              options={CategoryOptions}
              onChange={(e) => {
                SetCategory(e.value);
              }}
            />
          )}
        </div>
        <div className="unwrap">
          <div className="dropdown">
            <h3>Gender :</h3>
            {isGenderActive ? (
              <ArrowDropUpIcon
                onClick={() => {
                  SetIsGenderActive(!isGenderActive);
                }}
              />
            ) : (
              <ArrowDropDownIcon
                onClick={() => {
                  SetIsGenderActive(!isGenderActive);
                }}
              />
            )}
          </div>
          {isGenderActive && (
            <Select
              options={GenderOptions}
              onChange={(e) => {
                SetGender(e.value);
              }}
            />
          )}
        </div>
        <div className="unwrap">
          <div className="dropdown">
            <h3>Size :</h3>
            {isSizeActive ? (
              <ArrowDropUpIcon
                onClick={() => {
                  SetIsSizeActive(!isSizeActive);
                }}
              />
            ) : (
              <ArrowDropDownIcon
                onClick={() => {
                  SetIsSizeActive(!isSizeActive);
                }}
              />
            )}
          </div>
          {isSizeActive && (
            <Select
              options={SizeOptions}
              onChange={(e) => {
                SetSize(e.value);
              }}
            />
          )}
        </div>
        <div className="unwrap">
          <div className="dropdown">
            <h3>Color :</h3>
            {isColorActive ? (
              <ArrowDropUpIcon
                onClick={() => {
                  SetIsColorActive(!isColorActive);
                }}
              />
            ) : (
              <ArrowDropDownIcon
                onClick={() => {
                  SetIsColorActive(!isColorActive);
                }}
              />
            )}
          </div>
          {isColorActive && (
            <Select
              closeMenuOnSelect={false}
              isMulti
              options={ColourOptions}
              styles={colourStyles}
              onChange={(e) => {
                let color = [];
                for (let a = 0; a < e.length; a++) {
                  color.push(e[a].value);
                }
                SetColor(color);
              }}
            />
          )}
        </div>
      </div>
      <div className="button">
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            props.FilterItem({
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
