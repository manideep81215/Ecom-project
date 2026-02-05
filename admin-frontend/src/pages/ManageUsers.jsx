import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/* =========================
   USER CARD COMPONENT
   ========================= */
const UserCard = ({ user, navigate }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* PROFILE PHOTO OR INITIAL */}
            {!imageError ? (
                <img
                    src={`${import.meta.env.VITE_API_URL}/api/admin/user/${user.id}/photo`}
                    alt="profile"
                    onError={() => setImageError(true)}
                    style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: "15px",
                    }}
                />
            ) : (
                <div
                    style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        backgroundColor: "#e0e0e0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "40px",
                        fontWeight: "bold",
                        color: "#555",
                        marginBottom: "15px",
                    }}
                >
                    {user.username?.charAt(0).toUpperCase()}
                </div>
            )}

            {/* USER INFO */}
            <h4 style={{ marginBottom: "5px" }}>{user.username}</h4>

            <p style={{ color: "#666", marginBottom: "5px" }}>
                {user.email}
            </p>

            <p style={{ marginBottom: "10px" }}>
                <strong>Role:</strong> {user.role}
            </p>

            <span
                style={{
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    backgroundColor: user.enabled ? "#4CAF50" : "#F44336",
                    color: "white",
                    marginBottom: "15px",
                }}
            >
        {user.enabled ? "Active" : "Blocked"}
      </span>

            <button
                className="btn btn-primary"
                onClick={() => navigate(`/user/${user.id}`)}
            >
                User Details
            </button>
        </div>
    );
};

/* =========================
   MANAGE USERS PAGE
   ========================= */
const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const res = await api.get("http://localhost:8080/api/admin/users");
            setUsers(res.data);
        } catch (error) {
            console.error("Failed to load users", error);
        }
    };

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: "#9e9e9e",
                minHeight: "100vh",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
                Manage Users
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "30px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        navigate={navigate}
                    />
                ))}
            </div>
        </div>
    );
};

export default ManageUsers;
