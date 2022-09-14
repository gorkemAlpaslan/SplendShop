import { useState, useRef } from "react";
import "./Navbar.css";
import { useUserContext } from "../context/userContext";
import InputForm from "./InputForm";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { auth } from "../Firebase/index";

const Navbar = (props) => {
  const SearchedItem = (event) => {
    props.SearchedItem(event);
  };

  const { user } = useUserContext();

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
          <a
            href="/signup"
            className="Navbar-Profile-Bar-Profile Navbar-Profile-Bar"
          >
            <CgProfile></CgProfile>
            {user ? <p>{user.displayName}</p> : <p>SignIn</p>}
          </a>
          <a
            href="/Favorites"
            className="Navbar-Favorites-Bar-Profile Navbar-Profile-Bar"
          >
            <AiOutlineHeart></AiOutlineHeart>
            <p>Favorites</p>
          </a>
          <a
            href="/Purchase"
            className="Navbar-Purchases-Bar-Profile Navbar-Profile-Bar"
          >
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
