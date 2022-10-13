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
import ItemList from "./ItemList";
import Favorites from "./Components/Favorites/Favorites";
import { useUserContext } from "./Components/context/userContext";
import Profile from "./Components/Profile_Page/Profile";
import GifAdd from "./gif_one_splendshop.gif";
import AddOne from "./AddTwoOne.jpg";
import AddTwo from "./AddTwoTwo.jpg";
import AddThree from "./AddTwoThree.jpg";
import itemsforGif from "./itemsforGif.png";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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

  const FilterItem = (Filtered) => {
    SetItemListFiltered(ItemsList);
    let FilteredItemsList = ItemsList;
    if (Filtered.category !== "Any") {
      FilteredItemsList = FilteredItemsList.filter(
        (item) => item.category === Filtered.category
      );
    }
    if (Filtered.gender !== "Any") {
      FilteredItemsList = FilteredItemsList.filter(
        (item) => item.gender === Filtered.gender
      );
    }
    if (Filtered.size !== "Any") {
      FilteredItemsList = FilteredItemsList.filter(
        (item) => item.size === Filtered.size
      );
    }
    if (Filtered.colors !== "Any") {
      FilteredItemsList = FilteredItemsList.filter((item) => {
        for (let i = 0; i < Filtered.colors.length; i++) {
          if (item.colors.includes(Filtered.colors[i])) {
            return true;
          }
        }
        return false;
      });
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
            <div className="AddsWrapper">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidersPerView={1}
                loop
                autoplay={true}
                pagination={{ clickable: true }}
                className="addTwo"
              >
                <SwiperSlide>
                  <a href="/ProductPage/9">
                    <img src={AddTwo} alt="AddTwo" className="addTwoPngs"></img>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="/ProductPage/2">
                    <img src={AddOne} alt="AddOne" className="addTwoPngs"></img>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="/ProductPage/12">
                    <img
                      src={AddThree}
                      alt="AddThree"
                      className="addTwoPngs"
                    ></img>
                  </a>
                </SwiperSlide>
              </Swiper>
              <a href="/homepage" className="addGif">
                <img src={GifAdd} alt="advertiseGif" className="addGif" />
                <div className="gif-photo">
                  <img
                    src={itemsforGif}
                    alt="AddTwo"
                    className="addTwoPngs"
                  ></img>
                </div>
              </a>
            </div>
          </div>
          <div className="Body-Wraper">
            <div className="Sidebar-Wrapper">
              <Sidebar FilterItem={FilterItem}></Sidebar>
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
            <div>{user ? <Profile></Profile> : <SignUp></SignUp>}</div>
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
