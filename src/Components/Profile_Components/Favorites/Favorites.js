import { React, useState } from "react";
import "../../../Styles/Profile_Page/Favorites/Favorites.css";

import FavoriteItems from "./FavoriteItems";
import FavoriteProducts from "./FavoriteProducts";

const Favorites = (props) => {
  let FavoriteItemsTitles = JSON.parse(
    localStorage.getItem("FavoriteProducts")
  );
  const [FavoriteItemsList, SetFavoriteItemsList] = useState(FavoriteItems);

  const FavItemDeleteHandler = (FItem) => {
    const NumberOfitemsForLoop = FavoriteItemsTitles.length;
    let NewFavItemTitles = FavoriteItemsTitles;
    let NewFavItems = [];

    for (let i = 0; i < NumberOfitemsForLoop; i++) {
      const index = NewFavItemTitles.indexOf(FItem);
      if (index > -1) {
        NewFavItemTitles.splice(index, 1);
      }
    }
    localStorage.setItem("FavoriteProducts", JSON.stringify(NewFavItemTitles));

    for (let Item of FavoriteItemsList) {
      if (FItem === Item.title) {
        continue;
      } else {
        NewFavItems.push(Item);
      }
    }

    SetFavoriteItemsList(NewFavItems);
  };

  return (
    <div className="Fav-Wrapper">
      <div className="Favorites">
        {FavoriteItemsList.map((Item) => (
          <FavoriteProducts
            ProductDetails={Item}
            title={Item.title}
            price={Item.price}
            description={Item.content}
            key={Item.id}
            image={Item.minisrc}
            refNum={Item.id}
            discount={Item.discount}
            FavItemDeleteHandler={FavItemDeleteHandler}
            Count={props.Count}
          ></FavoriteProducts>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
