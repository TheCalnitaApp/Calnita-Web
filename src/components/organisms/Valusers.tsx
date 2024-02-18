import React, { Component } from "react";
import Valuserscard from "./Valusercard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const Valuableusers = () => {
  return (
    <div className="flex flex-col items-center justify-around w-[auto] h-full bg-white rounded-xl pb-1 shadow-md">
      <span className="mt-2 font-semibold text-xl">Valuable Customers</span>
      <Swiper
        slidesPerView={1}
        pagination={{
          type: "fraction",
          clickable: true
          
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="w-full flex flex-col gap-2"
      >
        <SwiperSlide>
          <div className="w-full flex flex-col gap-3 ">
            <Valuserscard
              useremail="miriamenene@gmail.com"
              username="Miriam Enene"
              userphoto="uerfiereu"
            />
            <Valuserscard
              useremail="miriamenene@gmail.com"
              username="Miriam Enene"
              userphoto="uerfiereu"
            />
            <Valuserscard
              useremail="miriamenene@gmail.com"
              username="Miriam Enene"
              userphoto="uerfiereu"
            />
            <Valuserscard
              useremail="miriamenene@gmail.com"
              username="Miriam Enene"
              userphoto="uerfiereu"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col gap-3 ">
            <Valuserscard
              useremail="miriamenene@gmail.com"
              username="Miriam Enene"
              userphoto="uerfiereu"
            />
            <Valuserscard
              useremail="miriamenene@gmail.com"
              username="Miriam Enene"
              userphoto="uerfiereu"
            />
            <Valuserscard
              useremail="miriamenene@gmail.com"
              username="Miriam Enene"
              userphoto="uerfiereu"
            />
             <Valuserscard
              useremail="miriamenene@gmail.com"
              username="Miriam Enene"
              userphoto="uerfiereu"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Valuableusers;
