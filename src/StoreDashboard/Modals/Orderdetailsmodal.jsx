import React, { Component } from "react";
import Orderdetailsitems from "./organisms/OrderdetailsItems";

const Orderdetailsmodal = ({
  cstName,
  cstEmail,
  cstTel,
  delAdrs,
  delTel,
  delEmail,
  delLndMrk,
}) => {
  return (
    <div className="grid grid-cols-2 relative w-fit bg-white rounded-md">
      <p className="col-span-2 text-center mb-2 text-xl underline">Order Details</p>
      <div className="flex flex-col justify-start ml-2">
        <span>Customer</span>
        <div>
          <div className="flex flex-row place-items-center">
            <div className="rounded-full w-10 h-10 m-2 bg-gray-500"></div>
            <div className="flex flex-col">
              <span className="font-bold text-xs">{cstName}Linda James</span>
              <span className="font-thin text-xs">
                {cstEmail} ndihiona@gmail.com
              </span>
              <span className="font-thin text-xs">{cstTel} 08726472836</span>
            </div>
          </div>

          <button className=" mt-3 text-xs rounded-lg place-content-center p-2 bg-pink-500 text-white">
            Message Customer
          </button>
        </div>

        <div className="mt-4 ">
          <span>Delivery address</span>
          <div>
            <ol className="list-disc">
              <li className="text-sm text-gray-400">
                {delAdrs}45 sapa street, benson avenue, Uyo
              </li>
              <li className="text-sm text-gray-400">
                {delTel} +234 7894 33 2014
              </li>
              <li className="text-sm text-gray-400">
                {delEmail} Calnita@gmail.com
              </li>
            </ol>
          </div>

          <div className="mt-3">
            <span>Landmark</span>
            <ol className="list-disc">
              <li className="text-sm text-gray-400">
                {delLndMrk}Unity Bank benson avenue
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span>Items</span>
        <Orderdetailsitems />
        <Orderdetailsitems />
        <div className="w-[50%] self-center text-xs" >
                <div className='flex flex-row justify-between my-1'>
                    <span>Items</span>
                    <span>4 items</span>
                </div>
                <div className='flex flex-row justify-between my-1'>
                    <span>Subtotal</span>
                    <span>#266,500</span>
                </div>
                <div className='flex flex-row justify-between my-1'>
                    <span>Shipping</span>
                    <span>#5,500</span>
                </div>
                <div className='flex flex-row justify-between text-green-500 mt-4'>
                    <span>Total</span>
                    <span>#385,509</span>
                </div>

            </div>
      </div>
    </div>
  );
};

export default Orderdetailsmodal;

//how do I write a popup modal in modern reactjs?
