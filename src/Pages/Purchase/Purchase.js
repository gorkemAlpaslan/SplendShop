import React, { useRef, useState } from "react";
import "../../Styles/Purchase_Page/Purchase.css";
import "../../Components/Purchase_Page/PrePurchaseProduct";
import PrePurchaseProduct from "../../Components/Purchase_Page/PrePurchaseProduct";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import PrePayment from "../../Components/Purchase_Page/PrePayment";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";

let PurchasedItemsListOfObj = [];

let PuchasedItemsArray = JSON.parse(localStorage.getItem("purchaseProducts"));
if (!PuchasedItemsArray) {
  PuchasedItemsArray = [];
}

for (let PurchasedItem of PuchasedItemsArray) {
  let Item = JSON.parse(localStorage.getItem(PurchasedItem));
  PurchasedItemsListOfObj.push(Item);
}

const countDict = PurchasedItemsListOfObj.reduce((acc, curr) => {
  const { title } = curr;
  if (acc[title]) ++acc[title];
  else acc[title] = 1;
  return acc;
}, {});

const result = PurchasedItemsListOfObj.map((obj) => {
  obj["count"] = countDict[obj.title];
  localStorage.setItem(obj.title, JSON.stringify(obj));
  return obj;
});

const unique = [...new Map(result.map((m) => [m.id, m])).values()];

const Purchase = (props) => {
  const [PurchasedItems, SetPurchasedItems] = useState(unique);

  const PurchaseCancle = (PItem) => {
    const NumberOfitemsForLoop = PuchasedItemsArray.length;
    let NewPurchaseItemTitles = PuchasedItemsArray;
    let NewPurchaseItems = [];

    for (let i = 0; i < NumberOfitemsForLoop; i++) {
      const index = NewPurchaseItemTitles.indexOf(PItem);
      if (index > -1) {
        NewPurchaseItemTitles.splice(index, 1);
      }
    }
    localStorage.setItem(
      "purchaseProducts",
      JSON.stringify(NewPurchaseItemTitles)
    );

    for (let Item of PurchasedItems) {
      if (PItem === Item.title) {
        let DummyItem = Item;
        DummyItem.count = 0;
        localStorage.setItem(Item.title, JSON.stringify(DummyItem));
        continue;
      } else {
        NewPurchaseItems.push(Item);
      }
    }

    SetPurchasedItems(NewPurchaseItems);
  };

  const AddCount = (title) => {
    const newState = PurchasedItems.map((obj) => {
      if (obj.title === title) {
        let PItem = { ...obj, count: obj.count + 1 };
        localStorage.setItem(obj.title, JSON.stringify(PItem));
        return PItem;
      }
      return obj;
    });

    let NewPurchaseItemTitles = PuchasedItemsArray;
    NewPurchaseItemTitles.push(title);
    localStorage.setItem(
      "purchaseProducts",
      JSON.stringify(NewPurchaseItemTitles)
    );
    SetPurchasedItems(newState);
  };

  const SubCount = (title) => {
    const newState = PurchasedItems.map((obj) => {
      if (obj.title === title && obj.count > 0) {
        let PItem = { ...obj, count: obj.count - 1 };
        localStorage.setItem(obj.title, JSON.stringify(PItem));
        if (obj.count === 1) {
          sessionStorage.setItem("reloading", "true");
          window.location.reload(false);
        }
        return PItem;
      }
      return obj;
    });
    let NewPurchaseItemTitles = PuchasedItemsArray;
    const index = NewPurchaseItemTitles.indexOf(title);
    if (index > -1) {
      NewPurchaseItemTitles.splice(index, 1);
    }
    localStorage.setItem(
      "purchaseProducts",
      JSON.stringify(NewPurchaseItemTitles)
    );

    SetPurchasedItems(newState);
  };

  const NumberOfItemsHandler = (CountHandler) => {
    props.Count(CountHandler);
  };

  const Adresses = [
    {
      id: 0,
      AdressName: "Adress 1",
      DeliveryAdress:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lectus id nulla dictum efficitur. Donec malesuada libero et nulla convallis",
    },
  ];
  const [SavedAdresses, SetSavedAdresses] = useState(Adresses);
  const [SelectedAdress, SetSelectedAdress] = useState();

  const AddAdress = useRef();
  const AddAdressAdressName = useRef();
  const AddAdressDeliveryAdress = useRef();

  const handleAdressChange = (Adressid) => {
    SetSelectedAdress(Adressid);
  };
  const AddAdressHandler = () => {
    if (
      AddAdressAdressName.current.value !== "" &&
      AddAdressDeliveryAdress.current.value !== ""
    ) {
      let NewAddressTemp = {
        id: SavedAdresses.length,
        AdressName: AddAdressAdressName.current.value,
        DeliveryAdress: AddAdressDeliveryAdress.current.value,
      };
      SetSavedAdresses((prev) => {
        return [...prev, NewAddressTemp];
      });
      AddAdressAdressName.current.value = "";
      AddAdressDeliveryAdress.current.value = "";
      AddAdress.current.className = "AddAdressHolder";
    }
  };

  return (
    <div className="Purchase_Page">
      <div className="Purchase_Page_Wrapper">
        <div className="Purchase_Items">
          <div className="Title TitleAdress">
            <h2>Delivery Adress </h2>
            <p> (Add & Select Delivery Adress)</p>
          </div>
          <div className="Adresses">
            <div className="Add_New_Adresses">
              <div
                className="AddAdressHolder"
                ref={AddAdress}
                onClick={() => {
                  AddAdress.current.className = "AddAdressHide";
                }}
              >
                <h4>Add New Adress</h4>
              </div>
              <input
                className="Adress_Title_Input"
                ref={AddAdressAdressName}
                placeholder="Adress Name"
              ></input>
              <MdClose
                className="CancleAddAdress"
                onClick={() => {
                  AddAdress.current.className = "AddAdressHolder";
                }}
              ></MdClose>
              <textarea
                className="Adress_Input"
                ref={AddAdressDeliveryAdress}
                placeholder="Adress"
              ></textarea>

              <Button
                variant="outlined"
                className="AdressAddButton"
                onClick={AddAdressHandler}
                style={{
                  maxWidth: "18vh",
                  maxHeight: "3vh",
                  minWidth: "18vh",
                  minHeight: "3vh",
                  fontSize: "1.4vh",
                  border: ".2vh solid #abc9ff",
                }}
              >
                Add New Adress
              </Button>
            </div>
            {SavedAdresses.map((Adress) => {
              return (
                <div
                  id={Adress.id}
                  className="Saved_Adresses"
                  onClick={() => {
                    handleAdressChange(Adress.id);
                  }}
                >
                  <h5>{Adress.AdressName}</h5>
                  <p>{Adress.DeliveryAdress}</p>
                  <Checkbox
                    checked={SelectedAdress === Adress.id}
                    className="Checkbox"
                    sx={{
                      color: blue[800],
                      "&.Mui-checked": {
                        color: blue[400],
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: "3vh",
                        margin: 0,
                        padding: 0,
                      },
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {SelectedAdress !== undefined && (
          <div className="Purchase_Items">
            <div className="Title TitleProduct">
              <h2>Products </h2>
              <p>(Add & Remove Product)</p>
            </div>
            <div className="Pre_Purchase_Wrapper">
              {PurchasedItems.map((PurchaseItem) => (
                <PrePurchaseProduct
                  title={PurchaseItem.title}
                  price={PurchaseItem.price}
                  description={PurchaseItem.description}
                  key={PurchaseItem.id}
                  image={PurchaseItem.minisrc}
                  refNum={PurchaseItem.id}
                  Count={PurchaseItem.count}
                  Category={PurchaseItem.category}
                  Gender={PurchaseItem.gender}
                  PurchaseCancle={PurchaseCancle}
                  AddCount={AddCount}
                  SubCount={SubCount}
                  NumberOfItemsHandler={NumberOfItemsHandler}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="Payment_Wrapper">
        <PrePayment
          AdressIsSelected={SelectedAdress}
          DeliveryAdress={SavedAdresses[SelectedAdress]}
          ProductList={PurchasedItems}
          PurchasePageHandlerWhenOrderComplate={PurchaseCancle}
        ></PrePayment>
      </div>
    </div>
  );
};

export default Purchase;
