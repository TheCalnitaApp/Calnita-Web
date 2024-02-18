import { useSession } from "next-auth/react";
import React, { Component } from "react";

const Statrow = () => {
  const {data: session} = useSession()
  console.log(session)
  const user = session?.user.brand
  return (
    <div className="relative rounded-lg w-full gap-8 flex flex-col py-12 px-6 bg-white">
      {/* <img src="/dashboardlogo.svg" alt="calnitalogo" className="absolute -right-6"/> */}
    <div  className="flex flex-col gap-2">
      <h1  className="text-6xl font-black text-black">Welcome Back!</h1>
      <span className="text-2xl text-black font-black">{user!.name}</span>
    </div>
    <div className="w-full flex flex-row items-center justify-between">
      <span className="text-black text-2xl font-light">Upgrade to Premium to gain access to all features</span>
      <button className="bg-black text-white text-center rounded-lg py-2 px-4 font-light whitespace-nowrap">Upgrade Now</button>
    </div>
    </div>
  );
};

export default Statrow;
