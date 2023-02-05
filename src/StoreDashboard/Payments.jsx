import React, { Component } from 'react';
import Paymentsbody from './PageContent/Paymentsbody';
import Navbar from './AdminSideBar/Navbar';

const Payments = () => {
    return ( 
        <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
        <Paymentsbody />
        <Navbar />
    </div>
     );
}
 
export default Payments;