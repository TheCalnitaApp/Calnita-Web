import { CustomTextInput } from "@/components/organisms/CustomInputs";
import { useFormikContext } from "formik";
import React from "react";
export function Form2({}) {
  const {values}: any  = useFormikContext()
  return (
    <div className="w-full flex flex-col gap-6">
       <span className="text-lg  w-full mb-3 font-light text-gray-300">
       A code has been sent to <span className="text-mainPink underline  underline-offset-2"> {values.email}</span>
      </span>
      <span className="text-2xl  w-full mb-3 font-light text-black">
        Forgot Password?
      </span>
      <CustomTextInput
        placeholder={"Enter code"}
        name={"otp"}
        label={"Enter OTP code"}
      />
    </div>
  );
}
