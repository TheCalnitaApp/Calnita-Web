import React, { useState } from "react";
import { Field, useFormikContext } from "formik";
import { TrashIcon, addSquare, arrowLeftIconBlack, arrowLeftIconWhite } from "@/assets/icons";

import {
  CustomSelectInput,
  CustomTextInput,
} from "@/components/organisms/CustomInputs";
import { Countries } from "@/utils/countries";

const UploadDocsForm = (props: any) => {
  const [nafdac, setNafdac] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [states, setStates] = useState<Array<string>>(["Nigeria"])
  const { setFieldValue } = useFormikContext();

  function setNafdacPrev(e: any) {
    console.log(e.target.files);
    setFieldValue("document", e.target.files);
    setNafdac(URL.createObjectURL(e.target.files[0]));
  }

  function setCountry(selectedCountry: string) {
    setFieldValue("country", selectedCountry)
   setStates([selectedCountry])
  }

  return (
    <div className="flex flex-col w-full justify-center items-start gap-6 text-black">
      <span className="text-xl mb-3 font-light">Join us today 👋</span>
      <select
        name="country"
        id=""
        className="h-fit bg-transparent border border-solid border-black rounded-xl text-3xl"
        onChange={(e: any) => setCountry(e.target.value)}
      >
        {Countries.map((country, index) =>  <option key={index} value={country.name}>{country.flag}</option>)}
       

      </select>
      <CustomSelectInput
        placeholder={"What state is your store located?"}
        name="location"
        label={"What state is your store located?"}
        options={
          
            Countries!.find((country) => country.name === states[0])!.states
         
          }
      />
      <CustomTextInput
        placeholder={"e.g 23 Wellington bassey, Uyo, Akwa-Ibom"}
        name="address"
        label={"Where is your store address?"}
      />
      <div className="flex flex-col gap-5 h-full w-full items-center">
        <div className="flex flex-col gap-3 h-full w-3/5">
          <label
            htmlFor="nafdac"
            className="flex flex-row items-center font-light text-xs text-black gap-4"
          >
            <div className="flex items-center justify-center p-1  border border-black  rounded-lg ">
              {arrowLeftIconBlack}
            </div>
            Upload Business Registration Doc (file type: jpg)
          </label>

          <div className="flex items-center justify-center flex-col w-full">
            <Field
              type="file"
              name="document"
              className="w-full hidden"
              value={undefined}
              // hide the input field
              accept="image/*" // accept only image files
              onChange={setNafdacPrev}
              id="nafdacDoc" // add an id to the input
            />

            <label
              htmlFor="nafdacDoc"
              className="relative flex flex-col items-center justify-center w-full text-center border-[1px] border-[#D0D5DD] border-dashed rounded-lg cursor-pointer"
            >
              {nafdac ? (
                <>
                  <img
                    src={nafdac}
                    alt="Preview"
                    className="w-2/4 h-3/4 object-cover"
                  />
                  <div className="flex flex-row gap-3 items-center absolute">
                    <button
                    type="button"
                    onClick={(e) => {setNafdac(""); e.stopPropagation()}}
                    className=" bg-white rounded-full p-1"
                  >
                    {TrashIcon}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white rounded-full"
                  >
                    <img src="/expandicon.gif" alt="" className="w-8 p-2 rounded-full"/>
                  </button>
                  </div>
                  
                </>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-3 border border-dashed rounded-lg border-black">
                  {addSquare}
                  <span className="font-extralight text-black">
                    Browse and chose the files you want to upload from your
                    computer
                  </span>
                 
                </div>
              )}
            </label>

            {isModalOpen && (
              <div
                style={{
                  position: "fixed",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setIsModalOpen(false)}
              >
                <img
                  src={nafdac}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocsForm;
