import React, { Component } from 'react'


const Customertab = ({username, useremail, userphoto, orderAmt,location}) => {
    return (
        <div className='flex flex-row  items-center justify-around w-auto relative my-3 mx-4 border-y-2 border-gray-200'>
            <div className='flex flex-row justify-center items-center my-1'>
                <img src="https://placeimg.com/80/80/people" alt="" className='rounded-full w-10'/>
            <div className='flex flex-col ml-4'>
                <span className='text-xs font-bold'>{username}Miriam enene</span>
                <span className='text-sm'>{useremail}Enenemarcus@gmail.com</span>
            </div>
            </div>
            
            <span className='text-xs'>{orderAmt}</span>
            <span className='text-xs'>{location}</span>
        </div>
      );
}
 
export default Customertab;