import React, { Component } from "react";
import Ordertab from "../organisms/Ordertab";
import { usePathname } from "next/navigation";

const Orderscard = () => {
  const location = usePathname()
  const orders = [ 
    {
      name: "CeraVe",
      date: "12/2/2023",
      status: 2,
      amount: 14450,
      imgUrl: "./topprodpic.png",
      destination: "kenya",
      orderId: 234857,
      customer: {
        name: "Grace Amusan",
        tel: 8123456789,
        email: "grace@gmail.com",
      },
      shippingDetails: {
        address: "45 Sapa Street, benson avenue, Uyo ",
        tel: +2347894332041,
        email: "Calnita@gmail.com",
        landmark: "Unity Bank benson avenue",
      },
      products: [
        {
          prodname: "Obsessed 5ml parfum",
          price: 4450,
          quantity: 1,
          imgUrl: "./topprodpic.png",
          
        },
        {
          prodname: "Obsessed 5ml parfum",
          price: 16650,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
        {
          prodname: "Obsessed 5ml parfum",
          price: 160,
          quantity: 2,
          imgUrl: "./topprodpic.png",
          
        },
      ],
    },
    {
      name: "CeraVe",
      date: "12/2/2023",
      status: 2,
      amount: 14450,
      imgUrl: "./topprodpic.png",
      destination: "kenya",
      orderId: 234857,
      customer: {
        name: "Grace Amusan",
        tel: 8123456789,
        email: "grace@gmail.com",
      },
      shippingDetails: {
        address: "45 Sapa Street, benson avenue, Uyo ",
        tel: +2347894332041,
        email: "Calnita@gmail.com",
        landmark: "Unity Bank benson avenue",
      },
      products: [
        {
          prodname: "Obsessed 5ml parfum",
          price: 14450,
          quantity: 1,
          imgUrl: "./topprodpic.png",
          
        }
      ],
    },
    {
      name: "CeraVe",
      date: "12/2/2023",
      status: 2,
      amount: 14450,
      imgUrl: "./topprodpic.png",
      destination: "kenya",
      orderId: 234857,
      customer: {
        name: "Grace Amusan",
        tel: 8123456789,
        email: "grace@gmail.com",
      },
      shippingDetails: {
        address: "45 Sapa Street, benson avenue, Uyo ",
        tel: +2347894332041,
        email: "Calnita@gmail.com",
        landmark: "Unity Bank benson avenue",
      },
      products: [
        {
          prodname: "Obsessed 5ml parfum",
          price: 14450,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
        {
          prodname: "Obsessed 5ml parfum",
          price: 16650,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
      ],
    },
    {
      name: "CeraVe",
      date: "12/2/2023",
      status: 2,
      amount: 14450,
      imgUrl: "./topprodpic.png",
      destination: "kenya",
      orderId: 234857,
      customer: {
        name: "Grace Amusan",
        tel: 8123456789,
        email: "grace@gmail.com",
      },
      shippingDetails: {
        address: "45 Sapa Street, benson avenue, Uyo ",
        tel: +2347894332041,
        email: "Calnita@gmail.com",
        landmark: "Unity Bank benson avenue",
      },
      products: [
        {
          prodname: "Obsessed 5ml parfum",
          price: 14450,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
        {
          prodname: "Obsessed 5ml parfum",
          price: 16650,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
      ],
    },
    {
      name: "CeraVe",
      date: "12/2/2023",
      status: 2,
      amount: 14450,
      imgUrl: "./topprodpic.png",
      destination: "kenya",
      orderId: 234857,
      customer: {
        name: "Grace Amusan",
        tel: 8123456789,
        email: "grace@gmail.com",
      },
      shippingDetails: {
        address: "45 Sapa Street, benson avenue, Uyo ",
        tel: +2347894332041,
        email: "Calnita@gmail.com",
        landmark: "Unity Bank benson avenue",
      },
      products: [
        {
          prodname: "Obsessed 5ml parfum",
          price: 14450,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
        {
          prodname: "Obsessed 5ml parfum",
          price: 16650,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
      ],
    },
    {
      name: "CeraVe",
      date: "12/2/2023",
      status: 2,
      amount: 14450,
      imgUrl: "./topprodpic.png",
      destination: "kenya",
      orderId: 234857,
      customer: {
        name: "Grace Amusan",
        tel: 8123456789,
        email: "grace@gmail.com",
      },
      shippingDetails: {
        address: "45 Sapa Street, benson avenue, Uyo ",
        tel: +2347894332041,
        email: "Calnita@gmail.com",
        landmark: "Unity Bank benson avenue",
      },
      products: [
        {
          prodname: "Obsessed 5ml parfum",
          price: 14450,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
        {
          prodname: "Obsessed 5ml parfum",
          price: 16650,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
      ],
    },
    {
      name: "CeraVe",
      date: "12/2/2023",
      status: 2,
      amount: 14450,
      imgUrl: "./topprodpic.png",
      destination: "kenya",
      orderId: 234857,
      customer: {
        name: "Grace Amusan",
        tel: 8123456789,
        email: "grace@gmail.com",
      },
      shippingDetails: {
        address: "45 Sapa Street, benson avenue, Uyo ",
        tel: +2347894332041,
        email: "Calnita@gmail.com",
        landmark: "Unity Bank benson avenue",
      },
      products: [
        {
          prodname: "Obsessed 5ml parfum",
          price: 14450,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
        {
          prodname: "Obsessed 5ml parfum",
          price: 16650,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
      ],
    },
    {
      name: "CeraVe",
      date: "12/2/2023",
      status: 2,
      amount: 14450,
      imgUrl: "./topprodpic.png",
      destination: "kenya",
      orderId: 234857,
      customer: {
        name: "Grace Amusan",
        tel: 8123456789,
        email: "grace@gmail.com",
      },
      shippingDetails: {
        address: "45 Sapa Street, benson avenue, Uyo ",
        tel: +2347894332041,
        email: "Calnita@gmail.com",
        landmark: "Unity Bank benson avenue",
      },
      products: [
        {
          prodname: "Obsessed 5ml parfum",
          price: 14450,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
        {
          prodname: "Obsessed 5ml parfum",
          price: 16650,
          quantity: 3,
          imgUrl: "./topprodpic.png",
          
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full gap-10 pt-6 h-[85vh] justify-center items-center mt-8 ">
         {location === "/Orders" && ( <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row w-3/5 justify-between h-fit">
          <button className="flex flex-col text-normal text-black font-normal py-1 px-8 justify-center items-center rounded-lg whitespace-nowrap bg-white">
            All
          </button>
          <button className="flex flex-row text-normal gap-2 text-black font-normal py-1 px-4 place-items-center rounded-lg whitespace-nowrap">
            <span>New</span>
            <div className="flex flex-col bg-[#F30606] py-1 px-2 rounded-2xl text-white text-base">24</div>
          </button>
          <button className="flex flex-col text-normal text-black font-normal py-1 px-4 place-items-center rounded-lg whitespace-nowrap">
            Delivered
          </button>
          <button className="flex flex-col text-normal text-black font-normal py-1 px-4 place-items-center rounded-lg whitespace-nowrap">
            Cancelled
          </button>
          <button className="flex flex-col text-normal text-black font-normal py-1 px-4 place-items-center rounded-lg whitespace-nowrap">
            In Progress
          </button>
        </div>
      </div>)}
     

      <div className="flex flex-col w-full h-full bg-white gap-4 rounded-xl py-16">
     
        <div className="flex flex-row justify-between w-full h-fit font-semibold px-16">
          <span>Order</span>
          <span>Product</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        <div className="flex flex-col w-full overflow-y-scroll relative divide-y-[1px] px-16 ">
          {orders.map((order, index) => (
            <Ordertab
              destination={order.destination}
              shippingDetails={order.shippingDetails}
              date={order.date}
              Amount={order.amount}
              status={order.status}
              orderId={order.orderId}
              ordername={order.name}
              img={order.imgUrl}
              customer={order.customer}
              products={order.products}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orderscard;
