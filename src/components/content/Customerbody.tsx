import React, { Component } from "react";

import Customercard from "../primitive/Cusrtomercard";
import Sidebar from "../primitive/Sidebar";
import Statscard from "../organisms/Statscard";
import { Cart, People, Shop, customerBag } from "../../assets/icons";

const Customersbody = () => {
  return (
    <React.Fragment>
      <div  className="flex flex-col relative gap-10 w-full justify-center items-center ">
      <div className="flex flex-row bg-transparent justify-between relative w-3/4 gap-11">
      <Statscard statname="STORE VISITS" statamount={500} icon={Shop} isNumber={true}/>
      <Statscard statname="TOTAL CUSTOMERS" statamount={300} icon={People} isNumber={true}/>
      <Statscard statname="ABANDONED CARTS" statamount={24} icon={customerBag} isNumber={true}/>
    </div>
          <Customercard />
      </div>
    </React.Fragment>
  );
};

export default Customersbody;
