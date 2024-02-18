"use client";

import React, { Component } from "react";
import Link from "next/link";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { CalnitaLogo } from "../../../assets/icons";
import Signinform from "../../../components/primitive/Signinform";
const Signin = () => {
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
        <Signinform />
      </div>
    </div>
  );
};

export default Signin;
