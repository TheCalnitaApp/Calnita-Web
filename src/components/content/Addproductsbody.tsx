import React, { Component } from "react";
import Sidebar from "../primitive/Sidebar";

const Addproductsbody = () => {
  return (
    <React.Fragment>
      <div className="flex-col flex w-[75vw] absolute   h-max left-[256px]">
        <Sidebar />

        <div className="relative top-[15vh]"></div>
      </div>
    </React.Fragment>
  );
};

export default Addproductsbody;
