import { useState } from "react";
import Navbar from "./Components/Navbar_Components/Navbar";
import "./App.css";
import Product from "./Components/Product";
import NavbarUnder from "./Components/NavbarUnder";
import Profile from "./Components/Profile_Page/Profile";
import { Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [profilePage, SetProfilePage] = useState(false);

  const profilePageLoader = () => {
    SetProfilePage(true);
  };

  return (
    <div className="Card">
      <div className="Page-Navbar-Wrapper">
        <div className="Navbar">
          <Navbar profilePageLoad={profilePageLoader}></Navbar>
        </div>
      </div>
      <Route path="/profile">
        <div className="Body-Wraper">
          <div className="Login-Wrapper">
            <Profile></Profile>
          </div>
        </div>
      </Route>
      <Route path="/homepage">
        <div className="Navbar-Under">
          <div className="Navbar-Under-Card">
            <NavbarUnder></NavbarUnder>
          </div>
        </div>
        <div className="Body-Wraper">
          <div className="Sidebar-Wrapper">
            <Sidebar></Sidebar>
          </div>
          <div className="Items-List">
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
            <Product Item={[]}></Product>
          </div>
        </div>
      </Route>
    </div>
  );
}

export default App;
