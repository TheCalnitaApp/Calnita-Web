import React, { Component } from 'react'
import Messagesbody from './PageContent/Messagesbody'
import Navbar from './AdminSideBar/Navbar';

const Messages = () => {
    return ( 
         <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
            <Messagesbody />
            <Navbar />
        </div>
     );
}
 
export default Messages;