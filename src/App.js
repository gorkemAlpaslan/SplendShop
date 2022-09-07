import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar_Components/Navbar";
import "./App.css";
import Product from "./Components/Product";
import NavbarUnder from "./Components/Navbar_Components/NavbarUnder";
import SignUp from "./Components/Profile_Page/SignUp";
import { Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import ProductPage from "./Components/Product_Page/ProductPage";
import Purchase from "./Components/Purchase/Purchase";
import { components } from "react-select";
import ItemList from "./ItemList";

function App() {
  ///// WAS GOING TO USE FAKE SHOP API BUT I DECITE TO CREATE MY OWN ITEM LIST /////////
  // // const [ItemListTaker, SetItemListTaker] = useState([]);
  // // const ItemListData = async () => {
  // //   const tempList = await fetch("https://api.escuelajs.co/api/v1/products")
  // //     .then((res) => res.json())
  // //     .then((json) => {
  // //       return json;
  // //     });
  // //   SetItemListTaker(tempList);
  // // };

  // // useEffect(() => {
  // //   ItemListData();
  // // }, []);

  const [profilePage, SetProfilePage] = useState(false);

  const profilePageLoader = () => {
    SetProfilePage(true);
  };

  const ItemsList = ItemList;

  const [ItemListFiltered, SetItemListFiltered] = useState(ItemsList);

  const SearchedItem = (Searched) => {
    SetItemListFiltered(ItemsList);
    const FilteredItemsList = [];
    for (let Item of ItemsList) {
      if (Item.title.toLowerCase().includes(Searched.toLowerCase())) {
        FilteredItemsList.push(Item);
      } else if (Searched === "") {
        continue;
      }
    }
    SetItemListFiltered(FilteredItemsList);
  };

  return (
    <div className="Card">
      <Route path={["/homepage"]}>
        <div className="Page-Navbar-Wrapper">
          <div className="Navbar">
            <Navbar
              profilePageLoad={profilePageLoader}
              SearchedItem={SearchedItem}
            ></Navbar>
            <div>
              <NavbarUnder></NavbarUnder>
            </div>
          </div>
        </div>
        <div className="BodyContainer">
          <div className="Body-Wraper">
            <div className="Sidebar-Wrapper">
              <Sidebar></Sidebar>
            </div>
            <div className="Items-List">
              {ItemListFiltered.map((Item) => (
                <Product
                  ProductDetails={Item}
                  title={Item.title}
                  price={Item.price}
                  description={Item.content}
                  key={Item.id}
                  image={Item.minisrc}
                  refNum={Item.id}
                  discount={Item.discount}
                ></Product>
              ))}
            </div>
          </div>
        </div>
      </Route>
      <Route path="/profile">
        <div className="Page-Navbar-Wrapper">
          <div className="Navbar">
            <Navbar
              profilePageLoad={profilePageLoader}
              SearchedItem={SearchedItem}
            ></Navbar>
          </div>
        </div>
        <div className="Body-Wraper">
          <div className="Login-Wrapper">
            <SignUp></SignUp>
          </div>
        </div>
      </Route>
      <Route path="/Purchase">
        <div className="Page-Navbar-Wrapper">
          <div className="Navbar">
            <Navbar
              profilePageLoad={profilePageLoader}
              SearchedItem={SearchedItem}
            ></Navbar>
          </div>
        </div>
        <div className="Purchase-Wrapper">
          <Purchase />
        </div>
      </Route>
      {ItemsList.map((Item) => (
        <Route path={`/ProductPage/${Item.id}`}>
          <div className="Page-Navbar-Wrapper">
            <div className="Navbar">
              <Navbar
                profilePageLoad={profilePageLoader}
                SearchedItem={SearchedItem}
              ></Navbar>
            </div>
          </div>
          <div className="ProductPageWraper">
            <ProductPage ProductDetails={Item}></ProductPage>
          </div>
        </Route>
      ))}
    </div>
  );
}

export default App;
