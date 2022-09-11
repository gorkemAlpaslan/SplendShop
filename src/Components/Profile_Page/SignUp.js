import React, { useRef, useState } from "react";
import { useUserContext } from "../context/userContext";
import "./SignUp.css";

const SignUp = () => {
  const { registerUser, signInUser, forgotPassword, error } = useUserContext();

  const CssRef = useRef();
  const NameRef = useRef();
  const EMailRef = useRef();
  const PasswordRef = useRef();

  const LoginMail = useRef();
  const LoginPassword = useRef();

  const SignUpClicked = () => {
    const Container = CssRef.current;
    Container.className = "container right-panel-active";
  };

  const SignInClicked = () => {
    const Container = CssRef.current;
    Container.className = "container";
  };

  const SignUp = () => {
    const name = NameRef.current.value;
    const email = EMailRef.current.value;
    const password = PasswordRef.current.value;

    let isValid = {
      isValidName: false,
      isValidmail: false,
      isValidPassword: false,
    };

    if (/^[a-zA-Z ]{2,40}$/.test(name)) {
      NameRef.current.className = "InputForRegister";
      isValid.isValidName = true;
    } else {
      isValid.isValidName = false;
      NameRef.current.className = "InputForRegister ErrorBorders";
      NameRef.current.value = "";
      NameRef.current.placeholder = "Name Surname";
    }
    if (/\S+@\S+\.\S+/.test(email)) {
      EMailRef.current.className = "InputForRegister";
      isValid.isValidmail = true;
    } else {
      isValid.isValidmail = false;
      EMailRef.current.className = "InputForRegister ErrorBorders";
      EMailRef.current.value = "";
      EMailRef.current.placeholder = "Please Enter Valid E-mail";
    }
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
      isValid.isValidPassword = true;
      PasswordRef.current.className = "InputForRegister";
    } else {
      isValid.isValidPassword = false;
      PasswordRef.current.className = "InputForRegister ErrorBorders";
      PasswordRef.current.value = "";
      PasswordRef.current.placeholder =
        "Your Password Must Contain At Lease One Capital Latter and a Number";
    }

    if (isValid.isValidName && isValid.isValidmail && isValid.isValidPassword) {
      console.log("registered");
      registerUser(email, name, password);
    }
  };

  const SignIn = () => {
    const email = LoginMail.current.value;
    const password = LoginPassword.current.value;
    if (email && password) {
      signInUser(email, password);
    }
  };

  return (
    <div className="RegisterWraper">
      <div className="container " id="container" ref={CssRef}>
        <div className="form-container sign-up-container">
          <form action="#" className="FormForRegister" onSubmit={SignUp}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="InputForRegister"
              ref={NameRef}
            />

            <input
              type="email"
              placeholder="Email"
              className="InputForRegister"
              ref={EMailRef}
            />
            <input
              type="password"
              placeholder="Password"
              className="InputForRegister"
              ref={PasswordRef}
            />
            <button className="ButtonForRegister">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className="FormForRegister" onSubmit={SignIn}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            {
              //note for myself
              // edit the error message display
            }
            {error && <p>{error.slice(22).slice(0, -2)}</p>}
            <input
              type="email"
              placeholder="Email"
              className="InputForRegister"
              ref={LoginMail}
            />
            <input
              type="password"
              placeholder="Password"
              className="InputForRegister"
              ref={LoginPassword}
            />
            <a className="AnchorForRegister">Forgot your password?</a>
            <button className="ButtonForRegister">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="PForRegister">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ButtonForRegister"
                id="signIn"
                onClick={SignInClicked}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello!</h1>
              <p className="PForRegister">
                Enter your personal details and start Shoping with us
              </p>
              <button
                className="ButtonForRegister"
                id="signUp"
                onClick={SignUpClicked}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
