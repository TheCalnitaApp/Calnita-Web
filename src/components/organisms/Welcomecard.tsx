import { useSession } from "next-auth/react";
import React, { Component } from "react";

type Props = {
  profileImg: string;
  storeName: string;
};

const Welcomecard = ({ profileImg, storeName }: Props) => {
  const { data: Session } = useSession();
  return (
    <div className="flex flex-col justify-between items-center border-r-2 border-r-lightGrey w-full shadow-custom">
      <span className="mt-6 text-2xl">Welcome Back!</span>
      <div className="rounded-full w-[6rem] h-[6rem] bg-gray-300 bg-[url('/img/hero-pattern.svg')]">
        <img src={""} className="w-full h-full rounded-full"/>
      </div>
      <span className="mb-6">{storeName}</span>
    </div>
  );
};

export default Welcomecard;
