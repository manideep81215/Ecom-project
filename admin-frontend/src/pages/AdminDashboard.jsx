import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <p>Welcome, Admin! Manage orders, users, and products here.</p>

            <div className="dashboard-grid">

                <div
                    className="dashboard-card"
                    onClick={() => navigate("/manage-orders")}
                >
                    <h3> Orders</h3>
                    <p>Manage and track all customer orders</p>
                </div>

                <div
                    className="dashboard-card"
                    onClick={() => navigate("/manage-products")}
                >
                    <h3>Products</h3>
                    <p>Add, edit, or remove products from inventory</p>
                </div>

                <div
                    className="dashboard-card"
                    onClick={() => navigate("/manage-users")}
                >
                    <h3>Users</h3>
                    <p>Manage user accounts and permissions</p>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
