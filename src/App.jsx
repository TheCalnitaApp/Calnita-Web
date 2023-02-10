import { useState } from 'react'
import Dashboard from  './StoreDashboard/Dashboard'
import Products from './StoreDashboard/Products';
import Customers from './StoreDashboard/Customers';
import Orders from './StoreDashboard/Orders';
import Settings from './StoreDashboard/Settings';
import Reviews from './StoreDashboard/Reviews';
import Messages from './StoreDashboard/Messages';
import Payments from './StoreDashboard/Payments';
import Signin from './StoreDashboard/Components/Auth/Signin';
import Signup from './StoreDashboard/Components/Auth/Signup';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/signin'/>}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/products' element={<Products />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
