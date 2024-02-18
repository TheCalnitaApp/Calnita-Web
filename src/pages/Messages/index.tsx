"use client";
import Messagesbody from "@/components/content/Messagesbody";
import Navbar from "@/components/primitive/Navbar";
import React, { Component } from "react";

const Messages = () => {
  return (
    <div className=" w-[100%] h-[150vh] block bg-gray-100 ">
      <Messagesbody />
      <Navbar />
    </div>
  );
};

export default Messages;
