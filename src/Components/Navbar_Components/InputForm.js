import "./InputForm.css";
import { GrSearch } from "react-icons/gr";
import SearchButton from "./SearchButton.png";

const InputForm = (props) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-input"
        ></input>
        <a href="#" className="search-btn">
          <img src={SearchButton} className="Search_Button"></img>
        </a>
      </div>
    </div>
  );
};

export default InputForm;
