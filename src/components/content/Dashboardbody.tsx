
import React, { Component } from "react";
import Sidebar from "../primitive/Sidebar";
import Statrow from "../primitive/Statrow";
import Sellprod from "../primitive/Sellingprodrow";
import Reviewrow from "../primitive/Reviewrow";
import Orderscard from "../primitive/Orderscard";

const Dashboardbody = () => {
 
  return (
    
     <div className="flex flex-col h-[150%] gap-4">
    <Statrow  />
    <Sellprod />
    <Orderscard />
  </div>
    
   
    
  );
};
export default Dashboardbody;
