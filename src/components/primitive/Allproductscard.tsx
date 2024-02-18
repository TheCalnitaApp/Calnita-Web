"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal, Pagination } from "flowbite-react";
import { addCircle } from "../../assets/icons";
import Topprod from "../organisms/Topprod";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CustomFilter } from "./Filter";

let PageSize = 10;
const Allproductscard = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const props = { openModal, setOpenModal };
  const { data: Session, status } = useSession();
  const products = Session?.user.products;
  const id = Session?.user.userId;
  console.log(products);

  const filterByStatus = (status: string) => {
    if (status === "all") {
      console.log(products);
      return products;
    }
    return products!.filter((product: any) => product.status === status);
  };

  const filteredProducts = filterByStatus(selectedCategory);

  let content;
  if (products!.length > 0) {
    console.log(selectedCategory);
    content = filteredProducts!.map((prod: any, index: any) => (
      <Topprod
        key={index}
        productName={prod.name}
        productPrice={prod.pricing[0].salePrice}
        productImg={prod.coverPhoto}
        prodData={prod}
        productCode={prod.productCode}
        status={prod.status}
        discount={prod.discount}
        id={prod.id}
      />
    ));
  } else {
    content = (
      <span className="col-span-4 text-lg font-semibold">
        There are no Products available for this brand!
      </span>
    );
  }

  return (
    <div className="flex flex-col w-full gap-12 relative justify-center items-center ">
      <div className="flex flex-row w-5/6 items-center justify-between self-end">
        <CustomFilter
          options={[
            { value: "all", title: "All" },
            { value: "Available", title: "Available" },
            { value: "Discontinued", title: "Discontinued" },
            { value: "OutOfStock", title: "Out Of Stock" },
          ]}
          setState={setSelectedCategory}
          selected={selectedCategory}
        />
        <Link href="/Products/add-product">
          <button
            onClick={() => props.setOpenModal("default")}
            className="flex flex-row justify-center items-center gap-2 text-md py-2 px-3 rounded-xl bg-mainPink text-white font-light"
          >
            {addCircle} Add New Products
          </button>
        </Link>
      </div>
      <div>

      </div>
      
          <div className="productcardlayout">{content}</div>
    
      
     
    </div>
  );
};

export default Allproductscard;
