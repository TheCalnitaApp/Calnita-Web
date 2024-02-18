"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import { useMultistepForm } from "../../../hooks/useMultistepform";
import DetailsForm from "../../../prerenderedComponents/forms/detailsform";
import UploadDocsForm from "../../../prerenderedComponents/forms/uploadForm";
import { CalnitaLogo, arrowLeftIconWhite } from "../../../assets/icons";
import {
  handleBrandSignUp,
  requestOtp,
  verifyOTP,
} from "../../../utils/Functions/functions";
import toast from "react-hot-toast";
import OtpForm from "@/prerenderedComponents/forms/otpform";

const Signup = () => {
  const { step, currentStepIndex, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <DetailsForm key={1} />,
    <OtpForm key={2} />,
    <UploadDocsForm key={3} />,
  ]);

  const handleSignupOtp = async (values: any) => {
    if (isFirstStep) {
      console.log(values);
      const success = await toast.promise(requestOtp(values.email, "signup"), {
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
    <div className="grid grid-cols-2 h-screen w-screen items-center pb-20 bg-white">
      <div className="absolute w-40 h-10 top-10 left-14">{CalnitaLogo}</div>
      <div className="flex flex-col h-2/4 justify-start items-start">
        <div className="ml-12 relative">
          <h1 className="text-5xl font-hero leading-tight text-black">
            Where <span className="text-mainPink">beauty brands</span> and{" "}
            <span className="text-mainPink">customers</span> come together
          </h1>
          <p className="text-md text-gray-400 w-3/5">
            The ultimate destination for beauty brands to sell, engage and
            better understand their customers
          </p>
        </div>
        <div className="bottom-0 left-0 absolute h-[70vh]">
          <img src="/herologo.svg" alt="" className="h-full" />
        </div>
      </div>

      <div className="flex items-center h-3/4 justify-between flex-col relative">
        <div className="absolute -top-16 left-0">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="flex flex-row items-center gap-3 bg-mainPink text-white rounded-lg px-5 py-1 font-light"
            >
              {arrowLeftIconWhite}
            </button>
          )}
        </div>
        <div className="flex flex-col h-fit items-start gap-14 form-control form-group">
          <div className="flex flex-row h-fit items-start gap-14">
            <Formik
              initialValues={{
                name: "",
                identity: "Brand",
                email: "",
                password: "",
                document: [],
                address: "",
                location: "",
                country: "",
                otp: "",
                purpose:  "signup"
              }}
              onSubmit={(values, { setSubmitting }) => {
                toast.promise(handleBrandSignUp(values), {
                  loading: "Creating Brand",
                  success: "Registration Successful, Redirecting...",
                  error: (err) => `${err}`,
                });
              }}
            >
              {({ setFieldValue, handleSubmit, values, isSubmitting }) => (
                <Form className="w-[30vw] h-fit flex items-center justify-center flex-col gap-2 self-end">
                  {step}
                  {!isLastStep ? (
                    <button
                      className="py-2 mt-3 w-[35%] text-center text-base bg-mainPink rounded-full text-white"
                      type="button"
                      onClick={() => handleSignupOtp(values)}
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 mt-3 bg-mainPink rounded-full text-white
                    "
                      type="submit"
                    >
                      Create Account
                    </button>
                  )}{" "}
                  <div className="flex flex-col gap-4 mt-6">
                    <span className="text-xs text-gray-500">
                      Have an account?{" "}
                      <Link href={"/"} className="text-mainPink">
                        Sign In
                      </Link>
                    </span>

                    <span className="text-xs mt-4 text-gray-500 text-center">
                      By Clicking Create account you agree with our{" "}
                      <a href="" className="text-mainPink">
                        {" "}
                        Terms and <br />
                        Conditions
                      </a>{" "}
                      and{" "}
                      <a href="" className="text-mainPink">
                        Privacy Policy
                      </a>{" "}
                    </span>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="flex flex-row w-fit h-[35vh] mt-[20%] gap-2">
              <div className="flex flex-col justify-between">
                <div className="bg-mainPink w-[1.5rem] h-[1.5rem]  flex items-center justify-center rounded-full text-gray-100">
                  1
                </div>
                <div
                  className={
                    !isFirstStep
                      ? "bg-mainPink w-[1.5rem] h-[1.5rem]  flex items-center justify-center rounded-full text-gray-100"
                      : "bg-gray-400 w-[1.5rem] h-[1.5rem]  flex items-center justify-center rounded-full text-white"
                  }
                >
                  2
                </div>
                <div
                  className={
                    isLastStep
                      ? "bg-mainPink w-[1.5rem] h-[1.5rem]  flex items-center justify-center rounded-full text-gray-100"
                      : "bg-gray-400 w-[1.5rem] h-[1.5rem]  flex items-center justify-center rounded-full text-white"
                  }
                >
                  3
                </div>
              </div>{" "}
              <div className="h-full w-1 flex-col flex rounded-md">
                <div
                  className={
                    !isFirstStep
                      ? "w-full h-1/2 bg-mainPink rounded-t-md"
                      : "w-full h-1/2 bg-gray-300 rounded-t-md"
                  }
                ></div>
                <div
                  className={
                    isLastStep
                      ? "w-full h-1/2 bg-mainPink rounded-b-md"
                      : "w-full h-1/2 bg-gray-300 rounded-b-md"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
