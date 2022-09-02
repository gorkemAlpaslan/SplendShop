import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar_Components/Navbar";
import "./App.css";
import Product from "./Components/Product";
import NavbarUnder from "./Components/Navbar_Components/NavbarUnder";
import Profile from "./Components/Profile_Page/Profile";
import { Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import ProductPage from "./Components/Product_Page/ProductPage";
import Purchase from "./Components/Purchase/Purchase";

function App() {
  const [profilePage, SetProfilePage] = useState(false);

  const profilePageLoader = () => {
    SetProfilePage(true);
  };

  const ItemsList = [
    {
      id: "1",
      title: "JBL Go 3",
      minisrc: [
        "https://cdn.dsmcdn.com/ty380/product/media/images/20220401/12/80332534/122033970/1/1_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty380/product/media/images/20220401/12/80332534/122033970/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty380/product/media/images/20220401/12/80332467/121909130/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty469/product/media/images/20220704/11/134887749/121909125/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty464/product/media/images/20220629/19/132291634/122064631/1/1_org_zoom.jpg",
      ],
      description: "Go 3",
      content:
        "With its new eye-catching edgy design, colorful fabrics and expressive details this a must-have accessory for your next outing. Your tunes will lift you up with JBL Pro Sound, it's IP67 waterproof and dustproof so you can keep listening rain or shine, and with its integrated loop, you can carry it anywhere.",
      price: 40,
      colors: ["red", "black", "orange", "green"],
      count: 1,
    },
    {
      id: "2",
      title: "Nike Shoes",
      minisrc: [
        "https://cdn.dsmcdn.com/ty80/product/media/images/20210304/19/68765723/141042520/1/1_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty80/product/media/images/20210304/19/68765723/141042520/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty82/product/media/images/20210304/19/68765723/141042520/2/2_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty78/product/media/images/20210304/19/68765723/141042520/3/3_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty78/product/media/images/20210304/19/68765723/141042520/4/4_org_zoom.jpg",
      ],
      description: "Nike Shoes",
      content:
        "Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar. Kampanya fiyatından satılmak üzere 5 adetten az stok bulunmaktadır. İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir. Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledi",
      price: 92,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
    {
      id: "3",
      title: "Nike Nk Acdmy Team M Duff Unisex",
      minisrc: [
        "https://cdn.dsmcdn.com/ty105/product/media/images/20210426/13/83091765/147900303/6/6_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty105/product/media/images/20210426/13/83091765/147900303/6/6_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty106/product/media/images/20210426/13/83091765/147900303/5/5_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty106/product/media/images/20210426/13/83091765/147900303/8/8_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty105/product/media/images/20210426/13/83091765/147900303/2/2_org_zoom.jpg",
      ],
      description: "Bag",
      content: "Nike Bag",
      price: 25,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },

    {
      id: "4",
      title: "Avva Erkek T-shirt",
      minisrc: [
        "https://cdn.dsmcdn.com/ty465/product/media/images/20220630/21/133230640/510828545/1/1_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty465/product/media/images/20220630/21/133230640/510828545/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty466/product/media/images/20220630/21/133230640/510828545/3/3_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty467/product/media/images/20220630/21/133230655/510828581/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty465/product/media/images/20220630/21/133230655/510828581/3/3_org_zoom.jpg",
      ],
      description: "T-shirt",
      content:
        "Avva Erkek Beyaz Bisiklet Yaka Baskılı T-shirt Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar. Kampanya fiyatından satılmak üzere 10 adetten fazla stok sunulmuştur. İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir. Bu ürün indirim kampanyasına dahil değildir. Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır.",
      price: 20,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
    {
      id: "5",
      title: "Mini Dress",
      minisrc: [
        "https://cdn.dsmcdn.com/ty109/product/media/images/20210502/5/84541651/169488363/0/0_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty109/product/media/images/20210502/5/84541651/169488363/0/0_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty108/product/media/images/20210502/5/84541651/169488363/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty110/product/media/images/20210503/13/85039763/170037953/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty109/product/media/images/20210503/13/85039763/170037953/2/2_org_zoom.jpg",
      ],
      description: "Dress",
      content: "Black and red Dress",
      price: 43,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
    {
      id: "6",
      title: "Valori Jewels",
      minisrc: [
        "https://cdn.dsmcdn.com/ty148/product/media/images/20210726/16/112686705/90103564/1/1_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty148/product/media/images/20210726/16/112686705/90103564/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty78/product/media/images/20210330/10/76192621/158634417/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty82/product/media/images/20210330/10/76193404/158634569/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty16/product/media/images/20210330/10/76193404/158634569/3/3_org_zoom.jpg",
      ],
      description: "Necklace",
      content: "Valori Jewels Necklace",
      price: 43,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
    {
      id: "7",
      title: "Nike Legend Essential 2",
      minisrc: [
        "https://cdn.dsmcdn.com/ty126/product/media/images/20210610/21/98683101/125546722/3/3_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty126/product/media/images/20210610/21/98683101/125546722/3/3_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty127/product/media/images/20210610/21/98683101/125546722/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty128/product/media/images/20210610/21/98683101/125546722/4/4_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty127/product/media/images/20210610/21/98683101/125546722/2/2_org_zoom.jpg",
      ],
      description: "Nike Legend Essential 2",
      content: "Nike Legend Essential 2",
      price: 43,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
    {
      id: "8",
      title: "Nike Unisex Spor Ayakkabı Court Borough",
      minisrc: [
        "https://cdn.dsmcdn.com/ty4/product/media/images/20200602/9/2086646/72555906/4/4_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty4/product/media/images/20200602/9/2086646/72555906/4/4_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty4/product/media/images/20200602/9/2086646/72555906/3/3_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty4/product/media/images/20200602/9/2086646/72555906/2/2_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty4/product/media/images/20200602/9/2086646/72555906/1/1_org_zoom.jpg",
      ],
      description: "Nike Unisex Spor Ayakkabı",
      content: "Nike Unisex Spor Ayakkabı",
      price: 99,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
    {
      id: "9",
      title: "JBL T500BT",
      minisrc: [
        "https://cdn.dsmcdn.com/ty327/product/media/images/20220209/14/47510212/16168822/3/3_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty327/product/media/images/20220209/14/47510212/16168822/3/3_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty329/product/media/images/20220209/14/47510212/16168822/2/2_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty329/product/media/images/20220209/14/47510212/16168822/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty328/product/media/images/20220209/14/47510212/16168822/4/4_org_zoom.jpg",
      ],
      description: "T500BT",
      content: "T500BT",
      price: 149,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
    {
      id: "10",
      title: "Technodia T500 Akıllı Saat",
      minisrc: [
        "https://cdn.dsmcdn.com/ty263/product/media/images/20211205/20/5242366/328469465/2/2_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty263/product/media/images/20211205/20/5242366/328469465/2/2_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty261/product/media/images/20211205/20/5242366/328469465/3/3_org_zoom.jpg",
      ],
      description: "Akıllı Saat",
      content: "Technodia",
      price: 40.5,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
    {
      id: "11",
      title: "Nike Air Jordan 1",
      minisrc: [
        "https://cdn.dsmcdn.com/ty255/product/media/images/20211127/19/176317/323944429/2/2_org_zoom.jpg",
      ],
      src: [
        "https://cdn.dsmcdn.com/ty255/product/media/images/20211127/19/176317/323944429/2/2_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty257/product/media/images/20211127/19/176317/323944429/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty256/product/media/images/20211127/19/176317/323944429/3/3_org_zoom.jpg",
        "https://cdn.dsmcdn.com/ty256/product/media/images/20211127/19/176317/323944429/4/4_org_zoom.jpg",
      ],
      description: "Air Jordan",
      content: "Spor Ayakkabı",
      price: 140,
      colors: ["green", "black", "crimson", "teal"],
      count: 1,
    },
  ];

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
            profilePageLoad={profilePageLoader}
            SearchedItem={SearchedItem}
          ></Navbar>
          <NavbarUnder></NavbarUnder>
        </div>
      </div>
      <Route path="/profile">
        <div className="Body-Wraper">
          <div className="Login-Wrapper">
            <Profile></Profile>
          </div>
        </div>
      </Route>
      <Route path={["/homepage"]}>
        <div className="Body-Wraper">
          <div className="Sidebar-Wrapper">
            <Sidebar></Sidebar>
          </div>
          <div className="Items-List">
            {ItemListFiltered.map((Item) => (
              <Product
                title={Item.title}
                price={Item.price}
                description={Item.description}
                key={Item.id}
                image={Item.minisrc}
                refNum={Item.id}
              ></Product>
            ))}
          </div>
        </div>
      </Route>
      <Route path="/Purchase">
        <div className="Purchase-Wrapper">
          <Purchase />
        </div>
      </Route>
      <div>
        {ItemsList.map((Item) => (
          <Route path={`/ProductPage/${Item.id}`}>
            <ProductPage ProductDetails={Item}></ProductPage>
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;
