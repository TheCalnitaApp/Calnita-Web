import React, { Component } from 'react';
import Userreviewcard from './Userreviewcard';

const Reviewscard = () => {
    return ( 
        <div className='flex flex-col items-center justify-between w-[auto] h-auto bg-white rounded-xl pb-2'>
        <span className='mt-2 font-bold'>Reviews</span>
        <div className='w-full mt-3'>
            <Userreviewcard rating="2.0"/>

        </div>
        <div>
            <span className='mb-3'>Paginator</span>
        </div>
    </div>
     );
}
 
export default Reviewscard;