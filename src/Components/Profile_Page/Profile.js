import React from "react";
import "./Profile.css";
import { useUserContext } from "../context/userContext";

const Profile = (props) => {
  const { logoutUser } = useUserContext();

  const logOut = () => {
    logoutUser();
  };

  return (
    <>
      <div>
        <div>LOGGED IN!</div>
      </div>
      <button onClick={logOut}>LOG OUT</button>
    </>
  );
};

export default Profile;
