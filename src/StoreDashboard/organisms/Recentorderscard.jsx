import React, { Component } from 'react';
import Recentorderusers from './Recentorderusers';

const Recentorders = () => {
    return ( 
        <div className='flex flex-col col-span-2 items-center justify-between w-[auto] h-auto bg-white rounded-xl ml-8 pb-2'>
            <span className='mt-2 font-bold'>Recent Orders</span>
            <div className='w-full mt-3'>
                <Recentorderusers  orderAmt="#250,000"/>
                <Recentorderusers  orderAmt="#250,000"/>
                <Recentorderusers  orderAmt="#250,000"/>
               

            </div>
            <div>
                <span className='mb-3'>Paginator</span>
            </div>
        </div>
     );
}
 
export default Recentorders;