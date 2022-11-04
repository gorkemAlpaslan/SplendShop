import { useRef } from "react";
import "../../Styles/Home_Page/Navbar/InputForm.css";
import SearchButton from "../../Images/SearchButton.png";

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
        <div href="/" className="search-btn">
          <img
            alt="SearchButton"
            src={SearchButton}
            className="Search_Button"
            onClick={SearchHandler}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
