import React, { Component } from 'react'
import Topprod from '../organisms/Topprod';
import { addCircle } from '../assets/icons';

const Allproductscard = () => {
    return ( 
        <div className='flex flex-col w-[75vw] gap-0 h-[85vh] justify-center items-center mt-8 '>
            <div className='flex flex-row justify-between w-[60vw]'>
                <div className='flex flex-row h-fit'>
                      <button className=' text-xs p-2 rounded-xl bg-gray-100 active:bg-white'>All</button>
                     <button className='mx-5 text-xs p-2 rounded-xl bg-gray-100 active:bg-white'>Under Review</button>
                     <button className='mx- text-xs p-2 rounded-xl bg-gray-100 active:bg-white'>Out of Stock</button>
                </div>
                
                <button data-modal-target="addProductModal" data-modal-toggle="addProductModal" className='flex flex-row justify-center items-center text-xs p-2 rounded-xl bg-pink-500 text-white'><span className='flex flex-row justify-between items-center'>{addCircle} Add New Products</span></button>

            </div>
            <div className='grid grid-cols-4 grid-rows-2 w-[70vw] place-items-center h-[80vh] bg-white rounded-xl relative mt-4 py-4 px-3'>
                <Topprod />
            <Topprod />
            <Topprod />
            <Topprod />
            <Topprod />
            <Topprod />
            <Topprod />
            <Topprod />
            </div>
          
        </div>
     );
}
 
export default Allproductscard;