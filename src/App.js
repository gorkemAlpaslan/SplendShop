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
import Favorites from "./Components/Favorites/Favorites";
import FavoriteItems from "./Components/Favorites/FavoriteItems";
import { useUserContext } from "./Components/context/userContext";
import Profile from "./Components/Profile_Page/Profile";

function App() {
  const { user } = useUserContext();

  let PuchasedItemsArray = JSON.parse(localStorage.getItem("purchaseProducts"));
  if (!PuchasedItemsArray) {
    PuchasedItemsArray = [];
  }

  const [purchasedItemNumber, SetPurchasedItemNumber] = useState(
    PuchasedItemsArray.length
  );

  const NumberOfItemsHandler = (ItemCounter) => {
    SetPurchasedItemNumber(ItemCounter.length);
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
      <div className="Page-Navbar-Wrapper">
        <div className="Navbar">
          <Navbar
            SearchedItem={SearchedItem}
            Count={purchasedItemNumber}
          ></Navbar>
        </div>
      </div>
      <Route path={["/homepage"]}>
        <div className="Page-Navbar-Wrapper">
          <div className="Navbar">
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
                  NumberOfItemsHandler={NumberOfItemsHandler}
                ></Product>
              ))}
            </div>
          </div>
        </div>
      </Route>
      <Route path="/signup">
        <div className="BodyContainer">
          <div className="Login-Wrapper">
            {user ? <Profile></Profile> : <SignUp></SignUp>}
          </div>
        </div>
      </Route>
      <Route path="/Favorites">
        <div className="BodyContainer">
          <div className="Body-Wraper">
            <Favorites NumberOfItemsHandler={NumberOfItemsHandler}></Favorites>
          </div>
        </div>
      </Route>
      <Route path="/Purchase">
        <div className="Purchase-Wrapper">
          <Purchase Count={NumberOfItemsHandler} />
        </div>
      </Route>
      {ItemsList.map((Item) => (
        <Route path={`/ProductPage/${Item.id}`}>
          <div className="ProductPageWraper">
            <ProductPage
              ProductDetails={Item}
              Count={NumberOfItemsHandler}
            ></ProductPage>
          </div>
        </Route>
      ))}
    </div>
  );
}

export default App;
