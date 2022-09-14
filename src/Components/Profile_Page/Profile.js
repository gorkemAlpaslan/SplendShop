import React, { useRef, useState } from "react";
import "./Profile.css";
import { useUserContext } from "../context/userContext";
import Orders from "./Orders";

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
      <div className="ProfileNav">
        <h1>Account</h1>
        <button
          onClick={() => {
            SetNavControl("profile");
            Profile.current.className = "Selected";
            Order.current.className = "UnSelected";
          }}
          ref={Profile}
          className="Selected"
        >
          My Profile
        </button>
        <button
          className="UnSelected"
          onClick={() => {
            SetNavControl("orders");
            Order.current.className = "Selected";
            Profile.current.className = "UnSelected";
          }}
          ref={Order}
        >
          My Orders
        </button>
        <button className="UnSelected">My Assessments</button>
        <button className="UnSelected">My Seller Messages</button>
        <button className="UnSelected">Coupons</button>
        <button className="UnSelected">Help</button>
      </div>
      {navControl == "orders" && (
        <div className="OrderedItems">
          {OrderList.map((Item) => {
            return <Orders OrderedInfo={Item}></Orders>;
          })}
        </div>
      )}
      {navControl == "profile" && (
        <div className="AccountInformation">
          <div>
            <div>
              <h4>Name:</h4>
              <input value={user.displayName}></input>
            </div>
            <div>
              <h4>Surname:</h4>
              <input value={""}></input>
            </div>
          </div>
          <div>
            <h4>E-mail:</h4>
            <input value={user.email}></input>
          </div>
          <div>
            <h4>Phone Number:</h4>
            <input></input>
          </div>
          <div>
            <h4>Birth Day:</h4>
            <input type="date"></input>
          </div>
          <div>
            <h4>Gender:</h4>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <h4>Orders:</h4>
            <p>0</p>
          </div>
          <div className="buttons">
            <button> SAVE </button>
            <button onClick={logOut}>LOG OUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
