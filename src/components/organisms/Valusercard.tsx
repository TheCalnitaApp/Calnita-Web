import { arrowRightIconBlack } from "@/assets/icons";
import React, { Component } from "react";

type Props = {
  username: string;
  useremail: string;
  userphoto: string;
};

const Valuserscard = ({ username, useremail, userphoto }: Props) => {
  return (
    <div className="flex flex-row items-center justify-around w-auto relative mb-2 mx-4">
      <div className="flex flex-row">
        <img src={userphoto} alt="" className="rounded-full w-14 h-14 bg-[#D9D9D9]"  />
        <div className="flex flex-col ml-4">
          <span className="text-lg font-semibold">{username}</span>
          <span className="text-lg font-light">{useremail}</span>
        </div>
      </div>

      <a href="#">{arrowRightIconBlack}</a>
    </div>
  );
};

export default Valuserscard;
