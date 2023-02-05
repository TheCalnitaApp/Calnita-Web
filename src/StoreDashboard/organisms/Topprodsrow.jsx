import React, { Component } from 'react'
import Topprod from './Topprod';
import { arrowLeftIconWhite } from '../assets/icons';
import { arrowRightIconWhite } from '../assets/icons';
const Topproducts = () => {
    return ( 
        <div className='flex flex-row col-span-2 relative items-end bottom-0 ml-8 mb-3'>
            <span className='left-0 top-0 absolute text-base font-bold'>Top Selling Products</span>
            <div className='flex flex-row justify-between bg-pink-600 w-10 p-1 absolute right-0 top-0 rounded-xl'>
               <a href="#"> {arrowLeftIconWhite}</a>
               <a href="#">{arrowRightIconWhite}</a> 
            </div>
            <Topprod />
            <Topprod />
            <Topprod />
            <Topprod />
        </div>
     );
}
 
export default Topproducts;