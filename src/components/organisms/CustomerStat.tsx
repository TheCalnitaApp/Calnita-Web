import React, { ReactElement } from "react";
import { Currency } from "../../utils/Functions/functions";

type Props = {
    icon?: ReactElement
    title: string
    data: number
    isImg: boolean;
    img?: string;
}
export function CustomerStat({ icon, title, data, isImg, img }: Props) {
  return (
    <div className="flex flex-row h-fit w-[30%] items-center justify-start gap-4">
        {isImg ? (<img src={img} className="w-20 h-20 rounded-full bg-lightGrey" />) : icon}
      
      <div className="flex flex-col gap-1">
        <span className="text-xl font-extralight text-[#71717a]">{title}</span>
        <span className="text-xl font-light">{data}</span>
      </div>
    </div>
  );
}
