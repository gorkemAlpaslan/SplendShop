import { useState } from "react";
import "./InputForm.css";
import { GrSearch } from "react-icons/gr";
import SearchButton from "./SearchButton.png";

const InputForm = (props) => {
  const [ItemSearched, SetItemSearched] = useState("");

  const OnChangeHandler = (event) => {
    SetItemSearched(event.target.value);
  };

  const SearchHandler = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      props.SearchedItem(ItemSearched);
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
          onChange={OnChangeHandler}
          onKeyDown={SearchHandler}
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
