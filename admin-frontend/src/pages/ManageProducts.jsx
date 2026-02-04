import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const res = await axios.get("http://localhost:8080/api/products");

        const withImages = await Promise.all(
            res.data.map(async (product) => {
                try {
                    const imgRes = await axios.get(
                        `http://localhost:8080/api/product/${product.id}/image`,
                        { responseType: "blob" }
                    );
                    return {
                        ...product,
                        imageUrl: URL.createObjectURL(imgRes.data),
                    };
                } catch {
                    return { ...product, imageUrl: "" };
                }
            })
        );

        setProducts(withImages);
    };

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: "#9e9e9e",
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                    gap: "30px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                {products.map((product) => (
                    /* 🔥 CLICKABLE CARD */
                    <div
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            padding: "20px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        {/* IMAGE */}
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "#f5f5f5",
                                borderRadius: "12px",
                                overflow: "hidden",
                                marginBottom: "20px",
                            }}
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        {/* INFO */}
                        <h3
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                margin: "10px 0 5px 0",
                                textAlign: "center",
                            }}
                        >
                            {product.name}
                        </h3>

                        <p
                            style={{
                                fontSize: "14px",
                                color: "#666",
                                fontStyle: "italic",
                                margin: "0 0 15px 0",
                            }}
                        >
                            ~ {product.brand}
                        </p>

                        <hr
                            style={{
                                width: "100%",
                                border: "none",
                                borderTop: "1px solid #e0e0e0",
                                margin: "15px 0",
                            }}
                        />

                        <h4
                            style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                margin: "10px 0 15px 0",
                            }}
                        >
                            ₹{product.price}
                        </h4>

                        {/* ✅ ADMIN STATUS */}
                        <span
                            style={{
                                padding: "10px 20px",
                                borderRadius: "20px",
                                fontWeight: "600",
                                backgroundColor: product.productAvailable
                                    ? "#4CAF50"
                                    : "#F44336",
                                color: "white",
                            }}
                        >
              {product.productAvailable ? "Available" : "Out of Stock"}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageProducts;
