import { Field, ErrorMessage, useFormikContext } from "formik";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import {
  CheckboxTypes,
  ImageTypes,
  InputTypes,
  SelectTypes,
  TextAreaTypes,
} from "../../utils/Functions/types";
import {  CreamsAndLotions,
  ForMen,
  FragrancesAndDeodorants,
  MyHair,
  MyMouth,
  MySkin,
  Suncare,
  ToolsAndAccessories, } from "@/utils/ProductUtils";
export const CustomTextInput = (props: InputTypes) => {
  const  location = usePathname()
  return (
    <div className="flex flex-col justify-start gap-2 w-full text-black">
      <label htmlFor="productCode" className="font-normal">
        {props.label}
      </label>
      <Field
        type={
          props.type === "number"
            ? "number"
            : props.type === "password"
            ? "password"
            : props.type === "email"
            ? "email"
            : "text"
        }
        name={props.name}
        className={
          (location === "/Auth/Register" || location === "/Auth/Forgot")
            ? "w-full rounded-full border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] dark:autofill:bg-[#f92a657b]"
            : "w-full rounded-xl border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] autofill:bg-[#f92a657b]"
        }
        placeholder={props.placeholder}
        required={location === "/Auth/Register" && true}
      />
      <ErrorMessage
        name={props.name}
        component="h6"
        className="text-[10px]  w-full mb-3 font-light  text-[#f10000]"
      />
    </div>
  );
};

export const CustomHiddenInput = (props: InputTypes) => {
  const  location = usePathname()
  return (
    <div className="flex flex-col justify-start gap-2 w-full text-black">
      <label htmlFor="productCode" className="font-normal">
        {props.label}
      </label>
      <Field
        type={
          "text"
        }
        name={props.name}
        hidden
        className={
          (location === "/Auth/Register" || location === "/Auth/Forgot")
            ? "w-full rounded-full border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] dark:autofill:bg-[#f92a657b]"
            : "w-full rounded-xl border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] autofill:bg-[#f92a657b]"
        }
        placeholder={props.placeholder}
        required={location === "/Auth/Register" && true}
      />
      <ErrorMessage
        name={props.name}
        component="h6"
        className="text-[10px]  w-full mb-3 font-light  text-[#f10000]"
      />
    </div>
  );
};
export const CustomTextArea = (props: TextAreaTypes) => {
  return (
    <div className="flex flex-col justify-start gap-2">
      <label htmlFor="productCode" className="font-normal">
        {props.label}
      </label>
      <Field
        type="text"
        as="textarea"
        rows={props.rows}
        name={props.name}
        className="w-full rounded-xl border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] autofill:bg-[#f92a657b]"
        placeholder={props.placeholder}
      />
      <ErrorMessage
        name={props.name}
        component="h6"
        className="text-[10px]  w-full mb-3 font-light text-[#f10000]"
      />
    </div>
  );
};

export const CustomSelectInput = (props: SelectTypes) => {
 const  location = usePathname()
  const {setFieldValue, values}:  any = useFormikContext()

 location === "/Products/add-product" && useEffect(() => {
    setFieldValue("category.subCategories", [])
   }, [values.category.name])
  return (
    <div className="flex flex-col justify-start gap-2 w-full text-black">
      <label htmlFor="productCode" className="font-normal">
        {props.label}
      </label>
      <Field
        type="text"
        as="select"
        name={props.name}
        className={
          location === "/Auth/Register"
            ? "w-full rounded-full border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] autofill:bg-[#f92a657b]"
            : "w-full rounded-xl border border-gray-300 p-3 bg-white font-light focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] autofill:bg-[#f92a657b]"
        }
        placeholder={props.placeholder}
      >
        {/* TODO: WRITE REGEX TO HANDLE SPACE IN OPTION VALU */}
        {props.options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </Field>
      <ErrorMessage
        name={props.name}
        component="h6"
        className="text-[10px]  w-full mb-3 font-light text-[#f10000]"
      />
    </div>
  );
};

export const CustomImageInput = (props: ImageTypes) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <label htmlFor="coverImg" className="font-normal">
        Product Image
      </label>
      <div className="flex flex-row gap-6 w-full">
        <input
          name={props.name}
          type="file"
          className="w-full rounded-xl border p-2 bg-white  file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-base file:font-light
          file:bg-[#000] file:text-white
           hover:file:border-[#F92A63] hover:file:border"
          onChange={props.onchange}
        />
        <ErrorMessage
          name={props.name}
          component="h6"
          className="text-[10px]  w-full mb-3 font-semibold text-[#f10000]"
        />

        {/* <button className="border-none bg-transparent">X</buton> */}
      </div>

      {/* <button className="flex flex-row justify-center items-center w-fit text-xs p-2 rounded-xl bg-mainPink text-white">
        <span className="flex flex-row gap-4 justify-between items-center">
          {addCircle} Add New image
        </span>
      </button> */}
    </div>
  );
};

export const CustomCheckboxInput = (props: CheckboxTypes) => {
  return (
  <div className="flex flex-col gap-4">
    <span className="font-normal block ">
        {props.label}
      </span>
      <div className="flex flex-row gap-4 flex-wrap justify-start">
 {props.options.map((option, index) => {
        return (
          <div id="ck-button" key={index}>
           <label>
            <Field type="checkbox" name={props.name} value={option}/>
            <ErrorMessage
        name={props.name}
        component="h6"
        className="text-[10px]  w-full mb-3 font-light text-[#f10000]"
      />
            <div>
              <span className="whitespace-nowrap font-light">{option}</span>
            </div>
            
          </label>
          </div>
        );
      })}
      </div>
     

      
    </div>
  );
};


export const CustomSwitchInput = ({ values }: any) => {
  switch (values) {
    case 'My Skin':
      return (
        <>
          <CustomCheckboxInput
            key={1}
            placeholder={'Enter Beauty concern'}
            name={'category.subCategories[0].types'}
            label={'Beauty Concern'}
            options={MySkin.BeautyConcern}
          />
          <CustomSelectInput
            key={2}
            placeholder={'Enter Product Type'}
            name={'category.subCategories[1].types'}
            label={'Product Type'}
            options={MySkin.ProductType}
          />
          <CustomCheckboxInput
            key={3}
            placeholder={'Enter Skin Type'}
            name={'category.subCategories[2].types'}
            
            label={'Skin Type'}
            options={MySkin.SkinTypes}
          />
        </>
      );
    case 'My Mouth':
      return (
        <CustomSelectInput
          key={2}
          placeholder={'Enter Product Type'}
          name={'category.subCategories[0].types'}
          label={'Product Type'}
          options={MyMouth.ProductType}
        />
      );
    case 'My Hair':
      return (
        <>
          <CustomCheckboxInput
            key={2}
            placeholder={'Enter Beauty Concern'}
            name={'category.subCategories[0].types'}
            label={'Beauty Concern'}
            options={MyHair.BeautyConcern}
          />
          <CustomSelectInput
            key={1}
            placeholder={'Enter Product Type'}
            name={'category.subCategories[2].types'}
            label={'Product Type'}
            options={MyHair.ProductType}
          />
        </>
      );
    case 'Creams and Lotions':
      return (
        <>
          <CustomCheckboxInput
            key={2}
            placeholder={'Enter Beauty concern'}
            name={'category.subCategories[0].types'}
            label={'Beauty Concern'}
            options={CreamsAndLotions.BeautyConcerns}
          />
          <CustomSelectInput
            key={1}
            placeholder={'Enter Product Type'}
            name={'category.subCategories[2].types'}
            label={'Product Type'}
            options={CreamsAndLotions.ProductType}
          />
        </>
      );
    case 'Fragrances and Deodorants':
      return (
        <>
       
          <CustomCheckboxInput
            key={2}
            placeholder={'Enter Beauty concern'}
            name={'category.subCategories[0].types'}
            label={'Scent Type'}
            options={FragrancesAndDeodorants.BeautyConcerns}
          />
          <CustomCheckboxInput
            key={1}
            placeholder={'Enter Product Type'}
            name={'category.subCategories[1].types'}
            label={'Product Type'}
            options={FragrancesAndDeodorants.ProductType}
          />
        </>
      );
    case 'For Men':
      return (
        <>
          <CustomCheckboxInput
            key={2}
            placeholder={'Enter Beauty concern'}
            name={'category.subCategories[0].types'}
            label={'Beauty Concern'}
            options={ForMen.BeautyConcerns}
          />
          <CustomSelectInput
            key={1}
            placeholder={'Enter Product Type'}
            name={'category.subCategories[1].types'}
            label={'Product Type'}
            options={ForMen.ProductType}
          />
        </>
      );
    case 'Tools and Accessories':
      return (
        <>
          <CustomSelectInput
            key={2}
            placeholder={'Enter Beauty concern'}
            name={'category.subCategories[0].types[0]'}
            label={'Tool Category'}
            options={ToolsAndAccessories.ToolCategory}
          />
          <CustomSelectInput
            key={1}
            placeholder={'Enter Product Type'}
            name={'category.subCategories[1].types[0]'}
            label={'Tool Type'}
            options={ToolsAndAccessories.ToolType}
          />
        </>
      );
    case 'Suncare':
      return (
        <>
          <CustomSelectInput
            key={2}
            placeholder={'Enter Product Type'}
            name={'category.subCategories[0].types[0]'}
            label={'Product Type'}
            options={Suncare.ProductType}
          />
        </>
      );
    default:
      return null;
  }
};