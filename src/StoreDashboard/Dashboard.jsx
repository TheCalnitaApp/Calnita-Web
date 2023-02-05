import React, { Component } from 'react';

import Navbar from './AdminSideBar/Navbar';
import Dashboardbody from './PageContent/Dashboardbody';


const Dashboard = () => {
    return ( 
        <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
             <Dashboardbody />
            <Navbar />
         
           
        </div>
     );
}
 
export default Dashboard;