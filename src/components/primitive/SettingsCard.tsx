/* eslint-disable @next/next/no-img-element */
import { galleryAddLg, galleryAddSm } from "../../assets/icons";

("use Client");
import { ChangeEvent } from "react";
import { Formik, Form, Field } from "formik";
import { useSession } from "next-auth/react";
import React, { Component, useEffect, useState } from "react";
import { handleBrandUpdate } from "@/utils/Functions/functions";
import toast from "react-hot-toast";
import { CustomSelectInput, CustomTextArea, CustomTextInput } from "../organisms/CustomInputs";

const SettingsCard = () => {
  const [coverPhoto, setCoverPhoto] = useState<null | string>(null);
  const [avatar, setAvatar] = useState<null | string>(null);
  const { data: Session, update } = useSession();
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [fileInputs, setFileInputs] = useState([null, null]);
  const [profileImg, setProfileImg] = useState<null | string>(null);
  const [fileName, setFileName] = useState("No selected file");

  interface inputTypes {
    avatar: string;
    coverPhoto: string;
  }

  const handleFileInputChange = (file: any, index: any) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[index] = file;
    setFileInputs(newFileInputs);
    console.log(fileInputs);
  };


 

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>,
    element: string
  ) {
    const inputField = document.querySelector<HTMLInputElement>(element);

    if (inputField) {
      // Now you can access and use profileField as an HTMLInputElement
      const value = inputField.click();
      // Do something with the value
    }
  }

  return (
    <div className="flex flex-col w-full gap-4 h-fit justify-center items-center mt-8 ">
      <div className="flex flex-row justify-start w-full">
        <div className="flex flex-row justify-between h-fit w-2/5">
          <button className="font-light py-1 px-6 rounded-lg bg-white active:bg-white">
            General Settings
          </button>
          <button className="font-light py-1 px-6 rounded-lg  active:bg-white">
            Privacy Policy
          </button>
          <button className="font-light py-1 px-6 rounded-lg  active:bg-white">
            Terms Of Services
          </button>
        </div>
      </div>
      <Formik
        initialValues={{
          id: `${Session?.user.brand.id}`,
          avatar: "",
          coverPhoto:  "",
          identity: `${Session?.user.brand.identity}`,
          bio: `${Session?.user.brand.bio}`,
          name: `${Session?.user.brand.name}`,
          token: "",
        }}
       
        onSubmit={ async (values) => {
          try {
              const success =  await  toast.promise(handleBrandUpdate(values), {
            loading: "updating Data..",
            success: (data) => `Data Updated Successfully ✨ `,
            error: (err) => `Error occured while updating Data`,
          });

          if (success) {
            update({...Session, user: {
              ...Session!.user, brand:  success
            }})
          }
          } catch(error) {
            console.log(error)
          }
     
        
        }}
      >
        {({ setFieldValue, handleSubmit, values }) => (
          <Form className="flex flex-col w-full h-fit bg-white rounded-3xl items-center relative mt-4 gap-8 pb-4">
            <div className=" relative w-full h-[30vh]  bg-[#DEDEDE] rounded-t-3xl flex justify-center items-center">
              {" "}
              <div
                className="flex items-center justify-center flex-col w-full h-full"
                onClick={(e: any) => handleInputChange(e, ".input-field")}
              >
                <label
                  htmlFor="registrationDoc"
                  className=" relative flex flex-col items-center justify-center w-full py-8 px-4 text-center h-full rounded-3xl cursor-pointer"
                >
                  {" "}
                  { Session?.user.brand.coverPhoto && values.coverPhoto === "" ? (
                    <img
                      src={Session?.user.brand.coverPhoto}
                      alt={fileName}
                      className="absolute w-full h-full object-cover rounded-t-3xl "
                    />
                  ) : coverPhoto  ? (
                    <img
                      src={coverPhoto}
                      alt={fileName}
                      className="absolute w-full h-full object-cover rounded-t-3xl"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-3">
                      {galleryAddLg}
                      <span className="font-light text-black">
                        Browser the files you want to upload
                      </span>
                     
                    </div>
                  )}
                  <input
                    type="file"
                    name="coverPhoto"
                    accept="image/*"
                    className="input-field"
                    hidden
                    onChange={(e: any) => {
                      setCoverPhoto(URL.createObjectURL(e.target.files[0]));
                      setFieldValue("coverPhoto", e.target.files[0])
                    }}
                  />
                </label>
              </div>
              <div
                className="flex flex-col absolute -bottom-12 left-16 justify-center items-center"
                onClick={(e: any) => handleInputChange(e, ".profile-field")}
              >
                <label
                  htmlFor="registrationDoc"
                  className=" relative flex flex-col items-center justify-center w-[8rem] py-8 px-4 rounded-full h-[8rem] bg-[#CCCCCC] cursor-pointer"
                >
                  {" "}
                  {values.avatar === "" && Session?.user.brand.avatar ? (
                    <img
                      src={Session?.user.brand.avatar}
                      alt={fileName}
                      className="absolute w-full h-full object-cover rounded-full "
                    />
                  ) : avatar ? (
                    <img
                      src={avatar}
                      alt={fileName}
                      className="absolute w-full h-full object-cover rounded-full "
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-3">
                      {galleryAddSm}
                    </div>
                  )}
                  <input
                    type="file"
                    className="profile-field"
                    name="avatar"
                    hidden
                    onChange={(e: any) => {
                      setAvatar(URL.createObjectURL(e.target.files[0]));
                      setFieldValue("avatar", e.target.files[0])
                    }}
                  />
                </label>
                {values.avatar !== "" && (
                  <span className="text-xs font-light text-gray-600 mt-1">
                    Add a profile picture
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-around mt-20 w-5/6 gap-6">
            
              <CustomTextInput placeholder={"What is your brand's name?"} name={"name"} label={"Brand Name"} />
             
              <CustomSelectInput placeholder={"Are you a brand or retailer?"} name={"service"} label={"Brand or Retailer"} options={["Brand", "Retailer"]} />
              
              <CustomTextArea placeholder={"What would you describe your brand as?"} name={"bio"} label={"Bio"} rows={4} />
            </div>

            <button onClick={() => setFieldValue("token", Session!.user.token)} className="flex flex-row justify-center items-center text-xs p-4 rounded-xl bg-mainPink text-white">
              Save Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SettingsCard;
