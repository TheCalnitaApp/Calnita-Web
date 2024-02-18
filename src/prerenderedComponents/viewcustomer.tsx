import { CustomerDetailsCard } from '../components/primitive/CustomerDetailsCard';
import React from "react";
import {
  Cart,
  Shop,
  arrowLeftIconWhite,
  boxTick,
  cancelledOrder,
  completedOrder,
  wallet} from "../assets/icons";
import { CustomerPageProps } from "../utils/Functions/types";
import ContainerLayout from "../components/layout/Container";
import Link from "next/link";
import Ordertab from "../components/organisms/Ordertab";
import Statscard from '@/components/organisms/Statscard';

const ViewCustomer = ({ customer }: any) => {
  return (
    <ContainerLayout name="CUSTOMER">
      <div className="flex flex-col w-full h-fit gap-8">
        <div className="flex flex-row w-full h-auto gap-4">
          <Link
            href={"/Customers"}
            className="flex flex-col place-items-center bg-mainPink rounded-lg p-3 w-fit"
          >
            {arrowLeftIconWhite}
          </Link>
          <div className="flex flex-col w-fit justify-between items-start whitespace-nowrap">
            <span className="text-xs font-extralight">Back to Customers</span>
            <span className="text-2xl font-light">{customer.name}</span>
          </div>
        </div>
        <div className="flex flex-row bg-transparent justify-between relative w-full gap-11">
      <Statscard statname="TOTAL EXPENDITURE" statamount={62400} icon={wallet}/>
      <Statscard statname="TOTAL ORDERS" statamount={17} icon={boxTick} isNumber={true}/>
      <Statscard statname="COMPLETETD ORDERS" statamount={14} icon={completedOrder} isNumber={true}/>
      <Statscard statname="CANCELLED ORDERS" statamount={3} icon={cancelledOrder} isNumber={true}/>
    </div>
        <CustomerDetailsCard   customer={customer}  />
        <div className="flex flex-row gap-8 w-2/4 justify-between">
          {/* EXTRACT AND CREATE FILTER FUNCTION FROM DATA THAT CCOMES IN */}
        <button className="flex flex-col text-normal text-mainPink font-light py-2 px-4 place-items-center border border-[#F92A63] rounded-lg whitespace-nowrap bg-[#FEEAEF]">
          All Orders
        </button>
        <button className="flex flex-col text-normal font-light py-2 px-4 place-items-center border border-gray-300 rounded-lg whitespace-nowrap bg-white">
          Completed
        </button>
        <button className="flex flex-col text-normal font-light py-2 px-4 place-items-center border border-gray-300 rounded-lg whitespace-nowrap bg-white">
          In Progress
        </button>
        <button className="flex flex-col text-normal font-light py-2 px-4 place-items-center border border-gray-300 rounded-lg whitespace-nowrap bg-white">
           Cancelled
        </button>
        <button className="flex flex-col text-normal font-light py-2 px-4 place-items-center border border-gray-300 rounded-lg whitespace-nowrap bg-white">
           In Cart
        </button>
      </div>
        <div className="flex flex-col w-full h-fit bg-white gap-4 rounded-xl py-16 px-14">

        <div className="flex flex-row justify-between w-full h-fit font-semibold">
          <span>Order</span>
          <span>Product</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        
        <div className="flex flex-col w-full overflow-y-scroll relative divide-y-[1px] ">
          {customer.orders.map((order: any, index: any) => (
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
    </ContainerLayout>
  );
};

export default ViewCustomer;

   