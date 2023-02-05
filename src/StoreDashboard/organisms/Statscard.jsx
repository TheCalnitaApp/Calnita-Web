import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

const Statscard = ({statname, statamount, statchange, upordown}) => {
     const location = useLocation();
     
    return ( 
        <div className='grid grid-cols-2 border border-gray-300 w-[244px] h-[61px] ml-3 bg-white rounded-lg'>
           <div className='flex flex-col relative justify-between '>
                <span className='text-sm ml-2 mt-1 text-gray-500'>{statname}</span>
                <span className='text-gray-900 text-2xl font-bold ml-2 mb-1'>
                    {location.pathname === '/products' ? "" : "#"}
                {statamount}
                </span>
           </div>
           <div className='h-auto w-auto relative'>
            <span className='text-green-300 text-xs absolute bottom-0 right-0 mr-2 mb-1'>+36%</span>
       
           </div>
           </div>
     );
}
 
export default Statscard;