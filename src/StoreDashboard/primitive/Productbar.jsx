import React, { Component } from 'react'
import Statscard from '../organisms/Statscard';

const Productbar = () => {
    return ( 
        <div className='flex flex-row bg-gray-100 justify-between relative w-[55vw]'>
            <Statscard statname="TOTAL PRODUCTS" statamount="500" />
            <Statscard statname="UNDER REVIEW" statamount="6" />
            <Statscard statname="OUT OF STOCK" statamount="3" />
        </div> 
     );
}
 
export default Productbar;