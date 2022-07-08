import "./Sidebar.css";
import ColorList from "./ColorList";

const Sidebar = (props) => {
  return (
    <div className="Sidebar-Inner-Wrapper">
      <td class="unwrap">
        <h5>Gender:</h5>
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Unisex</option>
        </select>
      </td>
      <td class="unwrap">
        <h5>Gender:</h5>
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Unisex</option>
        </select>
      </td>{" "}
      <td class="unwrap">
        <h5>Gender:</h5>
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Unisex</option>
        </select>
      </td>{" "}
      <td class="unwrap">
        <h5>Gender:</h5>
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Unisex</option>
        </select>
      </td>{" "}
      <td class="unwrap">
        <h5>Gender:</h5>
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Unisex</option>
        </select>
      </td>{" "}
      <td class="unwrap">
        <h5>Gender:</h5>
        <div>
          <ColorList></ColorList>
        </div>
      </td>
    </div>
  );
};

export default Sidebar;
