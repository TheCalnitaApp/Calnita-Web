"use client";
import Navbar from "../primitive/Navbar";
import React, { ReactNode } from "react";
import Sidebar from "../primitive/Sidebar";
import { useSession } from "next-auth/react";
import Loader from "./loader";

interface INode {
  children: ReactNode;
  name: string
}
const ContainerLayout = ({ children , name}: INode) => {
  const { data: session, status } = useSession();
  return (
    <div className="layoutContainer">
      <Sidebar />
      <Navbar />
      
      <div className="layoutContent">
        <h1 className="text-3xl mb-4  text-black font-semibold">{name}</h1>
        {status === "authenticated" ? (<>{children}</>) : <Loader />}
        
      </div>
      
    </div>
  );
};

export default ContainerLayout;
