import React, { Component } from 'react'
import Ordertab from '../organisms/Ordertab';

const Orderscard = () => {
    return (  
        <div className='flex flex-col w-[75vw] gap-0 h-[85vh] justify-center items-center mt-8 '>
            <div className='flex flex-row justify-between w-[70vw]'>
                <div className='flex flex-row h-fit mb-4'>
                      <button className=' text-xs p-1 px-6 rounded-md bg-gray-100 active:bg-white'>All</button>
                     <button className='mx-5 text-xs p-1 px-6 rounded-md bg-gray-100 active:bg-white'>New</button>
                     <button className='mx- text-xs p-1 px-6 rounded-md bg-gray-100 active:bg-white'>Unsettled</button>
                     <button className='mx- text-xs p-1 px-6 rounded-md bg-gray-100 active:bg-white'>Settled</button>
                </div>
            </div>
            <div className='grid  grid-rows-3 w-[70vw] h-[80vh] bg-white rounded-xl relative mt-4 py-4 px-3 divide-y-[1px]'>
           
                <Ordertab destination="Calabar, Cross-River" date="12/2/2023" Amount="50,500" status={false}/>
            <Ordertab destination="Gwagwalada, Abuja" date="04/2/2023" Amount="5,650,000" status={true}/>
            <Ordertab destination="Los Angeles, USA" date="01/2/2023" Amount="790,500" status={false}/>
        
            </div>
            </div>
    );
}
 
export default Orderscard;