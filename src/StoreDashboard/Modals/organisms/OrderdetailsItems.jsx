import React, { Component } from 'react';

const Orderdetailsitems = ({itemName, itemPrice, itemQty, itemTotal}) => {
    return ( 
        
        <div className="grid grid-cols-2 font-semibold mb-2">
            <div className='flex flex-row justify-center text-xs'>
                <div className='w-6 h-6 rounded-full bg-gray-400 inline-block mr-2'>
                    <img src="" alt="" />
                </div>
              
              <span>
                {itemName}Calvin Klien Eternity Flame
              </span>
            </div>
            <div className='text-xs w-[60%]'>
              <div className="flex flex-row justify-between">
              <span>Price</span>
              <span>Qty</span>
              </div>
              <div className="flex flex-row justify-between ">
              <span>#5000{itemPrice}</span>
              <span>x2{itemQty}</span>
            </div>
            <p className="text-center mt-3">Total = #10000{itemTotal}</p>
            </div>
            
            
        </div>
      
     );
}
 
export default Orderdetailsitems;