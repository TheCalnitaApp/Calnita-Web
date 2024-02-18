import React, { Component } from "react";
import Userreviewcard from "../organisms/Userreviewcard";
import { SendIcon } from "../../assets/icons";

const Reviewsbody = () => {
  return (
      <div className="flex-col flex w-full h-full justify-start items-start pt-8 gap-8">
        <div className="flex flex-row h-fit mb-4">
          <button className=" text-xs font-light p-1 px-6 rounded-lg bg-white active:bg-white">
            All
          </button>
          <button className="mx-5 text-xs font-light p-1 px-6 rounded-md bg-gray-100 active:bg-white">
            Critical
          </button>
         
        </div>
        <div className="flex flex-col items-start justify-center w-4/5 h-[25vh] bg-white rounded-3xl pl-8 py-2">
          <div className="w-3/5 flex flex-col justify-between h-4/5">
            <Userreviewcard
          rating={2}
          userName="Daramfon Ukpong"
          userPhoto="errerer"
          productName="VSP acne and spots removal cream"
        />
        <p className="text-xs font-light">I have been using this body lotion for the past one month, i cannot express the feeling i had when i discovered the scars on my body had gone away, i’ll recommend this product to anyone.</p>
        <div className="flex flex-row items-center justify-between w-full gap-5">
          <input type="text" name="comment" className="w-full py-2 pl-2 border border-gray-200 rounded-lg bg-white font-light text-black" placeholder="Add a comment 🙂"/>
          <button className="p-2 bg-mainPink rounded-full text-white border-none">
            {SendIcon}
          </button>
        </div>
        
          </div>
        
        </div>
      </div>
  );
};

export default Reviewsbody;
