import { Eye, EyeClosed } from "@/assets/icons";
import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
export function Form3() {
  const [peepIcon, setPeepIcon] = useState(EyeClosed);
  const [confirmPeep2, setConfirmPeep2] = useState(EyeClosed);
  const peepPassword = () => {
    const x = document.getElementById("password") as HTMLInputElement;
    if (x.type === "password") {
      x.type = "text";
      setPeepIcon(Eye);
    } else {
      x.type = "password";
      setPeepIcon(EyeClosed);
    }
  };
  const confirmPeep = () => {
    const x = document.getElementById("confirmPass") as HTMLInputElement;
    if (x.type === "password") {
      x.type = "text";
      setConfirmPeep2(Eye);
    } else {
      x.type = "password";
      setConfirmPeep2(EyeClosed);
    }
  };
  return (
    <div className="w-full flex flex-col gap-6">
      <span className="text-[28px]  w-full mb-3 font-normal text-black">
        Create Your New Password
      </span>
      <div className="flex flex-col justify-start gap-2 w-full text-black">
        <label htmlFor="password" className="font-normal">
          Password
        </label>
        <div className="w-full flex flex-row relative items-center">
          <div className="w-full flex flex-row relative items-center">
            <Field
              type={peepIcon.type === "text" ? "text" : "password"}
              name="password"
              id="password"
              className="w-full rounded-full border border-gray-300 p-3 text-black bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] "
              placeholder="***********"
            />
            <div
              className="absolute right-3 cursor-pointer "
              onClick={peepPassword}
            >
              {peepIcon}
            </div>
          </div>
        </div>
        <ErrorMessage
          name="password"
          component="h6"
          className="text-[10px]  w-full mb-3 font-semibold text-[#f10000]"
        />
      </div>
      <div className="flex flex-col justify-start gap-2 w-full text-black">
        <label htmlFor="password" className="font-normal">
          Confirm Password
        </label>
        <div className="w-full flex flex-row relative items-center">
          <div className="w-full flex flex-row relative items-center">
            <Field
              type={peepIcon.type === "text" ? "text" : "password"}
              name="confirmPass"
              id="confirmPass"
              className="w-full rounded-full border border-gray-300 p-3 text-black bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] "
              placeholder="***********"
            />
            <div
              className="absolute right-3 cursor-pointer "
              onClick={confirmPeep}
            >
              {confirmPeep2}
            </div>
          </div>
        </div>
        <ErrorMessage
          name="confirmPass"
          component="h6"
          className="text-[10px]  w-full mb-3 font-semibold text-[#f10000]"
        />
      </div>
    </div>
  );
}
