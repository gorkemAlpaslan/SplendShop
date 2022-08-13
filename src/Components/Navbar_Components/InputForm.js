import "./InputForm.css";
import { GrSearch } from "react-icons/gr";
import SearchButton from "./SearchButton.png";

const InputForm = (props) => {
  return (
    <div>
      <div class="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-input"
        ></input>
        <a href="#" class="search-btn">
          <img src={SearchButton} className="Search_Button"></img>
        </a>
      </div>
    </div>
  );
};

export default InputForm;

// return (
//   <div>
//     <input className="Search-Input"></input>
//     <button className="Search-Button">button</button>
//   </div>
// );
