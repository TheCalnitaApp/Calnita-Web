"use client";
import React from "react";
import { searchIcon } from "../../assets/icons";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: Session } = useSession();
  return (
    <nav className="layoutNavbar flex flex-row items-center bg-white border-gray-200 w-full h-full shadow-lg">
      <div className="container flex flex-wrap items-center justify-center mr-16 ">
        <div className="flex  w-3/5 mr-16">
          <div className="relative hidden md:block w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {searchIcon}
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-base text-gray-900 border border-gray-400 rounded-lg  focus:outline-none focus:ring-1 focus:border-0 focus:ring-[#F92A63] bg-white"
              placeholder="Type to search"
            />
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg  focus:ring-pink-500 focus:border-pink-500 bg-white"
              placeholder="type to search"
            />
          </div>
        </div>
      </div>

      <div className="dropdown dropdown-end mr-12 ">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-20 rounded-full">
            <img src={Session?.user.brand.avatar ? Session?.user.brand.avatar : "https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=Felix"} alt="profile-pic" />
          </div>
        </label>
        
      </div>
    </nav>
  );
};

export default Navbar;
