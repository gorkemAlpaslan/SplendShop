import "./InputForm.css";
import { GrSearch } from "react-icons/gr";

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
          <GrSearch></GrSearch>
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
