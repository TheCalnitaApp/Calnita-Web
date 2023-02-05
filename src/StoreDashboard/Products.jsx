import React, { Component } from 'react';
import Productsbody from './PageContent/ProductsBody';
import Navbar from './AdminSideBar/Navbar';
import Addproduct from './Modals/AddProductModal';

const Products = () => {
    return ( 
        <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
            <Productsbody />
            <Navbar />
            
        </div>
     );
}
 
export default Products;