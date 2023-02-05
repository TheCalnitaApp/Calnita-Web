import React, { Component } from 'react';
import Ordersbody from './PageContent/Ordersbody';
import Navbar from './AdminSideBar/Navbar';

const Orders = () => {
    return ( 
        <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
          <Ordersbody />
          <Navbar />

    </div>
     );
}
 
export default Orders;