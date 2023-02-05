import React, { Component } from 'react'
import Navbar from './AdminSideBar/Navbar';
import Addproductsbody from './PageContent/Addproductsbody';


const Addproducts = () => {
    return ( 
        <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
        <Addproductsbody />
        <Navbar />
    </div>
     );
}
 
export default Addproducts;