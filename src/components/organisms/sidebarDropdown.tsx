import React, { Component, ReactElement, useEffect, useState } from "react";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";


type Props = {
  title: string;
  icon: any;
  numOfNotif?: number;
  targetLink: string;
  dropdownText?: string[];
  droppdownLinks?: string[] | any;
  dropdownIcon?: ReactElement[] | any;
};

const SidebarDropdown = ({
  title,
  icon,
  numOfNotif,
  targetLink,
  dropdownIcon,
  dropdownText,
  droppdownLinks,
}: Props) => {
  const location = usePathname();
  const path = useParams()
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if(location == targetLink) {
        setIsDropdownVisible(true)
    } else {
        setIsDropdownVisible(false)
    }
  }, [])

  return (
    <div
      className={!isDropdownVisible ? "w-full relative" : "w-full bg-gray-200 rounded-2xl p-1 relative"}
      onMouseEnter={() => dropdownText?.length !== 0 && setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}

    >
      <Link
        href={{ pathname: targetLink }}
        className={
          location === targetLink
            ? "flex flex-col items-center  w-full h-12 px-3  bg-mainPink text-white rounded-2xl "
            : "flex flex-col items-center hover:text-black hover:bg-gray-200 w-full h-12 px-2 mt-2 active:bg-mainPink active:text-white rounded-2xl"
        }
        prefetch={true}
      >
        <div className="flex flex-row w-3/4 h-12 items-center gap-3">
          {icon}

          <span className="text-[16px]  font-light">{title}</span>
        </div>

        {/* <div className="ml-8 flex items-center justify-center rounded-full bg-red-600 w-3 h-3 text-white text-sm">
        <p>{numOfNotif}</p>
      </div> */}
      </Link>
      {( isDropdownVisible && dropdownText?.length !== 0) && (

        <div className="flex flex-col w-full py-1">
          {dropdownText?.map((text, index) => (
            <Link
            href={{ pathname: droppdownLinks[index] }}
            key={index}
            className={
              location === droppdownLinks[index]
                ? "flex flex-col items-center  w-full h-12 px-3 mt-2 bg-mainPink text-white rounded-2xl "
                : "flex flex-col items-center hover:text-black hover:bg-gray-200 w-full h-12 px-3 mt-2 active:bg-mainPink active:text-white rounded-2xl"
            }
            prefetch={true}
          >
            <div className="flex flex-row w-3/4 h-12 items-center gap-3">
              {dropdownIcon[index]}

              <span className="text-[16px]  font-light">{text}</span>
            </div>

            
          </Link>
          ))}
          
        </div>
      )}
    </div>
  );
};

export default SidebarDropdown;
