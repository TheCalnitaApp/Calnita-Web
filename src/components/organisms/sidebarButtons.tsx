import React, { Component, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  icon: any;
  numOfNotif?: number;
  targetLink: string;
};

const SidebarButton = ({ title, icon, numOfNotif, targetLink }: Props) => {
  const location = usePathname();
  return (
    <Link
      href={{ pathname: targetLink }}
      className={
        location == targetLink
          ? "flex items-center  w-4/5 h-12 px-3 mt-2 bg-mainPink text-white rounded-2xl "
          : "flex items-center hover:text-black hover:bg-gray-200 w-4/5 h-12 px-3 mt-2 active:bg-mainPink active:text-white rounded-2xl"
      }
      prefetch={false}
    >
      <div className="flex flex-row w-3/4 items-center gap-3">
        {icon}

        <span className="text-[16px]  font-light">{title}</span>
      </div>
      
      {/* <div className="ml-8 flex items-center justify-center rounded-full bg-red-600 w-3 h-3 text-white text-sm">
        <p>{numOfNotif}</p>
      </div> */}
    </Link>
  );
};

export default SidebarButton;
