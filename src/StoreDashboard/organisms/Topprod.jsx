import React, {  Component } from 'react'
import { useLocation } from 'react-router-dom'
import topprodpic from '../assets/topprodpic.png'
import { editIcon } from '../assets/icons'



const Topprod = ({productImg, productName, productPrice, qty, stckAvail}) => {
  const location = useLocation( );



    return ( 
        <div className='grid grid-rows-2 grid-cols-1 w-[150px] h-[80%] rounded-xl bg-white mx-2 relative border-2 border-gray-300'>
            
            <div className=' flex justify-center items-center  '>
                 <img src={topprodpic} alt="" className='w-20 h-20 pt-2'/> 
                 {location.pathname === "/products" &&  <div className='absolute top-0 right-0 mt-1 mr-1' >
                <button>{editIcon}</button>
            </div>}
                 
            </div>
           
            
           
            <div className='flex flex-col  items-start'>
                <h3 className='text-xs px-2'>{productName}Calvin Klein Eternity Flame-100l</h3>
                 <span className='mt-3 pl-2'>{productPrice} #250,500</span>
            </div>
            {location.pathname === "/products" && <div className='flex flex-row justify-between items-center mx-2'>
                <div>
                    <div className='bg-green-600 rounded-full w-[6px] h-[6px] inline-block ColorIndicator'>

                    </div>
                    <span className=' ml-1 text-sm'>{stckAvail}In stock</span>
                </div>
                
                <span className='text-sm'>Qty:{qty}</span>
            </div>}
            
            
        </div>
     );
}
 
export default Topprod;