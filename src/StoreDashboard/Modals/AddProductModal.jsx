import React, { Component } from 'react';

const Addproduct = () => {
    return ( 
        <div className='flex flex-col relative' >
            <form className='w-[30vw] h-fit'>
            <div className="form-group">
                    <label for="product-name"className='block mt-3 text-xs font-bold text-gray-900' >Product Name</label>
                    <input type="text" id="product-name" className="form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-full  sm:text-xs" placeholder="What is your brand name?" />
                </div>
                <div className="form-group">
                    <label for="prod-desc" className='block mt-3 text-xs font-bold text-gray-900'>Product Description</label>
                    <textarea rows="4" id="prod-desc" className="form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-full sm:text-xs" placeholder="Your brand's email" />
                </div>
                <div className="form-group">
                    <label for="password" className='block mt-3 text-xs font-bold text-gray-900'>Password</label>
                    <input type="text"  id="password" className="form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-full sm:text-xs" placeholder="***********" />
                </div>
            </form>
        </div>
     );
}
 
export default Addproduct;