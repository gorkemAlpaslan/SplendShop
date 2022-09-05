import { useRef, useState } from "react";
import "./InputForm.css";
import { GrSearch } from "react-icons/gr";
import SearchButton from "./SearchButton.png";

const InputForm = (props) => {
  const SearchRef = useRef();

  const SearchHandler = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      props.SearchedItem(SearchRef.current.value);
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-input"
          onKeyDown={SearchHandler}
          ref={SearchRef}
        ></input>
        <a href="#" className="search-btn">
          <img
            src={SearchButton}
            className="Search_Button"
            onClick={SearchHandler}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default InputForm;
