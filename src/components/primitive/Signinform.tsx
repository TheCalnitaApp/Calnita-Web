
import React, { Component, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Eye, EyeClosed } from "../../assets/icons";

const Signinform = (brandName: any) => {
  const router = useRouter();
  const { status } = useSession();
  const [peepIcon, setPeepIcon] = useState(EyeClosed);
  const peepPassword = () => {
    const x = document.getElementById("password") as HTMLInputElement;
    if (x.type === "password") {
      setPeepIcon(Eye);
      x.type = "text";
    } else {
      setPeepIcon(EyeClosed);
      x.type = "password";
    }
  };

  const handleSignIn = async (values: any) => {
    try {
      const result: any = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/Dashboard"
      }).then(({ ok, error }: any) => {
        if (ok) {
            router.push("/Dashboard");
            return Promise.resolve(); 
        } else {
            console.log(error)
            
            return Promise.reject(error); 
        }
    })
     
  } catch (e) {
    // Handle any unexpected errors
    return Promise.reject(e);
  }

  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password  is required"),
  });

  return (
    <div className="flex flex-col w-[30vw] h-screen text-left justify-center items-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          toast.promise(handleSignIn(values), {
            loading: "Logging you In",
            success: (data) => `Login Succesful! Welcome!`,
            error: (err) => `${err.toString()}`,
          });
        }}
      >
        {(props) => (
          <Form className="h-fit w-[90%] flex flex-col gap-6">
            <span className="text-[28px]  w-full mb-3 font-light text-black">
              Welcome back, Sign into{" "}
              <span className="text-mainPink">your account</span> 👋
            </span>
            <div className="flex flex-col justify-start gap-2 w-full text-black">
              <label
                htmlFor="email-address"
                className="font-normal"
                

              >
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                className="w-full rounded-full border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] autofill:bg-[#f92a657b]"
                placeholder="Your brand's email"
              />
              <ErrorMessage
                name="email"
                component="h6"
                className="text-[10px]  w-full mb-3 font-semibold text-[#f10000]"
              />
            </div>
            <div className="flex flex-col justify-start gap-2 w-full text-black">
              <label
                htmlFor="password"
                className="font-normal"
              >
                Password
              </label>
              <div className="w-full flex flex-row relative items-center">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="w-full rounded-full border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] autofill:bg-[#f92a657b]"
                  placeholder="***********"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                />
                <div
                  className="absolute right-3 cursor-pointer"
                  onClick={peepPassword}
                >
                  {peepIcon}
                </div>
              </div>
              <ErrorMessage
                name="password"
                component="h6"
                className="text-[10px]  w-full mb-3 font-semibold text-[#f10000]"
              />
            </div>

            <Link
              href="/Auth/Forgot"
              className="block mt-3 text-xs font-medium text-mainPink text-center"
            >
              Forgot Password?
            </Link>

            <div className="form-group flex items-center mt-3">
              <input
                type="checkbox"
                id="remember-me"
                className="form-control mr-2 rounded-md border-gray-300"
              />
              <label htmlFor="remember-me" className="text-xs">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="px-14 py-3 mt-3 bg-mainPink rounded-full text-white text-base self-center "
            >
              Sign In
            </button>

            <span className="text-xs mt-4 text-gray-400">
              Dont have an account?{" "}
              <Link href={"/Auth/Register"} className="text-mainPink">
                Create free account
              </Link>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signinform;
