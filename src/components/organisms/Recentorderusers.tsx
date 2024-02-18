import { Currency } from "@/utils/Functions/functions";
import React, { Component } from "react";

type Props = {
  username: string;
  useremail: string;
  userphoto: string;
  orderAmt: number;
};

const Recentorderusers = ({
  username,
  useremail,
  userphoto,
  orderAmt,
}: Props) => {
  return (
    <div className="flex flex-row  items-center justify-around w-auto relative">
      <div className="flex flex-row items-center">
        <img
          src="https://placeimg.com/80/80/people"
          alt=""
          className="rounded-full w-14 h-14 bg-[#d9d9d9]"
        />
        <div className="flex flex-col ml-4">
          <span className="text-[18px] font-semibold">{username}</span>
          <span className="text-[18px] font-light">{useremail}</span>
        </div>
      </div>

      <span>{Currency.format(orderAmt)}</span>
    </div>
  );
};

export default Recentorderusers;
