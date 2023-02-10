import React, { Component } from "react";
import { galleryAddLg, galleryAddSm } from "../assets/icons";

const SettingsCard = ({ brdCvrImg }) => {
    return (
        <div className="flex flex-col w-[75vw] gap-0 h-[85vh] justify-center items-center mt-8 ">
            <div className="flex flex-row justify-between w-[75vw]">
                <div className="flex flex-row h-fit mb-4">
                    <button className=" text-xs p-1 px-6 rounded-md bg-gray-100 active:bg-white">
                        General Settings
                    </button>
                    <button className="mx-5 text-xs p-1 px-6 rounded-md bg-gray-100 active:bg-white">
                        Payment Settings
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-[75vw] h-[80vh] bg-white rounded-xl items-center relative mt-4">
                <div className=" relative w-full h-[24vh]  bg-gray-200 rounded-t-md flex justify-center items-center">
                    {" "}
                    {
                        (brdCvrImg = true ? (
                            <img src={brdCvrImg} />
                        ) : (
                            <span className="text-sm font-bold text-gray-400 mt-1">
                                {galleryAddLg} Add a profile picture
                            </span>
                        ))
                    }
                    <div className="flex flex-col absolute -bottom-8 left-5 justify-center items-center">
                        <div className=" rounded-full items-center justify-center w-fit h-fit p-8 bg-gray-300 ">
                            {galleryAddSm}
                        </div>
                        <span className="text-sm font-bold text-gray-600 mt-1">
                            Add a profile picture
                        </span>
                    </div>
                </div>

                    <div className="flex flex-col justify-around mt-20 w-[70vw]">
                        <div className="form-group">
                    <label for="brand-name" className='block mt-2 text-xs font-bold text-gray-900 '>Brand Name</label>
                    <input type="text" id="brand-name" className=" mt-1 form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs" placeholder="What is your brand's name?" />
                </div>
                <div className="form-group">
                    <label for="bio" className='block mt-3 text-xs font-bold text-gray-900 '>Bio</label>
                    <textarea rows="7" id="bio" className=" mt-1 form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs" placeholder="What would you describe your brand as?" />
                </div>
                    </div>
                
            </div>
        </div>
    );
};

export default SettingsCard;
