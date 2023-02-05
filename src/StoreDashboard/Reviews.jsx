import React, { Component } from 'react';
import Reviewsbody from './PageContent/Reviewsbody'
import Navbar from './AdminSideBar/Navbar';

const Reviews = () => {
    return ( 
        <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
        <Reviewsbody />
        <Navbar />
    </div>
     );
}
 
export default Reviews;