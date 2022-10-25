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
import { useUserContext } from "./Components/context/userContext";
import Profile from "./Components/Profile_Page/Profile";
import Adds from "./Components/Adds/Adds";
import { Pagination, Stack } from "@mui/material";
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
  const [IsLoading, setIsLoading] = useState(false);
  const [currentPage, SetcurrentPage] = useState(1);
  const [ItemListFiltered, SetItemListFiltered] = useState(ItemList);
  const [DisplayList, SetDisplayList] = useState(ItemList);

  const HandlePage = (event, page) => {
    SetcurrentPage(page);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 500);
    const from = (currentPage - 1) * 12;
    const to = (currentPage - 1) * 12 + 12;
    const PaginatedItems = ItemListFiltered.filter((item, index) => {
      if (index < to && index >= from) {
        return true;
      }
      return false;
    });
    SetDisplayList(PaginatedItems);
    HandlePage("", currentPage);
    if (ItemListFiltered.length < 12) {
      SetcurrentPage(1);
    }
  }, [ItemListFiltered, currentPage]);

  const SearchedItem = (Searched) => {
    if (Searched === "") {
      SetItemListFiltered(ItemList);
    }
    const FilteredItemsList = [];
    for (let Item of ItemList) {
      if (Item.title.toLowerCase().includes(Searched.toLowerCase())) {
        FilteredItemsList.push(Item);
      } else if (Searched === "") {
        continue;
      }
    }

    SetItemListFiltered(FilteredItemsList);
  };

  const FilterItem = (Filtered) => {
    SetItemListFiltered(ItemList);
    let FilteredItemsList = ItemList;
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
    if (Filtered.colors.length > 0) {
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
            <Adds></Adds>
          </div>
          <div className="Body-Wraper">
            <div className="Sidebar-Wrapper">
              <Sidebar FilterItem={FilterItem}></Sidebar>
            </div>
            <div className="Items-List">
              {DisplayList.map((Item) => (
                <Product
                  ProductDetails={Item}
                  title={Item.title}
                  price={Item.price}
                  description={Item.content}
                  key={Item.id}
                  image={Item.minisrc}
                  refNum={Item.id}
                  discount={Item.discount}
                  Rate={Item.itemRate}
                  NumberOfItemsHandler={NumberOfItemsHandler}
                ></Product>
              ))}
            </div>
          </div>
          <Stack spacing={2} className="PaginationWraper">
            <Pagination
              count={Math.ceil(ItemListFiltered.length / 12)}
              size="large"
              onChange={HandlePage}
              page={currentPage}
            />
          </Stack>
        </div>
      </Route>
      <Route path="/signup">
        <div className="BodyContainer">
          <div className="Login-Wrapper">
            <div>
              {user ? <Profile></Profile> : IsLoading && <SignUp></SignUp>}
            </div>
          </div>
        </div>
      </Route>
      <Route path="/Purchase">
        <div className="Purchase-Wrapper">
          <Purchase Count={NumberOfItemsHandler} />
        </div>
      </Route>
      {ItemList.map((Item) => (
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
