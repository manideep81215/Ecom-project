import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../components/OrderDetails.css";

/* ===================== CONSTANTS ===================== */
const ORDER_STATUSES = [
  "PLACED",
  "PENDING",
  "IN_TRANSIT",
  "SHIPPED",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "DELIVERY_FAILED",
  "CANCELLED",
  "DELAYED",
  "LOST",
];

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [cancelling, setCancelling] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  /* ====================================================
     ADMIN: ALWAYS FETCH BY ORDER ID (NO userId)
     ==================================================== */
  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
          `http://localhost:8080/api/admin/orders/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
      );

      if (!response.ok) {
        throw new Error("Order not found");
      }

      const data = await response.json();
      setOrder(data);
    } catch (err) {
      setError(err.message || "Error loading order");
    } finally {
      setLoading(false);
    }
  };

  /* ================= ADMIN UPDATE ================= */
  const handleAdminUpdate = async (updates) => {
    try {
      setUpdating(true);

      const response = await fetch(
          `http://localhost:8080/api/admin/orders/${order.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(updates),
          }
      );

      if (!response.ok) {
        throw new Error("Failed to update order");
      }

      await fetchOrderDetails(); // 🔥 refresh everywhere
    } catch (err) {
      alert(err.message);
    } finally {
      setUpdating(false);
    }
  };

  /* ================= USER CANCEL ================= */
  const handleConfirmCancel = async () => {
    setShowConfirmModal(false);
    try {
      setCancelling(true);
      setError("");
      setSuccess("");

      const response = await fetch(
          `http://localhost:8080/api/auth/user/${order.userId}/orders/${orderId}/cancel`,
          { method: "PUT" }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel order");
      }

      setSuccess("Order cancelled successfully");
      await fetchOrderDetails(); // 🔥 refresh everywhere
    } catch (err) {
      setError(err.message);
    } finally {
      setCancelling(false);
    }
  };

  /* ================= HELPERS ================= */
  const parseAddress = (json) => {
    try {
      return JSON.parse(json);
    } catch {
      return {};
    }
  };

  /* ================= UI STATES ================= */
  if (loading) {
    return <div className="order-details-container">Loading...</div>;
  }

  if (!order) {
    return <div className="order-details-container">Order not found</div>;
  }

  const address = parseAddress(order.addressJson);

  /* ================= RENDER ================= */
  return (
      <div className="order-details-container">
        <button onClick={() => navigate("/manage-orders")} className="btn-back">
          ← Back to Orders
        </button>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <div className="order-header">
          <h2>Order #{order.orderNumber}</h2>
          <span className={`status-badge status-${order.status.toLowerCase()}`}>
          {order.status}
        </span>
        </div>

        <div className="order-wrapper">
          {/* LEFT */}
          <div className="order-summary-section">
            <h4>Order Info</h4>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>User ID:</strong> {order.userId}</p>
            <p><strong>Payment:</strong> {order.paymentMethod}</p>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>

            <h4>Delivery Address</h4>
            <p>{address.fullName}</p>
            <p>{address.address}</p>
            <p>{address.city}, {address.state}</p>
            <p>{address.country}</p>

            <h4>Items</h4>
            {order.items?.map((item) => (
                <div key={item.id}>
                  {item.name} × {item.quantity} — ₹{item.price}
                </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="payment-mode-section">
            <h3>Total: ₹{order.totalPrice}</h3>

            {/* ========= ADMIN CONTROLS ========= */}
            <div className="admin-controls">
              <h4>Admin Controls</h4>

              <select
                  value={order.status}
                  onChange={(e) =>
                      handleAdminUpdate({ status: e.target.value })
                  }
                  disabled={updating}
              >
                {ORDER_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status.replaceAll("_", " ")}
                    </option>
                ))}
              </select>

              <input
                  type="date"
                  value={order.deliveryDate || ""}
                  onChange={(e) =>
                      handleAdminUpdate({ deliveryDate: e.target.value })
                  }
                  disabled={updating}
              />
            </div>

            {/* ========= USER CANCEL ========= */}
            {order.status !== "CANCELLED" && (
                <button
                    className="btn-cancel-order"
                    onClick={() => setShowConfirmModal(true)}
                    disabled={cancelling}
                >
                  Cancel Order
                </button>
            )}

            {order.status === "CANCELLED" && (
                <p className="cancelled-notice">Order has been cancelled</p>
            )}
          </div>
        </div>

        {/* CONFIRM MODAL */}
        {showConfirmModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>Cancel Order?</h3>
                <p>This action cannot be undone.</p>
                <button onClick={handleConfirmCancel} disabled={cancelling}>
                  Yes, Cancel
                </button>
                <button
                    onClick={() => setShowConfirmModal(false)}
                    disabled={cancelling}
                >
                  No
                </button>
              </div>
            </div>
        )}
      </div>
  );
};

export default OrderDetails;
