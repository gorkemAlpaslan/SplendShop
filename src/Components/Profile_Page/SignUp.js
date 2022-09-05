import React, { useRef, useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const CssRef = useRef();
  const NameRef = useRef();
  const EMailRef = useRef();
  const PasswordRef = useRef();

  const SignUpClicked = () => {
    const Container = CssRef.current;
    Container.className = "container right-panel-active";
  };

  const SignInClicked = () => {
    const Container = CssRef.current;
    Container.className = "container";
  };

  const Register = () => {
    const EMail = EMailRef.current.value;
    const UserName = NameRef.current.value;
    const Pass = PasswordRef.current.value;

    const NewUser = [{ Name: "", Email: "", Password: "" }];

    if (/^[A-Za-z]+$/.test(UserName)) {
      NameRef.current.className = "InputForRegister";
      NewUser[0].Name = UserName;
    } else {
      NameRef.current.className = "InputForRegister ErrorBorders";
      NameRef.current.value = "";
      NameRef.current.placeholder = "Your Username Can Only Contain Letters";
    }
    if (/\S+@\S+\.\S+/.test(EMail)) {
      EMailRef.current.className = "InputForRegister";
      NewUser[0].Email = EMail;
    } else {
      EMailRef.current.className = "InputForRegister ErrorBorders";
      EMailRef.current.value = "";
      EMailRef.current.placeholder = "Please Enter Valid Input";
    }
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(Pass)) {
      PasswordRef.current.className = "InputForRegister";
      NewUser[0].Password = Pass;
    } else {
      PasswordRef.current.className = "InputForRegister ErrorBorders";
      PasswordRef.current.value = "";
      PasswordRef.current.placeholder =
        "Your Password Must Contain At Lease One Capital latter and A Number";
    }
    if (
      NewUser[0].Name != "" &&
      NewUser[0].Email != "" &&
      NewUser[0].Password != ""
    ) {
      if (!localStorage.getItem("UserInfo")) {
        localStorage.setItem("UserInfo", JSON.stringify(NewUser));
      } else {
        let PrivUserInf = JSON.parse(localStorage.getItem("UserInfo"));
        for (let i = 0; i < PrivUserInf.length; i++) {
          if (PrivUserInf.some((e) => e.Email === EMail)) {
            alert("You already have an existing account.");
            break;
          } else {
            NewUser.push(PrivUserInf[i]);
            localStorage.setItem("UserInfo", JSON.stringify(NewUser));
            NameRef.current.value = "";
            EMailRef.current.value = "";
            PasswordRef.current.value = "";
            NameRef.current.placeholder = "";
            EMailRef.current.placeholder = "";
            PasswordRef.current.placeholder = "";
            SignInClicked();
          }
        }
      }
    }
  };

  return (
    <div className="RegisterWraper">
      <div className="container " id="container" ref={CssRef}>
        <div className="form-container sign-up-container">
          <form action="#" className="FormForRegister">
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="InputForRegister"
              ref={NameRef}
              onSubmit={Register}
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
            <button className="ButtonForRegister" onClick={Register}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className="FormForRegister">
            <h1>Sign in</h1>

            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              className="InputForRegister"
            />
            <input
              type="password"
              placeholder="Password"
              className="InputForRegister"
            />
            <a href="" className="AnchorForRegister">
              Forgot your password?
            </a>
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
              <h1>Hello, Friend!</h1>
              <p className="PForRegister">
                Enter your personal details and start journey with us
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
