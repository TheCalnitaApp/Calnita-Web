"use client";
import React, { Component, ReactElement } from "react";
import { usePathname } from "next/navigation";
import { Currency } from "../../utils/Functions/functions";

type Props = {
  statname: string;
  statamount: number;
  icon?: ReactElement
  isNumber?: boolean
};

const Statscard = ({ statname, statamount, icon, isNumber }: Props) => {
  const location = usePathname();

  let content;
  if (location === "/Products" || location === "/Analytics") {
    content =
      "relative flex flex-row w-[244px] ml-3 bg-white rounded-lg p-2 shadow-custom  border border-gray-200";
  } else {
    content =
      "flex flex-row items-center gap-4 w-3/5 h-full bg-white py-2 px-3 rounded-lg shadow-custom";
  }

  return (
  <>
   <div className={content}>
    {icon &&
    
    (
      <div>
        {icon}
    </div> 
    )}
   
  
    <div className="flex flex-col w-full">
        <span className="text-xs text-gray-500">{statname}</span>
      <div className="flex flex-row w-full relative justify-between items-end">
        <span className="text-gray-900 text-2xl font-semibold">
          {isNumber ? statamount : Currency.format(statamount)}
        </span>
       
        {icon ? "" : (
           <span className="text-green-300 text-xs mb-2">
          +36%
        </span>
        )}
        
      </div> 
    </div>
    
    </div>
  </>
   
  );
};

export default Statscard;
