import React, { Component } from 'react'

const Welcomecard = ({profileImg, storeName}) => {
    return ( 
        <div className='flex flex-col justify-between items-center border-r-2 border-r-gray-300'>
            <span className='mt-6'>Welcome Back!</span>
            <img src='https://placeimg.com/80/80/people' alt='profile' className='rounded-full w-18' />
            <span className='mb-6'>{storeName}</span>
        </div>
     );
}
 
export default Welcomecard;