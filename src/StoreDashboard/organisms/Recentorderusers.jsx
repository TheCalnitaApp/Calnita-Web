import React, { Component } from 'react'
import { arrowRightIconBlack } from '../assets/icons';

const Recentorderusers = ({username, useremail, userphoto, orderAmt}) => {
    return (
        <div className='flex flex-row  items-center justify-around w-auto relative mb-2 mx-4'>
            <div className='flex flex-row'>
                <img src="https://placeimg.com/80/80/people" alt="" className='rounded-full w-10'/>
            <div className='flex flex-col ml-4'>
                <span className='text-xs font-bold'>{username}Miriam enene</span>
                <span className='text-sm'>{useremail}Enenemarcus@gmail.com</span>
            </div>
            </div>
            
            <span>{orderAmt}</span>
        </div>
      );
}
 
export default Recentorderusers;