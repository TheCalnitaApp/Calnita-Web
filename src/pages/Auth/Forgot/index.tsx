"use client";

import React, { Component } from "react";
import Link from "next/link";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { CalnitaLogo } from "../../../assets/icons";
import { useMultistepForm } from "@/hooks/useMultistepform";
import { requestOtp, resetPassword, verifyOTP } from "@/utils/Functions/functions";
import { CustomTextInput } from "@/components/organisms/CustomInputs";
import toast from 'react-hot-toast';
import *  as Yup from "yup"
import { Form1 } from "@/prerenderedComponents/forms/forgotpasssword/form1";
import { Form2 } from "@/prerenderedComponents/forms/forgotpasssword/form2";
import { Form3 } from "@/prerenderedComponents/forms/forgotpasssword/form3";
const ForgotPassword = () => {
   

const validationSchema =Yup.object({
    email: Yup.string().required('Email is required'),
    otp: Yup.string().required('OTP is required'),
    password: Yup.string().required('Password is required'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('password'), "null"], 'Passwords must match')
      .required('Confirm Password is required'),
  });

    const { step, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultistepForm([
        <Form1 key={1}/>,
            <Form2 key={2}/>,
           <Form3 key={3}/>
      ]);
    
      const handleSignupOtp = async (values: any) => {
        if (isFirstStep) {
          console.log(values);
          const success = await toast.promise(requestOtp(values.email,  "passwordReset"), {
            loading: "Sending OTP",
            success: (data) => `${data}`,
            error: (err) => `${err}`,
          });
          if (success) {
            next();
          }
        }
    
        if(currentStepIndex + 1  === 2) {
          console.log(values);
          
          const success = await toast.promise(verifyOTP(values), {
            loading: "verifying OTP",
            success: (data) => `${data}`,
            error: (err) => `${err}`,
          });
          if (success) {
            next();
          }
        }
      };

  return (
    <div className="grid grid-cols-2 h-screen w-screen absolute items-center bg-white">
      <div className="absolute w-40 h-10 top-10 left-14">{CalnitaLogo}</div>
      <div className="flex flex-col h-2/4 justify-start items-start">
        <div className="ml-12 relative">
          <h1 className="text-5xl font-hero leading-tight text-black">
            Where <span className="text-mainPink">beauty brands</span> and{" "}
            <span className="text-mainPink">customers</span> come together
          </h1>
          <p className="text-md text-gray-400 w-2/3">
            The ultimate destination for beauty brands to sell, engage and
            better understand their customers
          </p>
        </div>
        <div className="bottom-0 left-0 absolute h-[70vh]">
          <img src="/herologo.svg" alt="" className="h-full" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-[30vw] h-screen text-left justify-center items-center">
      <div className="flex flex-col w-[30vw] h-screen text-left justify-center items-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPass: "",
          otp: "C-",
          purpose: "passwordReset"
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          toast.promise(resetPassword(values), {
            loading: "Resetting password",
            success: (data) => `Password reset Successful`,
            error: (err) => `${err.toString()}`,
          });
        }}
      >
        {(props) => (
          <Form className="h-fit w-[90%] flex flex-col gap-6 items-center">
          {step}
           
            {!isLastStep ? (
                    <button
                      className="py-2 mt-3 w-[35%] text-center text-base bg-mainPink rounded-full text-white"
                      type="button"
                      onClick={() => handleSignupOtp(props.values)}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 mt-3 bg-mainPink rounded-full text-white
                    "
                      type="submit"
                    >
                      Reset Password
                    </button>
                  )}{" "}
          </Form>
        )}
      </Formik>
    </div>
    </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
