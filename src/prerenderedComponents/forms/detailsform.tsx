/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikProvider, useFormikContext } from "formik";
import { CustomTextInput, CustomSelectInput } from "../../components/organisms/CustomInputs";
import { Eye, EyeClosed } from "../../assets/icons";

const DetailsForm = () => {
  useFormikContext
  const [peepIcon, setPeepIcon] = useState(EyeClosed);
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
  return (
    
       <div className="flex flex-col w-[80%] gap-3 justify-center items-start">
      <span className="text-[28px] mb-3 font-light text-black">
        Join us today👋
      </span>
     
      <CustomTextInput placeholder={"What is your brand name?"} name="name" label={"Brand Name"}  />
      <CustomSelectInput placeholder={"Are you a brand or Distributor?"} name="identity" label={"Brand or Retailer?"} options={["Brand", "Retailer"]}  />
      <CustomTextInput placeholder={"Your email address?"} name="email" label={"Email Address"} type="email" />
      
      
      <div className="flex flex-col gap-[10px] w-full">
        <label
          htmlFor="password"
          className="font-normal text-black"
        >
          Password
        </label>
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
    </div>
   
  );
};

export default DetailsForm;
