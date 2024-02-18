import React, { Component } from "react";
import Statscard from "../organisms/Statscard";

const Productbar = () => {
  return (
    <div className="flex flex-row bg-transparent justify-between relative w-[55vw]">
      <Statscard statname="TOTAL PRODUCTS" statamount={500}  isNumber={true}/>
      <Statscard statname="UNDER REVIEW" statamount={6}  isNumber={true}/>
      <Statscard statname="OUT OF STOCK" statamount={6}  isNumber={true}/>
    </div>
  );
};

export default Productbar;
