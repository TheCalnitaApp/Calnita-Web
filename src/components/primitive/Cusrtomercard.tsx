import React, { useEffect, useState } from "react";
import Customertab from "../organisms/Customertab";
import { Customer } from "../../utils/Functions/types";
import { searchIcon } from "../../assets/icons";


const Customercard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://645bba4da8f9e4d6e7715bbb.mockapi.io/customers`);
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col w-full gap-10 h-full  items-center mt-8 p-4 bg-white rounded-lg">
      <div className="flex flex-row w-full items-center justify-between">
        <span className="font-light text-lg">
          Customers
        </span>
        <div className="flex w-2/5">
        <div className="relative hidden md:block w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {searchIcon}
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-[0.5rem] pl-10 text-base font-light text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Search for customers by name, e-mail, phone no"
          />
        </div>
      </div>
      </div>
      <div className="flex flex-row gap-8 w-2/4 justify-between">
        <button className="flex flex-col text-normal text-mainPink font-light py-2 px-4 place-items-center border border-[#F92A63] rounded-lg whitespace-nowrap bg-[#FEEAEF]">
          All Customers
        </button>
        <button className="flex flex-col text-normal font-light py-2 px-4 place-items-center border border-gray-200 rounded-lg whitespace-nowrap">
          New Customers
        </button>
        <button className="flex flex-col text-normal font-light py-2 px-4 place-items-center border border-gray-200 rounded-lg whitespace-nowrap">
          Repeat Customers
        </button>
        <button  className="flex flex-col text-normal font-light py-2 px-4 place-items-center border border-gray-200 rounded-lg whitespace-nowrap">
          Abandoned Cart
        </button>
      </div>
      
      <div className="grid grid-cols-5 p-4 justify-items-center w-full h-fit font-light text-[#c4c4c4] border-b border-gray-200">
          <span>Name</span>
          <span>E-mail</span>
          <span>Phone-no</span>
          <span>Country</span>
          <span>Status</span>
        </div>
      <div className="w-full h-[80%] overflow-y-scroll">
        <div className="flex flex-col w-full gap-4 justify-between divide-y">
        {customers.map((customer: Customer) => (
          <Customertab
          phoneNo={customer.tel}
          location={customer.location}
          useremail={customer.email}
          username={customer.name}
          userphoto="effeververv"
          status={customer.status}
          id={customer.id}
          key={customer.id}
        />
        ))}
          
          
        </div>
      </div>
    </div>
  );
};

export default Customercard;
