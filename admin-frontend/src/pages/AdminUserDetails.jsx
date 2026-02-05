import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import "./AdminUserDetails.css";

const AdminUserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);

    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingOrders, setLoadingOrders] = useState(true);

    // 🔑 THIS controls photo vs initial
    const [photoAvailable, setPhotoAvailable] = useState(true);

    /* ================= LOAD USER ================= */
    const loadUserProfile = async () => {
        try {
            const res = await api.get(
                `/api/admin/user/${id}`
            );
            setUser(res.data);
            setPhotoAvailable(true); // reset when user changes
        } finally {
            setLoadingUser(false);
        }
    };

    /* ================= LOAD ORDERS ================= */
    const loadUserOrders = async () => {
        try {
            const res = await api.get(
                `/api/admin/user/${id}/orders`
            );
            setOrders(res.data || []);
        } finally {
            setLoadingOrders(false);
        }
    };

    useEffect(() => {
        loadUserProfile();
        loadUserOrders();
    }, [id]);

    /* ================= UI STATES ================= */
    if (loadingUser) {
        return <h3 style={{ textAlign: "center" }}>Loading user profile...</h3>;
    }

    if (!user) {
        return <h3 style={{ textAlign: "center" }}>User not found</h3>;
    }

    return (
        <div className="admin-user-page">
            <button className="btn btn-secondary back-btn" onClick={() => navigate(-1)}>
                ← Back
            </button>

            {/* ================= USER PROFILE ================= */}
            <div className="profile-card">

                {/* PHOTO OR INITIAL (MUTUALLY EXCLUSIVE) */}
                <div className="profile-image-wrapper">
                    {photoAvailable ? (
                        <img
                            src={`${import.meta.env.VITE_API_URL}/api/auth/user/${user.id}/photo`}
                            alt="Profile"
                            className="profile-image"
                            onError={() => setPhotoAvailable(false)}
                        />
                    ) : (
                        <div className="profile-placeholder">
                            {user.username?.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>

                <h3>{user.fullName}</h3>
                <p><b>Username:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phoneNumber || "-"}</p>
                <p><b>DOB:</b> {user.dateOfBirth || "-"}</p>
            </div>

            {/* ================= USER ORDERS ================= */}
            <div className="orders-card">
                <h4>User Orders</h4>

                {loadingOrders ? (
                    <p>Loading orders...</p>
                ) : orders.length === 0 ? (
                    <p>No orders found</p>
                ) : (
                    <table className="table table-bordered orders-table">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Order No</th>
                            <th>Created At</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Delivery Date</th>
                            <th>Items</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.orderNumber}</td>
                                <td>
                                    {order.createdAt
                                        ? new Date(order.createdAt).toLocaleDateString()
                                        : "-"}
                                </td>
                                <td>₹{order.totalPrice}</td>

                                <td>
                                        <span className={`status-label status-${order.status?.toLowerCase()}`}>
                                            {order.status}
                                        </span>
                                </td>

                                <td>
                                    {order.deliveryDate
                                        ? new Date(order.deliveryDate).toLocaleDateString()
                                        : "-"}
                                </td>

                                <td>{order.items?.length || 0}</td>

                                <td>
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => navigate(`/orders/${order.id}`)}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AdminUserDetails;
