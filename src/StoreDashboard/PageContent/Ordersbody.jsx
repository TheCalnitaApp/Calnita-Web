import React, { Component } from 'react';
import Sidebar from '../AdminSideBar/Sidebar';
import Orderscard from '../primitive/Orderscard';

const Ordersbody = () => {
    return ( 
        <React.Fragment>
        <div className='flex-col flex w-[75vw] absolute   h-max left-[256px]'>
          
          <Sidebar />
          
       <div className='relative top-[15vh]'>
        <Orderscard />
       </div>
       
   </div>
   </React.Fragment>
     );
}
 
export default Ordersbody;