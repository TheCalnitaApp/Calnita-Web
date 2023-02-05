import React, { Component } from 'react';
import Topproducts from '../organisms/Topprodsrow';
import Valuableusers from '../organisms/Valusers';
Topproducts
const Sellprod = () => {
    return ( 
        <div className='grid grid-cols-3 w-[75vw] h-[256px] rounded-xl relative mt-4'>
            <Valuableusers />
            <Topproducts />
        </div>
     );
}
 
export default Sellprod;