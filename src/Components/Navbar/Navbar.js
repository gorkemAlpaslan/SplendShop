import "../../Styles/Home_Page/Navbar/Navbar.css";
import { useUserContext } from "../../Context/userContext";
import InputForm from "./InputForm";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const SearchedItem = (event) => {
    props.SearchedItem(event);
  };

  const { user } = useUserContext();
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 500);
  }, []);
  return (
    <div className="Navbar-Main-Wrapper">
      <div className="Navbar-Wrapper">
        <a href="/homepage" className="Navbar-Icon-Wrapper">
          SplendShop
        </a>
        <div className="Navbar-Search-Bar-Wrapper ">
          <InputForm SearchedItem={SearchedItem}></InputForm>
        </div>
        <div className="Navbar-Profile-Bar-Wrapper">
          <a href="/signup" className="Navbar-Profile-Bar">
            <CgProfile></CgProfile>
            {user ? <p>{user.displayName}</p> : IsLoading && <p>SignIn</p>}
          </a>

          <a href="/Purchase" className="Navbar-Profile-Bar">
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
            <p className="Total-Count-Rel">Purchases</p>
            {props.Count > 0 && (
              <div className="Total-Count">{props.Count}</div>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
