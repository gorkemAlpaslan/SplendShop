import React, { useRef, useState } from "react";
import "../../../Styles/Profile_Page/Profile.css";
import { useUserContext } from "../../../Context/userContext";
import EachOrder from "../../../Components/Profile_Components/Orders_Component/EachOrder";
import Button from "react-bootstrap/Button";
import Favorites from "../../../Components/Profile_Components/Favorites/Favorites";

const Profile = (props) => {
  const { logoutUser, user } = useUserContext();

  const [navControl, SetNavControl] = useState("profileSection");
  const OrderRef = useRef();
  const ProfileRef = useRef();
  const FavoritesRef = useRef();

  const logOut = () => {
    logoutUser();
  };

  let OrderList = JSON.parse(localStorage.getItem("Orders"));

  if (!JSON.parse(localStorage.getItem("Orders"))) {
    OrderList = [];
  }

  let PuchasedItemsArray = JSON.parse(localStorage.getItem("purchaseProducts"));
  if (!PuchasedItemsArray) {
    PuchasedItemsArray = [];
  }

  return (
    <div className="Profile">
      <div className="Profile_Navigation">
        <button
          ref={ProfileRef}
          className="IsSelected"
          onClick={() => {
            SetNavControl("profileSection");
            ProfileRef.current.className = "IsSelected";
            FavoritesRef.current.className = "";
            OrderRef.current.className = "";
          }}
        >
          USER SETTINGS
        </button>
        <button
          ref={FavoritesRef}
          onClick={() => {
            SetNavControl("favoritesSection");
            ProfileRef.current.className = "";
            FavoritesRef.current.className = "IsSelected";
            OrderRef.current.className = "";
          }}
        >
          Favorites
        </button>
        <button
          ref={OrderRef}
          onClick={() => {
            SetNavControl("ordersSection");
            ProfileRef.current.className = "";
            FavoritesRef.current.className = "";
            OrderRef.current.className = "IsSelected";
          }}
        >
          ORDERS
        </button>
      </div>
      {navControl === "profileSection" && (
        <div className="AccountInformation">
          <div className="main-profile-info">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="profilePhoto"
              className="profile-image"
            ></img>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
            <button onClick={logOut}>Log Out</button>
          </div>
          <div className="profile-settings">
            <p>Profile Setting</p>
            <div className="double-input">
              <div>
                <div>Name</div>
                <input value={user.displayName}></input>
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
        </div>
      )}
      {navControl === "ordersSection" && (
        <div className="prev.orders">
          <div className="OrderedItems">
            {OrderList.map((Item) => {
              return <EachOrder OrderedInfo={Item}></EachOrder>;
            })}
          </div>
        </div>
      )}
      {navControl === "favoritesSection" && (
        <Favorites Count={props.Count}></Favorites>
      )}
    </div>
  );
};

export default Profile;
