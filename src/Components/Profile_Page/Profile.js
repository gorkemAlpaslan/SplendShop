import React, { useState } from "react";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="Profile-Page-Wrapper">
      <div className="signin">
        <div action="#" method="post" autocomplete="off">
          <div className="group head">
            <h2>Welcome Back</h2>
            <p>Sign In To Continue</p>
          </div>
          <div className="group login-elements">
            <div for="username-field">Email or Username</div>
            <input
              type="text"
              name="username"
              id="username-field"
              required
            ></input>
          </div>
          <div className="group  login-elements">
            <div for="password-field">Password</div>
            <input
              type="password"
              name="password"
              id="password-field"
              required
            ></input>
            <span
              toggle="#password-field"
              className="fa fa-fw fa-eye field-icon toggle-password"
            ></span>
          </div>

          <div className="group">
            <button type="submit">
              <span>Login</span>
            </button>
          </div>
          <div className="group forgot-pass-link">
            <a href="#">Forget Password?</a>
          </div>
          <div className="group sign-up-link">
            <p>
              New User? <a href="#">Signup</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
