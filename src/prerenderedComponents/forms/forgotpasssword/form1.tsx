import { CustomTextInput } from "@/components/organisms/CustomInputs";
import React from "react";
export function Form1({}) {
  return <div className="w-full flex flex-col gap-6">
               <span className="text-2xl  w-full mb-3 font-semibold text-black">
              Forgot Password?  👋
            </span>
            <CustomTextInput placeholder={"Your brand's email"} name={"email"} label={"Email Address"} />  
            </div>;
}
  