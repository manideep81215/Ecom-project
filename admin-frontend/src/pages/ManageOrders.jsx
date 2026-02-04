import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch(
          "http://localhost:8080/api/auth/user/orders"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();

      // 🔥 SORT: LATEST ORDER FIRST
      const sortedOrders = [...data].sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        // fallback if date missing
        return b.id - a.id;
      });

      setOrders(sortedOrders);
      setError("");
    } catch (err) {
      setError(err.message || "Error loading orders");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  if (loading) {
    return (
        <div className="manage-orders-container">
          <p>Loading orders...</p>
        </div>
    );
  }

  return (
      <div className="manage-orders-container">
        <h2>Manage Orders</h2>

        {error && <div className="error-message">{error}</div>}

        {orders.length === 0 ? (
            <p>No orders found</p>
        ) : (
            <table className="orders-table">
              <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Number</th>
                <th>User ID</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Delivery Date</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
              </thead>

              <tbody>
              {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.orderNumber}</td>
                    <td>{order.userId}</td>
                    <td>₹{parseFloat(order.totalPrice).toFixed(2)}</td>

                    {/* STATUS */}
                    <td>
                  <span
                      className={`status-badge status-${order.status.toLowerCase()}`}
                  >
                    {order.status.replaceAll("_", " ")}
                  </span>
                    </td>

                    {/* DELIVERY DATE */}
                    <td>
                      {order.deliveryDate
                          ? new Date(order.deliveryDate).toLocaleDateString()
                          : "—"}
                    </td>

                    {/* CREATED DATE */}
                    <td>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>

                    <td>
                      <button
                          className="btn-view"
                          onClick={() => handleViewDetails(order.id)}
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
  );
};

export default ManageOrders;
