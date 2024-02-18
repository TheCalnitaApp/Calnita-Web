import React, { Component } from "react";
import Recentorderusers from "./Recentorderusers";
import Link from "next/link";

const Recentorders = () => {
  return (
    <div className="flex flex-col col-span-2 gap-4 items-center justify-around w-[auto] h-auto bg-white rounded-xl ml-8 p-2">
      <span className="font-bold">Recent Orders</span>
      <div className="w-3/4 flex flex-col gap-3 justify-center">
        <Recentorderusers
          orderAmt={250000}
          username="Miriam Enene"
          userphoto="coconut"
          useremail="eenen@gmail.com"
        />
        <Recentorderusers
          orderAmt={250000}
          username="Miriam Enene"
          userphoto="coconut"
          useremail="eenen@gmail.com"
        />
         <Recentorderusers
          orderAmt={250000}
          username="Miriam Enene"
          userphoto="coconut"
          useremail="eenen@gmail.com"
        />
      </div>
      <div>
        <Link href="/Orders" className="mb-3 text-mainPink">
          See all orders
        </Link>
      </div>
    </div>
  );
};

export default Recentorders;
