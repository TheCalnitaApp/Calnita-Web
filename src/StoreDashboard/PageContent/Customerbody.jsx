import React, { Component } from 'react'
import Sidebar from '../AdminSideBar/Sidebar';
import Customercard from '../primitive/Cusrtomercard';


const Customersbody = () => {
    return ( 
        <React.Fragment>
        <div className='flex-col flex w-[75vw] absolute  h-max left-[256px]'>
          <Sidebar />
          
       <div className='relative top-[15vh]'>
        <Customercard />
       </div>
       
   </div>
   </React.Fragment>
     );
}
 
export default Customersbody;