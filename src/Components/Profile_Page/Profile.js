import React, { useRef, useState } from "react";
import "./Profile.css";
import { useUserContext } from "../context/userContext";
import Orders from "./Orders";
import Button from "react-bootstrap/Button";

const Profile = (props) => {
  const { logoutUser, user } = useUserContext();

  const [navControl, SetNavControl] = useState("profile");
  const Order = useRef();
  const Profile = useRef();

  const logOut = () => {
    logoutUser();
  };

  let OrderList = JSON.parse(localStorage.getItem("Orders"));

  if (!JSON.parse(localStorage.getItem("Orders"))) {
    OrderList = [];
  }

  return (
    <div className="Profile">
      {navControl == "profile" && (
        <div className="AccountInformation">
          <div className="main-profile-info">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              className="profile-image"
            ></img>
            <p>Profile Name</p>
            <p>E-Mail</p>
            <button onClick={logOut}>Log Out</button>
          </div>
          <div className="profile-settings">
            <p>Profile Setting</p>
            <div className="double-input">
              <div>
                <div>Name</div>
                <input></input>
              </div>
              <div>
                <div>Surname</div>
                <input></input>
              </div>
            </div>
            <div className="bar">
              <div>Mobile Number</div>
              <input></input>
            </div>
            <div className="bar">
              <div>Address Line 1</div>
              <input></input>
            </div>
            <div className="bar">
              <div>Address Line 2</div>
              <input></input>
            </div>
            <div className="bar">
              <div>Postcode</div>
              <input></input>
            </div>

            <div className="double-input">
              <div>
                <div>Country</div>
                <input></input>
              </div>
              <div>
                <div>State/Region</div>
                <input></input>
              </div>
            </div>
            <div className="bar">
              <Button variant="success">Save</Button>
            </div>
          </div>
          <div className="prev.orders">
            <div className="OrderedItems">
              {OrderList.map((Item) => {
                return <Orders OrderedInfo={Item}></Orders>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
