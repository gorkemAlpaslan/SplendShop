import React from "react";
import GifAdd from "../../Images/gif_one_splendshop.gif";
import AddOne from "../../Images/AddTwoOne.jpg";
import AddTwo from "../../Images/AddTwoTwo.jpg";
import AddThree from "../../Images/AddTwoThree.jpg";
import itemsforGif from "../../Images/itemsforGif.png";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/Home_Page/Adds/Adds.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Adds = () => {
  return (
    <div className="AddsWrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="addTwo"
      >
        <SwiperSlide>
          <a href="/ProductPage/8">
            <img src={AddTwo} alt="AddTwo" className="addTwoPngs"></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/ProductPage/1">
            <img src={AddOne} alt="AddOne" className="addTwoPngs"></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/ProductPage/11">
            <img src={AddThree} alt="AddThree" className="addTwoPngs"></img>
          </a>
        </SwiperSlide>
      </Swiper>
      <a href="/homepage" className="addGif">
        <img src={GifAdd} alt="advertiseGif" className="addGif" />
        <div className="gif-photo">
          <img src={itemsforGif} alt="AddTwo" className="addTwoPngs"></img>
        </div>
      </a>
    </div>
  );
};

export default Adds;
