import React, { Component, useEffect, useState } from "react";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { CustomTextInput } from "@/components/organisms/CustomInputs";

const OtpForm = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval: string | number | NodeJS.Timer | undefined;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  const { values }: any = useFormikContext();
  return (
    <div className="flex flex-col justify-center items-start">
      <span className="text-xl mb-3 font-light text-black">
        Check your mail, we have sent a verification code to{" "}
        <span className="underline underline-offset-3 text-mainPink">
          {values.email}{" "}
        </span>
      </span>

      <div className="flex flex-col justify-start gap-2 w-full text-black">
        <label htmlFor="productCode" className="font-normal">
          {"Enter Verification number"}
        </label>
        <Field
          type={"text"}
          name={"otp"}
          className={
            "w-full rounded-full border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] dark:autofill:bg-[#f92a657b]"
          }
          placeholder={"e.g C-371923"}
          required={true}
        />
        <ErrorMessage
          name={"otp"}
          component="h6"
          className="text-[10px]  w-full mb-3 font-light  text-[#f10000]"
        />
        {timer  > 0  ? (<span className="font-light text-xs">Resend code in <span className="text-mainPink">{timer}s</span></span>) :  (<button className="bg-black text-center p-2 rounded-3xl shadow-custom  w-fit text-xs text-white ">Resend Code</button>)}
        
      </div>
    </div>
  );
};

export default OtpForm;
