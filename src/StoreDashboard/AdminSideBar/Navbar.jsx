import React, { Component } from 'react'
import CalnitaLogo from '../assets/CalnitaLogo.svg';
import { searchIcon } from '../assets/icons';
const Navbar = () => {
    return ( 
        <div className="navbar bg-base-100 fixed ">
 
<nav class="bg-white border-gray-200 px-2 sm:px-4 h-[60px] w-full rounded dark:bg-gray-900 z-10">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="" class="flex items-center">
      <img src={CalnitaLogo} className="h-6 mr-3 sm:h-9" alt="Calnita Logo" />
     
  </a>
  <div class="flex md:order-2 w-[800px] mr-16">
    <div class="relative hidden md:block w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {searchIcon}
        </div>
      <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500" placeholder="type to search" />
    </div>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="type to search" />
      </div>
    </div>
  </div>

  <div className="dropdown dropdown-end mr-12 ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between b">
            Profile
            <span className="bg-pink-600 badge border-pink-600">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</nav>


</div>
     );
}
 
export default Navbar;