import { star } from "../../assets/icons";
import React, { Component } from "react";

type Props = {
  userName: string;
  userPhoto: string;
  productName: string;
  rating: number;
};
const Userreviewcard = ({
  userName,
  userPhoto,
  productName,
  rating,
}: Props) => {
  return (
    <div className="flex flex-row  items-center justify-between w-full relative">
      <div className="flex flex-row">
        <img src={userPhoto} alt="" className="rounded-full w-14 h-14 bg-[#d9d9d9]" />
        <div className="flex flex-col ml-4">
          <span className="text-[18px] font-light">{productName}</span>
          <span className="text-[18px] font-extralight">Reviewed by {userName}</span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3 ">
        {star}
        {rating}
      </div>
    </div>
  );
};

export default Userreviewcard;
