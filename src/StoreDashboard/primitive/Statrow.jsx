import React, { Component } from 'react'
import Statscol from '../organisms/Statscol';
import Welcomecard from '../organisms/Welcomecard';

const Statrow = () => {
    return ( 
        <div className='grid grid-cols-3 bg-white w-[75vw] h-[206px] rounded-xl relative '>
            <Welcomecard storeName="VSP BOTANICS" />
           <Statscol />
           
           
        </div>
     );
}
 
export default Statrow;