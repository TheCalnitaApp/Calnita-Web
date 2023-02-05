import React, { Component } from 'react'
import Navbar from './AdminSideBar/Navbar';
import Customerbody from './PageContent/Customerbody';


const Customers = () => {
    return ( 
        <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
        <Customerbody />
        <Navbar />
    </div>
     );
}
 
export default Customers;