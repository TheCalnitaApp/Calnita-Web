import Link from "next/link";
import React, { Component } from "react";

type Props = {
  username: string;
  useremail: string;
  userphoto: string;
  phoneNo: number;
  location: string;
  status: boolean;
  id: string
};

const Customertab = ({ username, useremail, phoneNo, location, status, id }: Props) => {
  return (
    <Link href={`/Customers/${id}`}>
     <div className="grid grid-cols-5  items-center py-5 justify-items-center w-full relative font-light">
      <span className="">{username}</span>
      <span className="">{useremail}</span>

      <span className="">+234{phoneNo}</span>
      <span className="">{location}</span>
      <button className="flex flex-col py-2 w-[10rem] text-white place-items-center rounded-lg whitespace-nowrap " style={status ? {backgroundColor: "#27AE60"}  : {backgroundColor: "#F30606"}}>
      {status ? "Empty Cart"  : "Abandoned Cart"}
      </button>
    </div>
    </Link>
   
  );
};

export default Customertab;
