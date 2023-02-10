import React, { Component } from 'react';
import { searchIcon } from '../assets/icons';
import Customertab from '../organisms/Customertab'

const Customercard = () => {
    return ( 
        <div className='flex flex-col w-[75vw] gap-0 h-[85vh]  items-center mt-8 px-4 bg-white rounded-lg'>
           <div class="flex w-[700px] mr-16 mt-6">
    <div class="relative hidden md:block w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {searchIcon}
        </div>
      <input type="text" id="search-navbar" class="block w-full p-0 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500" placeholder="search for customers" />
    </div>
      
  </div>
  <div>
    <div className='flex flex-col w-[75vw] mt-6 justify-between'>
       <Customertab orderAmt="#300,000" location="Nigeria"/>
       <Customertab orderAmt="#300,000" location="Nigeria"/>
       <Customertab orderAmt="#300,000" location="Nigeria"/>
       <Customertab orderAmt="#300,000" location="Nigeria"/>
       <Customertab orderAmt="#300,000" location="Nigeria"/>
    </div>
  </div>
 
          </div>
    )
}
 
export default Customercard;