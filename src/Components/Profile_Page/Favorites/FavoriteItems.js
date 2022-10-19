let FavoriteItemsListOfObj = [];

let FavoriteItemsArray = JSON.parse(localStorage.getItem("FavoriteProducts"));
if (!FavoriteItemsArray) {
  FavoriteItemsArray = [];
  localStorage.setItem("FavoriteProducts", JSON.stringify([]));
}

for (let FavoriteItem of FavoriteItemsArray) {
  let Item = JSON.parse(localStorage.getItem(FavoriteItem));
  FavoriteItemsListOfObj.push(Item);
}

const FavoriteItems = [
  ...new Map(FavoriteItemsListOfObj.map((m) => [m.id, m])).values(),
];

export default FavoriteItems;
