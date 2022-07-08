import { useState } from "react";
import "./Navbar.css";

import InputForm from "./InputForm";

import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = (props) => {
  const profilePage = () => {
    props.profilePageLoad();
  };

  return (
    <div className="Navbar-Main-Wrapper">
      <div className="Navbar-Wrapper">
        <a href="/homepage" className="Navbar-Icon-Wrapper">
          SplendShop
        </a>
        <div className="Navbar-Search-Bar-Wrapper ">
          <InputForm></InputForm>
        </div>
        <div className="Navbar-Profile-Bar-Wrapper">
          <a
            href="/profile"
            className="Navbar-Profile-Bar-Profile Navbar-Profile-Bar"
            onClick={profilePage}
          >
            <CgProfile></CgProfile>
            <p>Profile</p>
          </a>
          <a
            href="#"
            className="Navbar-Favorites-Bar-Profile Navbar-Profile-Bar"
          >
            <AiOutlineHeart></AiOutlineHeart>
            <p>Favorites</p>
          </a>
          <a
            href="#"
            className="Navbar-Purchases-Bar-Profile Navbar-Profile-Bar"
          >
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
            <p>Purchases</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
