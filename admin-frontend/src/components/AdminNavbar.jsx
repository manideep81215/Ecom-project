import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">📊</span> Admin Panel
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/add-product" className="nav-link">
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/manage-orders" className="nav-link">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/manage-products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/manage-users" className="nav-link">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
