import React, { Component } from "react";
import Topproducts from "../organisms/Topprodsrow";
import Valuableusers from "../organisms/Valusers";
import Statscard from "../organisms/Statscard";
import {
  AddProductIcon,
  Calendar,
  DeliveryBus,
  MoneyRecieve,
  People,
  totalCustomers,
  totalProduct,
} from "@/assets/icons";
Topproducts;
const Sellprod = () => {
  return (
    <div className="flex flex-col w-full rounded-xl relative mt-4 gap-4">
        <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
                <button className="whitespace-nowrap border-b p-2 border-[#F92A63] text-mainPink">
                    Last 24 hours
                </button>
                <button className="whitespace-nowrap border-b p-2 text-[#71717a] hover:border-[#71717a]">
                    Last Week
                </button>
                <button className="whitespace-nowrap border-b p-2 text-[#71717a] hover:border-[#71717a]">
                    Last Month
                </button>
                <button className="whitespace-nowrap border-b p-2  text-[#71717a] hover:border-[#71717a]">
                    Last Year
                </button>
            </div>
            <button className="flex flex-row gap-1 p-2 font-light items-center whitespace-nowrap bg-[#d9d9d9] rounded-lg">
                <span>Filter by date range</span>
                {Calendar}
            </button>
        </div>
      <div className="flex flex-row w-full gap-8">
        <Statscard
          statname={"TOTAL REVENUE"}
          statamount={6805000}
          icon={MoneyRecieve}
        />
        <Statscard
          statname={"TOTAL ORDERS"}
          statamount={2367}
          icon={DeliveryBus}
          isNumber={true}
        />
        <Statscard statname={"TOTAL CUSTOMERS"} statamount={827} icon={totalCustomers}  isNumber={true}/>
        <Statscard
          statname={"TOTAL PRODUCTS"}
          statamount={147}
          icon={totalProduct}
          isNumber={true}
        />
      </div>

      {/* <Valuableusers />
            <Topproducts /> */}
    </div>
  );
};

export default Sellprod;
