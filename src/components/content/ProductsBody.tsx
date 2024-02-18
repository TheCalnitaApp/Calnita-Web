"use client";
import React, { Component } from "react";
import { useSession } from "next-auth/react";
import Allproductscard from "../primitive/Allproductscard";
import Productbar from "../primitive/Productbar";
import { LoadingSkeleton } from "../skeletons/skeleton";

const Productsbody = () => {
  const { data: session, status } = useSession();
  let content: any;

  if (status === "loading") {
    content = <LoadingSkeleton />;
  } else if (status === "authenticated") {
    content = (
      <div className="flex flex-col relative gap-10 w-full justify-center items-center ">
        <Productbar />
        <Allproductscard />
      </div>
    );
  }
  return (
    <>
    {content}
    </>
      
  );
};

export default Productsbody;
