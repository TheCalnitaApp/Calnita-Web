import React, { Component } from 'react';
import Curology from '../assets/Curology.png'
import { arrowIconDownBlack } from '../assets/icons';

const Ordertab = ({Ordername, destination, img, date, Amount, status}) => {
    return ( 
        <div className='flex flex-row justify-between items-center  mx-2 relative'>
            <div className='flex flex-col justify-around w-[6.5rem]'>
                <span className='text-xs'>{Ordername} CUS234 - 2ITEMS</span>

                <span className='pb-3 text-sm'>Destination - {destination}</span>
            </div>
            <div className='rounded-lg w-[7rem]'>
                <img src={Curology} alt=""className='rounded-lg border border-gray-400'/>
            </div>
            <div>
                <span className='text-xs'>{date}</span>
            </div>
            <div>
                <span className='text-xs'>{Amount}</span>
            </div>
            <div className='relative'>
                
                {/* <span className='text-xs'> <div className={status == true ? 'w-2 h-2 bg-green-600 text-xs rounded-full inline-block mr-1' : 'w-2 h-2 bg-red-600 rounded-full inline-block mr-1'}>
                    </div>{status == true ? "Settled" : "Unsettled"}</span> */}
                    

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-900 bg-white font-medium rounded-lg text-xs  px-4 py-2.5 text-center inline-flex items-center" type="button">Select Status <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 text-gray-900"><div className='w-2 h-2 bg-red-600 rounded-full inline-block mr-1'></div>Unsettled</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 text-gray-900"><div className='w-2 h-2 bg-green-600 rounded-full inline-block mr-1'></div>Settled</a>
      </li>
      
    </ul>
            </div>
                
                    
            </div>
            <div className='absolute bottom-0 right-0 ml-1 mb-1'>
                    <button className='px-4 py-1 bg-pink-500 text-white rounded-lg text-sm '>view</button>
                </div>
        </div>
     );
}
 
export default Ordertab;