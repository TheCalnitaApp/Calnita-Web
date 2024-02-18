import { CustomerStat } from "./../organisms/CustomerStat";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Currency } from "../../utils/Functions/functions";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  CicleArrowLeft,
  CirlceArrowRight,
  Email,
  Map,
  Phone,
  star,
} from "../../assets/icons";
export function CustomerDetailsCard({ customer }: any) {
  return (
    <div className="flex flex-col h-full w-full gap-4">
      <span>{customer.name}&apos;s Information</span>
      <div className="flex flex-row justify-start item-start flex-wrap gap-x-8 gap-y-8 w-full h-full rounded-lg bg-white p-10">
        <CustomerStat
          isImg={true}
          img={customer.image}
          title="Name"
          data={customer.name}
        />
        <CustomerStat
          title={"Email"}
          data={customer.email}
          isImg={false}
          icon={Email}
        />
        <CustomerStat
          title={"Phone"}
          data={customer.tel}
          isImg={false}
          icon={Phone}
        />

        <div className="w-[30%] h-4/6 flex flex-col gap-1 relative items-center">
          <span className="font-light text-xl text-red-500">
            Abandoned Cart
          </span>
          <div className="flex flex-row h-full w-full rounded-lg border border-gray-300 z-0">
            <Swiper
              slidesPerView={1}
              pagination={{
                enabled: true,
                type: "bullets",
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              direction="horizontal"
              navigation={{
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev",
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="relative flex flex-row h-full w-full z-0"
            >
              {customer.cart.map((prod: any, index: any) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col w-full p-4 gap-3">
                    <div className="flex flex-row h-fit w-full items-start justify-start gap-4">
                      <div className="w-20 h-20 rounded-lg ">
                        <img
                          src={prod.imgUrl}
                          className="w-full h-full bg-gray-100 rounded-lg relative"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-xl font-light text-[#71717a]">
                          {prod.prodname}
                        </span>
                        <span className="flex flex-row gap-2">{star} 3.4</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xl">
                        {Currency.format(prod.price)}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <button className="swiper-btn-next">{CirlceArrowRight}</button>
              <button className="swiper-btn-prev">{CicleArrowLeft}</button>
            </Swiper>{" "}
            <div className="bg-black/40 w-14 p-2 rounded-xl absolute -top-2 -left-5">
              <img src="/customerbag.png" alt="" />
              <div className="absolute -top-2 text-center w-6 h-6 -right-2 bg-white text-mainPink rounded-full">
                {customer.cart.length}
              </div>
            </div>
          </div>
        </div>
        <CustomerStat
          title={"Location"}
          data={customer.location}
          isImg={false}
          icon={Map}
        />
      </div>
    </div>
  );
}
