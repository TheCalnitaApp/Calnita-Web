"use client";
import React, { Component, useEffect, useState } from "react";
import Topprod from "./Topprod";
import { arrowLeftIconWhite, arrowRightIconWhite } from "../../assets/icons";
import { useSession } from "next-auth/react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';

const Topproducts = () => {
 
  const { data: Session } = useSession();
   const products = Session!.user.products
   console.log(Session)
  const swiper = useSwiper();

  let content;


 

  if (Array.isArray(products) && products.length > 0) {
    console.log(products)
    content = products.map(
      (prod: any, index: any) =>
        index < 8 && (
         
          <SwiperSlide key={index}>
          <Topprod
            
            productName={prod.name}
            productPrice={prod.price.salePrice}
            productImg={"prod.productImages[0]"}
          />
        </SwiperSlide>
        )
    );
  } else {
    return <p className="font-light">No data available</p>;
  }
  return (
    <div className="flex flex-col col-span-2 h-full relative items-end bottom-0 ml-8 mb-3">
      <div className="flex flex-row w-full h-1/5 justify-between">
         <span className="text-2xl font-semibold">
        TOP SELLING PRODUCTS
      </span>
      <div className="flex flex-row h-fit w-fit gap-4  justify-between bg-mainPink  p-1 rounded-xl">
        <button onClick={() => swiper.slidePrev()}> {arrowLeftIconWhite}</button>
        <button onClick={() => swiper.slideNext()}>{arrowRightIconWhite}</button>
      </div>
      </div>
      <Swiper
        slidesPerView={3}
        pagination={{
          enabled: false,
          type: "fraction",
          clickable: true
          
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="w-full flex-col h-4/5"
      >
        
         {content}
      </Swiper>
    
    </div>
  );
};

export default Topproducts;
