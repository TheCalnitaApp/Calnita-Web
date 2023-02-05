import React, { Component } from 'react'
import { star } from '../assets/icons';
const Userreviewcard = ({userName, userPhoto, productName, rating}) => {
    return ( 
        <div className='flex flex-row  items-center justify-between w-auto relative mb-2 mx-4'>
            <div className='flex flex-row'>
                <img src="https://placeimg.com/80/80/people" alt="" className='rounded-full w-10'/>
            <div className='flex flex-col ml-4'>
                <span className='text-xs font-bold'>{productName}Calvin Klien Eternity Flame</span>
                <span className='text-sm'>Reviwew by {userName}</span>
            </div>
            </div>
            
            <a href='#'>{star}{rating}</a>
        </div>
     );
}
 
export default Userreviewcard;