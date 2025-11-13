import { useState } from 'react'
import { BrowserRouter as BrowserRoute, Routes, Route } from 'react-router-dom'
import Home from './components/Main/Home'
import Shop from './components/Main/Shop'
import Product from './components/Products/Product'
import Cart from './components/Cart/Cart'
import Checkout from './components/Cart/Checkout'

import Login from './components/admin/login'
import Dashboard from './components/admin/Dashboard'

import { ToastContainer,toast} from 'react-toastify';
import { AdminRequireAuth } from './components/admin/AdminRequireAuth'
function App() {
 

  return (
    <>
      <BrowserRoute>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
         <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/dashboard' element={
           <AdminRequireAuth>
            <Dashboard/>
           </AdminRequireAuth>
           } />
          
        </Routes>
      </BrowserRoute>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  )
}

export default App
