import React, { Component } from "react";
import Statscard from "./Statscard";
const Statscol = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 col-span-2 w-[85%] justify-between h-auto py-4 mt-4">
      <div className="flex flex-row w-full justify-between gap-8">
        <Statscard statamount={750000} statname="TODAY'S SALE" />
        <Statscard statamount={60382} statname="IN ESCROW" />
      </div>
      <div className="flex flex-row w-full justify-between gap-8">
        <Statscard statamount={858233} statname="REVENUE" />
        <Statscard statamount={288483} statname="TOTAL ORDERS" />
      </div>
    </div>
  );
};

export default Statscol;
