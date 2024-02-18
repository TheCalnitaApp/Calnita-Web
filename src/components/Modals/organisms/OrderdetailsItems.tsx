import { Currency } from "@/utils/Functions/functions";
import React, { Component } from "react";

type Props = {
  itemName: string;
  itemPrice: number;
  itemQty: number;
};

const Orderdetailsitems = ({
  itemName,
  itemPrice,
  itemQty,
}: Props) => {
  return (
    <div className="flex flex-row gap-5 justify-between mb-2 items-center">
      <div className="flex flex-row justify-center items-center ">
        <div className="w-8 h-8 rounded-full bg-gray-200 inline-block mr-2">
          <img src="" alt="" />
        </div>
        <span className="font-light">{itemName}</span>
      </div>
          <span className="font-light ">{Currency.format(itemPrice)}</span>
          <span className="font-light">*{itemQty}</span>
      
        <p className="text-center text-green-500">Total = {Currency.format(itemPrice * itemQty)}</p>
    </div>
  );
};

export default Orderdetailsitems;
