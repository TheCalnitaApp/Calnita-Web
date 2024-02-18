import React, { useState } from "react";
import Orderdetailsmodal from "../Modals/Orderdetailsmodal";
import { Button, Modal } from "flowbite-react";
import { Currency } from "../../utils/Functions/functions";

interface orderDataTypes {
  ordername: string;
  destination: string;
  img: string;
  date: string;
  Amount: number;
  orderId: number;
  status?: number;
  customer: object;
  products: Array<object>;
  shippingDetails: object;
}

const Ordertab = (data: orderDataTypes) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [modalPlacement, setModalPlacement] = useState<string>("center");
  const calculateTotals = () => {
    let totalPrice = 0;
    let totalQuantity = 0;

    data.products?.forEach((product: any) => {
      totalPrice += product.price * product.quantity;
      totalQuantity += product.quantity;
    });

    return { totalPrice, totalQuantity };
  };

  const { totalPrice, totalQuantity } = calculateTotals();
  const props = { modalPlacement, openModal, setOpenModal };
  return (
    <div  className="cursor-pointer flex flex-row w-full h-[20vh] py-8 relative justify-between items-center">
      <div className="flex flex-col justify-around w-[7.5rem] gap-4">
        <span className="text-[18px] font-light">{data.ordername}</span>

        <span className="pb-3 text-base font-extralight">
          Destination - {data.destination}
        </span>
      </div>
      <div className="relative flex flex-row items-end gap-3">
        <div className="w-[7rem] rounded-lg border p-2 border-gray-200 ">
          <img src={"/curology.png"} alt="" className="" />
        </div>

        <div className="relative whitespace-nowrap text-[9px] font-light bg-lightGrey py-1 px-2 rounded-3xl">
          {totalQuantity === 1 ? "1 ITEM" : `+ ${totalQuantity} ITEMS`}
        </div>
      </div>

      <div>
        <span className="text-[18px] font-extralight">{data.date}</span>
      </div>
      <div>
        <span className="text-[23px] font-normal">
          {Currency.format(totalPrice)}
        </span>
      </div>
      <div className="relative">
        <span className="text-xs flex flex-row items-center">
          {" "}
          <div
            className={
              data.status == 1
                ? "w-4 h-4 bg-orange-500 text-xs rounded-full inline-block mr-1"
                : data.status == 2
                ? "w-4 h-4 bg-green-600 text-xs rounded-full inline-block mr-1"
                : "w-4 h-4 bg-red-600 rounded-full inline-block mr-1"
            }
          ></div>
          {data.status == 1
            ? "Pending"
            : data.status == 2
            ? "Delivered"
            : "Undelevered"}
        </span>
      </div>

      <div className="absolute bottom-0 right-0 mb-1">
        <button
          onClick={() => props.setOpenModal("default")}
          className="px-4 py-1 bg-mainPink text-white rounded-lg text-xs font-light"
        >
          View Order
        </button>
      </div>
      <Modal
        dismissible
        show={props.openModal === "default"}
        position={props.modalPlacement}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Orderdetailsmodal
          shippingDetails={data.shippingDetails}
          orderId={data.orderId}
          products={data.products}
          customer={data.customer}
          closeFxn={() => props.setOpenModal(undefined)}
        />
      </Modal>
    </div>
  );
};

export default Ordertab;
