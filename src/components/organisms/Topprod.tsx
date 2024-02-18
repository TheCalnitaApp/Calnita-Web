"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Modal } from "flowbite-react";
import { editIcon } from "../../assets/icons";
import Editproductform from "../../prerenderedComponents/forms/editpageform";
import { Currency } from "../../utils/Functions/functions";
import Link from "next/link";

type Props = {
  productImg: string;
  productName: string;
  productPrice: number;
  qty?: number;
  status?: string;
  prodData?: object;
  productCode?: string;
  discount?: number;
  weight?: {
    value: number;
    unit: string;
  };
  id?: string
};

const Topprod = ({
  productImg,
  productName,
  productPrice,
  qty,
  productCode,
  id,
  discount,
  status,
  weight,
}: Props) => {
  const location = usePathname();
  const [openModal, setOpenModal] = useState<string | undefined>();

 const discountedPrice = discount &&  productPrice - (productPrice * discount!) / 100;
  return (
    <div
      className={
        location === "/Products"
          ? "flex flex-col gap-y-8 justify-end pb-4 w-[75%] h-full rounded-xl bg-white px-3 relative border- border-gray-200 shadow-custom overflow-hidden"
          : "flex flex-col gap-y-4 justify-end  p-4 w-[241px] h-full rounded-xl bg-white mx-2 relative shadow-custom overflow-hidden"
      }
    >
      <div className=" flex justify-center items-center  ">
        <img src={productImg} alt="" className="w-[141px] h-[141px] pt-2" />
        {location === "/Products" && (
          <div className="absolute top-3 right-3">
            <Link
              href={`/Products/edit-product/${id}`}
              className="border-none text-black p-0"
            >
              {editIcon}
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-col items-start gap-1">
        <h3 className="text-base  text-black font-light">
          {productName}{" "}
          {(location === "/Products" ||
            location === "/Products/add-product" || location === "/Products/edit-product" ) && (
            <span>{weight ? `-${weight.value}${weight.unit}` : ""}</span>
          )}
        </h3>
        <span className="text-base font-semibold text-black">
          {discount! > 0 ? Currency.format(discountedPrice!) : Currency.format(productPrice)}
        </span>
        {discount! > 0 && <span className="text-xs font-light text-gray-400 line-through">
          {Currency.format(productPrice)}
        </span>}
        
      </div>
      {location === "/Dashboard" && (
        <div className="flex flex-col items-center py-3 bg-mainPink text-white w-2/4 self-center rounded-2xl">
          <span>2300 sales</span>
        </div>
      )}

      {(location === "/Products" || location === "/Products/add-product" || location === "/Products/edit-product") && (
        <div className="flex flex-row justify-between items-center">
          {status ? (
            <div className="flex flex-row items-center gap-1">
              <div
                className={
                  status ===  "Available"
                    ? "bg-green-500 rounded-full w-2 h-2 text-black"
                    :  status === "OutOfStock" ? "bg-yellow-500 rounded-full w-2 h-2 text-black"
                    :  status === "Discontinued" ? "bg-red-500 rounded-full w-2 h-2 text-black"
                    : "bg-gray-neutral rounded-full w-2 h-2 text-black"
                }
              ></div>
              <span className="text-xs">
             { status ===  "Available"
                    ? "Available"
                    :  status === "OutOfStock" ? "Out of Stock"
                    :  status === "Discontinued" ? "Discontinued"
                    : "TBD"
              }
              </span>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <div className="bg-red-600 rounded-full w-2 h-2 text-black"></div>
              <span className="ml-1 text-xs text-black">
                {status}Out of stock
              </span>
            </div>
          )}

          <span className="text-[13px] text-black">Qty:{qty}</span>
        </div>
      )}
      {(location === "/Products" ||  location === "/Products/edit-product") && (
        <div className="self-center text-sm absolute top-0 left-0 bg-black p-1  rounded-r-md text-white">

          <span> {productCode}</span>
        </div>
      
       
      )}

{(location === "/Products" ||  location === "/Products/edit-product"  ||  location === "/Products/add-product" ) && discount! > 0 && (
        <div className="self-center text-xs absolute top-6 left-0 bg-[#F30606] p-1  rounded-r-md text-white">

          <span> {discount}%</span>
        </div>
      
       
      )}
    </div>
  );
};

export default Topprod;
