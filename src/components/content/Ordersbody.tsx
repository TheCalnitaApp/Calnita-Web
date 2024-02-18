"use client";
import React, { Component } from "react";

import Orderscard from "../primitive/Orderscard";

const Ordersbody = () => {
  return (
    <React.Fragment>
      <div className="flex-col flex w-full text-black h-max">
          <Orderscard />
      </div>
    </React.Fragment>
  );
};

export default Ordersbody;
