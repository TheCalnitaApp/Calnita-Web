import { ErrorMessage, Field, FieldArray, Formik, useFormikContext, withFormik } from "formik";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { handleAddProduct } from "../../../utils/Functions/functions";
import ContainerLayout from "../../../components/layout/Container";
import Topprod from "../../../components/organisms/Topprod";
import React from "react";
import {
  CustomImageInput,
  CustomSelectInput,
  CustomSwitchInput,
  CustomTextArea,
  CustomTextInput,
} from "../../../components/organisms/CustomInputs";

import {
  AddProductInitalValues,
  AddProductValidationSchema,
} from "@/utils/Functions/FormikSchemas";
import { Span } from "next/dist/trace";
import {
  AddFieldIcon,
  AddProductIcon,
  RemoveFieldIcon,
  TrashIcon,
} from "@/assets/icons";
import { validUnits } from "@/utils/ProductUtils";

const Addproductform = ({ closeFxn }: any) => {
  const { data: session, update } = useSession();
  const [img, setImg] = useState<string>("");
  const [fileInputs, setFileInputs] = useState<Array<File>>([]);
  const formRef = useRef<any>();

  const handleFileInputChange = (file: File, index: number) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[index] = file;
    setFileInputs(newFileInputs);
    console.log(file);
  };

  return (
    <ContainerLayout name="ADD PRODUCT">
      <Formik
        initialValues={AddProductInitalValues}
        validationSchema={AddProductValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(values);

          try {
            const success = await toast.promise(handleAddProduct(values), {
              loading: "Creating Product",
              success: (data) => `Product Created ✨ `,

              error: (err) => `${err} Error occured while adding product`,
            });
            if (success) {
              console.log(success);
              setSubmitting(false);
              update({
                ...session,
                user: {
                  ...success
                },
              });
            }
          } catch (error) {
            setSubmitting(false);
            console.log(error);
          }
        }}
      >
        {({ setFieldValue, handleSubmit, values, isSubmitting }) => (
          <form
            className="flex flex-row w-full items start justify-around items-center text-black"
            onSubmit={handleSubmit}
          >
            <div className="w-3/5 h-[80vh] overflow-y-scroll relative rounded-xl">
              <div className="flex flex-col w-full bg-white rounded-xl p-10 gap-7">
                <span className="text-xl font-semibold">
                  Create New Product
                </span>

                <CustomTextInput
                  label="Name"
                  name="name"
                  placeholder="Enter product name"
                />

                <CustomTextArea
                  label="Product Description"
                  name="desc"
                  placeholder="Enter description of product"
                  rows={6}
                />
                <CustomTextArea
                  label="Ingredients"
                  name="ingredients[0]"
                  placeholder="what ingredients are contained in the product?"
                  rows={6}
                />

                <CustomTextInput
                  placeholder={"How to use Product"}
                  name={"howto"}
                  label={"How to use"}
                />
                <CustomSelectInput
                  key={1}
                  placeholder={"Enter Product Category"}
                  name={"category.name"}
                  label={"Category"}
                  options={[
                    "My Skin",
                    "My Mouth",
                    "My Hair",
                    "For Men",
                    "Creams and Lotions",
                    "Fragrances and Deodorants",
                    "Tools and Accessories",
                    "Suncare",
                  ]}
                />
                <CustomSwitchInput values={values.category.name} />

                <CustomImageInput
                  placeholder={"Enter Product Image"}
                  name={"productImage"}
                  label={"Product Images"}
                  onchange={(e: any) => {
                    setFieldValue("productImage", e.target.files);
                    handleFileInputChange(e.target.files[0], 0);
                    setImg(URL.createObjectURL(e.target.files[0]));
                  }}
                />

                <FieldArray name="pricing">
                  {({ insert, remove, push }) => (
                    <div className="flex flex-col  gap-4">
                      {values.pricing.length > 0 &&
                        values.pricing.map((price, index) => (
                          <div
                            className="flex flex-row items-center gap-4"
                            key={index}
                          >
                            <CustomTextInput
                              placeholder={"Add product Weight"}
                              name={`pricing.${index}.weight.value`}
                              label={"Weight"}
                              type="number"
                            />
                            <CustomSelectInput
                              placeholder={"add a unit for the weight  eg oz"}
                              name={`pricing.${index}.weight.unit`}
                              label={"Weight Unit"}
                              options={validUnits}
                            />
                            <CustomTextInput
                              placeholder={"Add product Price"}
                              name={`pricing.${index}.salePrice`}
                              label={"Price"}
                              type="number"
                            />
                            <CustomTextInput
                              placeholder={"Add product Price"}
                              name={"discount"}
                              label={"Discount(%)"}
                              type="number"
                            />

                            <button
                              type="button"
                              className="flex flex-col items-center  p-2 rounded-full shadow-md w-fit h-fit"
                              onClick={() => remove(index)}
                            >
                              {TrashIcon}
                            </button>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="flex flex-row items-center gap-2 border border-black p-2 rounded-full shadow-md w-fit h-fit"
                        onClick={() => push({ weight: 0, salePrice: 0 })}
                      >
                        {AddFieldIcon} Add Weight/Price
                      </button>
                    </div>
                  )}
                </FieldArray>
                <CustomSelectInput
                  key={1}
                  placeholder={"Set Product Status"}
                  name={"status"}
                  label={"Status"}
                  options={["Available", "OutOfStock", "Discontinued"]}
                />
                <CustomTextInput
                  placeholder="Enter Product Quantity"
                  name="qty"
                  label="Quantity"
                  type="number"
                />
              </div>
            </div>

            <div className="flex w-1/5 flex-col items-center gap-6">
              <Topprod
                productImg={img}
                productName={values.name}
                productPrice={values.pricing[0].salePrice}
                qty={values.qty}
                status={values.status}
                weight={values.pricing[0].weight}
                discount={values.discount}
              />
              <button
                onClick={() => {
                  setFieldValue("token", session?.user.token);
                  setFieldValue("refreshToken", session?.user.refreshToken);
                  // values.category.name === "Fragrances/Deodorants" &&
                  //   setFieldValue("category.subCategories[0].name", "Scents");
                  // values.category.name === "Fragrances/Deodorants" &&
                  //   setFieldValue("category.subCategories[1].name", "Product");
                    switch (values.category.name) {
                      case 'My Skin':
                        
                           setFieldValue("category.subCategories[0].name", "Beauty Concern")
                         setFieldValue("category.subCategories[1].name", "Product")
                        setFieldValue("category.subCategories[2].name", "Skin Type");
                    
                       
                       break;
                      case 'My Mouth':
                        setFieldValue("category.subCategories[0].name", "Product");
                        break;
                      case 'My Hair':
                        setFieldValue("category.subCategories[0].name", "Beauty Concern")
                        setFieldValue("category.subCategories[1].name", "Product");
                        break;
                      case 'Creams and Lotions':
                        setFieldValue("category.subCategories[0].name", "Beauty Concern")
                        setFieldValue("category.subCategories[1].name", "Product");
                        break;
                      case 'Fragrances and Deodorants':
                        setFieldValue("category.subCategories[0].name", "Scents");
                        setFieldValue("category.subCategories[1].name", "Product");
                        break;
                      case 'For Men':
                        setFieldValue("category.subCategories[0].name", "Beauty Concern");
                        setFieldValue("category.subCategories[1].name", "Product");
                        break;
                      case 'Tools and Accessories':
                        setFieldValue("category.subCategories[0].name", "Tool Category")
                        setFieldValue("category.subCategories[1].name", "Tool Type");
                        break;
                      case 'Suncare':
                        setFieldValue("category.subCategories[0].name", "Product");
                        break;
                      default:
                        return null;
                    }
                  
                }}
                type="submit"
                disabled={isSubmitting}
                className="flex flex-row justify-center font-light items-center text-base  py-2 w-3/5 h-1/5 rounded-xl bg-mainPink text-white active:bg-black active:text-white disabled:bg-mainPink/10"
              >
                {isSubmitting ? (
                  <span className={styles.loader}></span>
                ) : (
                  <span>Publish Product</span>
                )}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </ContainerLayout>
  );
};

export default Addproductform;
