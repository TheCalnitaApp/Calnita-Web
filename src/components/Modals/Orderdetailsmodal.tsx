import React, { Component } from "react";
import Orderdetailsitems from "./organisms/OrderdetailsItems";
import { Button } from "flowbite-react";
import { Currency } from "@/utils/Functions/functions";
import { arrowLeftIconBlack } from "@/assets/icons";


type detailsTypes = {
  customer: any;
  orderId: number;
  shippingDetails: any;
  products?: any
  closeFxn: any;
};

const Orderdetailsmodal = ({
  customer,
  products,
  closeFxn,
  orderId,
  shippingDetails,
}: detailsTypes) => {
  let content = 0;

  const calculateTotals = () => {
    let totalPrice = 0;
    let totalQuantity = 0;

    products?.forEach((product: any) => {
      totalPrice += product.price * product.quantity;
      totalQuantity += product.quantity;
    });

    return { totalPrice, totalQuantity };
  };

  const { totalPrice, totalQuantity } = calculateTotals();

  return (
    <div className="flex flex-col items-center justify-center fixed h-screen w-screen left-0 top-0 bg-black bg-opacity-70 backdrop-blur-sm text-black ">
      <div className="flex flex-col relative w-2/5 bg-white rounded-md p-10 gap-2 shadow-md">
        <button className="col-span-2 text-left mb-2 text-xl flex flex-row gap-2" onClick={closeFxn}>{arrowLeftIconBlack}ORDER DETAILS</button>
        <div>
            <div> <span className="font-semibold text-2xl">Order: #{orderId}</span></div>
          </div>
        <div className="flex flex-col justify-start py-4 border-t border-b border-dashed border-[#dad8d8]">
          
          <div className="flex flex-col w-full gap-4">
            <span className="font-semibold text-left">Customer</span>
            <div className="flex flex-row  w-full place-items-center justify-start gap-4">
              <div className="rounded-full w-10 h-10  bg-gray-200 flex flex-col justify-start">
                <img src={products?.imgUrl} alt="" />
              </div>
                <span className="font-light text-base">{customer.name}</span>
                <span className="font-light text-base">{customer.email}</span>
                <span className="font-light text-base">{customer.tel}</span>
              
            </div>

            <div className="flex flex-row  w-full justify-start gap-10 items-start">
              <div>
                <span className="font-light text-base underline">Delivery address</span>
                <ol className="">
                  <li className="text-xs font-light">
                    {shippingDetails.address}
                  </li>
                  <li className="text-xs font-light">
                    {shippingDetails.tel}
                  </li>
                  <li className="text-xs font-light">
                    {shippingDetails.email}
                  </li>
                </ol>
              </div>

              <div className="flex flex-col justify-start">
                <span className="font-light text-base underline">Landmark</span>
                <ol className="">
                  <li className="text-xs  font-light">
                    {shippingDetails.landmark}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full gap-7">
          <span className="font-semibold">Items</span>
          <div className="w-full h-[20vh] overflow-scroll px-2">
            {products?.map((product: any, index: number) => (
              <Orderdetailsitems
                itemName={product.prodname}
                itemPrice={product.price}
                itemQty={product.quantity}
                key={index}
              />
            ))}
          </div>

          <div className="w-[70%] self-center">
            <div className="flex flex-row justify-between my-1">
              <span className="font-light">Items</span>
              <span> {totalQuantity} items</span>
            </div>
            <div className="flex flex-row justify-between my-1">
              <span>Subtotal</span>
              <span>{Currency.format(totalPrice)}</span>
            </div>
            <div className="flex flex-row justify-between my-1">
              <span>Shipping</span>
              <span>{Currency.format(totalPrice)}</span>
            </div>
            <div className="flex flex-row justify-between text-green-500 mt-4">
              <span>Total</span>
              <span>{Currency.format(totalPrice)}</span>
            </div>
          </div>
          <button className="bg-mainPink py-1 px-8 w-fit text-white rounded-xl self-center font-light">
            Print Summary
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Orderdetailsmodal;

//how do I write a popup modal in modern reactjs?
