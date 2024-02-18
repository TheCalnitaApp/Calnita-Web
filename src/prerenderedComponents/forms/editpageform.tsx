import { AddFieldIcon, TrashIcon, addCircle } from "../../assets/icons";
import { Formik, Form, Field, FieldArray } from "formik";
import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { DeleteProdRequest, handleUpdateProduct } from "../../utils/Functions/functions";
import ContainerLayout from "../../components/layout/Container";
import React from "react";
import { CustomImageInput, CustomSelectInput, CustomSwitchInput, CustomTextArea, CustomTextInput } from "@/components/organisms/CustomInputs";
import Topprod from "@/components/organisms/Topprod";
import { validUnits } from "@/utils/ProductUtils";
import { useRouter } from "next/navigation";

const Editproductform = ({initialData }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileInputs, setFileInputs] = useState<Array<File>>([]);
  const [img, setImg] = useState<string>("");
  const { data: Session, update } = useSession();
console.log(initialData.category.name)

  const handleFileInputChange = (file: File, index: number) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[index] = file;
    setFileInputs(newFileInputs);
    console.log(file);
  };
 

  const Delete = async () => {
    try {
    const success= await  toast.promise(DeleteProdRequest(initialData, Session), {
    loading: "Deleting Product",
    success: (data) => `Product Deleted 🗑`,
    error: (err) => `Error occured while Deleting product`,
  });
  if (success) {
    update({...Session, user: {
       ...success
    }})
    useRouter().push("/Products")
  }
    } catch(error) {
      console.log(error)
    }
    
  }


  return (
    <ContainerLayout name="EDIT PRODUCT">
     
      
      <Formik
            initialValues={{
              id:initialData.id,
              name: initialData.name,
              desc: `${initialData.description}`,
              ingredients: initialData.ingredients,
              howto: initialData.howToUse,
              category: initialData.category,
              productImage: [],
              coverPhoto: initialData.coverPhoto,
              pricing: initialData.pricing,
              token: "",
              qty: 2,
              status: initialData.status,
              discount: initialData.discount,
              refreshToken: ""
            }}
            onSubmit={ async (values, { setSubmitting, resetForm }) => {
              console.log(values);
              try {
const success = await toast.promise(handleUpdateProduct(values), {
                loading: "publishing edits..",
                success: (data) => `Edits Saved ✨ `,
                error: (err) => `${err} Error occured while adding product`,
              });
              if (success) {
                console.log(success)
                update({...Session, user: {
                   ...success
                }})
              }
              } 
             catch(error) {
              console.log(error)
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
                  name="ingredients"
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
                        values.pricing.map((price: any, index: any) => (
                          <div className="flex flex-row items-center gap-4" key={index}>
                            <CustomTextInput
                              placeholder={"Add product Weight"}
                              name={`pricing.${index}.weight.value`}
                              label={"Weight"}
                              type="number"
                            />
                            <CustomSelectInput placeholder={"add a unit for the weight  eg oz"} name={`pricing.${index}.weight.unit`} label={"Weight Unit"} options={validUnits} />
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
                  options={[
                    "Available",
                    "OutOfStock",
                    "Discontinued"
                    
                  ]}
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
                  productImg={img ? img : values.coverPhoto}
                  productName={values.name}
                  productPrice={values.pricing[0].salePrice}
                  qty={values.qty}
                  status={values.status}
                  weight={values.pricing[0].weight.value}
                  discount={values.discount}
                />
              <button
                onClick={() =>   {setFieldValue("token", Session?.user.token);  setFieldValue("refreshToken", Session?.user.refreshToken)}}
                type="submit"
                className="flex flex-row justify-center font-light items-center text-base  py-2 w-3/5 h-1/5 rounded-xl bg-mainPink text-white active:bg-black active:text-white"
              >
                <span>Publish Edits</span>
                
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="flex flex-row justify-center font-light items-center text-base  py-2 w-3/5 h-1/5 rounded-xl bg-black text-white active:bg-black active:scale-50"
              >
                <span>Delete Product</span>
                
              </button>
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
                <div className="w-1/2 h-1/2 flex flex-col rounded-lg bg-white items-center justify-center gap-4">
                  <span className="text-lg font-light"> Are you sure you want to delete this product?</span>
                  <div className=" ">
                     <Topprod
                   productImg={values.coverPhoto !== "" ? values.coverPhoto : img}
                   productName={values.name}
                   productPrice={values.pricing[0].salePrice}
                   qty={values.qty}
                   status={values.status}
                   weight={values.pricing[0].weight.value}
                   discount={values.discount}
                />
                  </div>
                  <div className="flex flex-row gap-10 w-2/5">
                    <button className="bg-black text-white flex flex-col items-center rounded-md text-center py-2 w-1/2">No</button>
                    <button onClick={Delete} className="bg-mainPink text-white flex flex-col items-center rounded-md text-center py-2 w-1/2">Yes</button>
                  </div>
                </div>
                
              </div>
            )}
            </div>
          </form>
        )}
          </Formik>
       
    </ContainerLayout>
   
  );
};

export default Editproductform;
