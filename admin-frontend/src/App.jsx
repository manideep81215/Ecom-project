import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminNavbar from './components/AdminNavbar'
import AdminDashboard from './pages/AdminDashboard.jsx'
import ManageOrders from './pages/ManageOrders.jsx'
import OrderDetails from './pages/OrderDetails.jsx'
import ManageProducts from './pages/ManageProducts.jsx'
import ManageUsers from './pages/ManageUsers.jsx'
import './App.css'
import AddProduct from "./pages/AddProduct.jsx";
import Product from "./pages/Product.jsx";
import UpdateProduct from "./pages/UpdateProduct.jsx";
import AdminUserDetails from "./pages/AdminUserDetails.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/manage-orders" element={<ManageOrders />} />
        <Route path="/orders/:orderId" element={<OrderDetails />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/add-product" element={<AddProduct />}/>
          <Route path="/user/:id" element={<AdminUserDetails />} />

          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/update/:id" element={<UpdateProduct />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App