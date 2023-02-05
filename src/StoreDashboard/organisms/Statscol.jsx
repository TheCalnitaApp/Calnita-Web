import React, { Component } from 'react';
import Statscard from './Statscard';
const Statscol = () => {
    return ( 
        <div className='grid grid-cols-2 grid-rows-2 col-span-2 justify-between h-auto py-4 mt-4'>
            <Statscard statamount='75,500' statname="TODAY'S SALE"/>
            <Statscard statamount='60,382'statname="IN ESCROW" />
            <Statscard statamount='845,382' statname="REVENUE"/>
            <Statscard statamount='84,382' statname="TOTAL ORDERS"/>
           
            
            
        </div>
     );
}
 
export default Statscol;