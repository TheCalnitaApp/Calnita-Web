import React, { Component } from 'react'
import Recentorders from '../organisms/Recentorderscard';
import Reviewscard from '../organisms/Reviewscard';

const Reviewrow = () => {
    return ( 
        <div className='grid grid-cols-3 w-[75vw] h-[256px] rounded-xl relative mt-4'>
            <Reviewscard />
            <Recentorders />
        </div>
            
     );
}
 
export default Reviewrow;