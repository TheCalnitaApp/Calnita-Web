import React, { Component } from 'react';
import Valuserscard from './Valusercard';
const Valuableusers = () => {
    return ( 
        <div className='flex flex-col items-center justify-between w-[auto] h-auto bg-white rounded-xl pb-1'>
            <span className='mt-2 font-bold'>Valuable Customers</span>
            <div className='w-full mt-3'>
                <Valuserscard />
                <Valuserscard />
                <Valuserscard />
                <Valuserscard />

            </div>
            <div>
                <span className='mb-3'>Paginator</span>
            </div>
        </div>
     );
}
 
export default Valuableusers;