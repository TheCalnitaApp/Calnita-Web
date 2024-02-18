import React, { Component } from "react";

const LogoutModal = ({ closeFxn, logoutFxn }: any) => {
  return (
    <div className=" w-screen  h-screen flex flex-row items-center justify-center left-0 top-0 gap-6 fixed bg-black/30 backdrop-blur-md z-10">
      <div className=" flex justify-center items-center rounded-md w-[30vw] h-2/5 bg-white relative">
        <span className="  text-black absolute right-4 top-4 rounded-full">
          x
        </span>
        <div className="flex flex-col  items-center justify-between h-[60%]">
          <p className="mt-4 text-black text-xl text-center w-[60%]">
            Are you sure you want to{" "}
            <span className="text-mainPink">Logout</span>?
          </p>
          <div className="flex flex-row gap-6 w-[80%]">
            <button
              onClick={closeFxn}
              className="flex flex-row justify-center items-center gap-2  w-3/5 text-md py-2 px-3 rounded-xl bg-mainPink text-white"
            >
              No
            </button>
            <button
              onClick={logoutFxn}
              className="flex flex-row justify-center items-center gap-2  w-3/5 text-md py-2 px-3 rounded-xl bg-lightGreyButton text-lightGrey"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
