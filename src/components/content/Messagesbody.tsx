import React, { Component } from "react";
import Sidebar from "../primitive/Sidebar";

const Messagesbody = () => {
  return (
    <React.Fragment>
      <div className="flex-col flex w-[75vw] absolute   h-max left-[256px]">
        <Sidebar />

        <div className="relative top-[15vh] h-[50vh] flex flex-col justify-center items-center">
          <div className="relative top-[15vh] flex bg-mainPink text-white p-20 rounded-lg text-xl flex-col justify-center items-center">
           ⚠  This Feature is in development ⚠ 
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Messagesbody;
