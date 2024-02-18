import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";

const Signupform = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <span className="text-xl mb-3 font-bold">Join us today👋</span>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="brand-name"
            className="block text-xs font-bold text-gray-900"
          >
            Brand Name
          </label>
          <Field
            type="text"
            name="brand-name"
            className="form-control block w-3/4 p-3 text-gray-900 border border-gray-300 rounded-full  sm:text-xs"
            placeholder="What is your brand name?"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="service"
            className="block mt-3 text-xs font-bold text-gray-900"
          >
            Brand or Distributor
          </label>
          <Field
            type="text"
            as="select"
            name="service"
            className="form-control block w-3/4 p-3 text-gray-900 border border-gray-300 rounded-full  sm:text-xs"
            placeholder="Brand or Distributor?"
          >
            <option value="brand">Brand</option>
            <option value="distributor">Distributor</option>
          </Field>
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="block text-xs font-bold text-gray-900"
          >
            Email Address
          </label>
          <Field
            type="text"
            name="email"
            className="form-control block w-3/4 p-3 text-gray-900 border border-gray-300 rounded-full sm:text-xs"
            placeholder="Your brand's email"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="password"
            className="block text-xs font-bold text-gray-900"
          >
            Password
          </label>
          <Field
            type="text"
            name="password"
            className="form-control block w-3/4 p-3 text-gray-900 border border-gray-300 rounded-full sm:text-xs"
            placeholder="***********"
          />
        </div>

        <span className="text-xs">
          Have an account?
          <Link href={"/signin"} className="text-pink-500">
            Sign In
          </Link>
        </span>
      </div>

      <div className="form-group">
        <button className="px-4 py-2 mt-3 bg-pink-500 rounded-full text-white">
          Create Account
        </button>
      </div>

      <span className="text-xs mt-4">
        By Clicking Create account you agree with our
        <a href="" className="text-pink-500">
          Terms and <br />
          Conditions
        </a>
        and
        <a href="" className="text-pink-500">
          Privacy Policy
        </a>
      </span>
    </div>
  );
};

export default Signupform;
