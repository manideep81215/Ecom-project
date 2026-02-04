import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Product.css"; // reuse SAME CSS

const AdminProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    /* ---------------- FETCH PRODUCT ---------------- */
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/product/${id}`
                );
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
                toast.error("Failed to load product ❌");
            }
        };

        fetchProduct();
    }, [id]);

    /* ---------------- DELETE PRODUCT ---------------- */
    const deleteProduct = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/product/${id}`);
            toast.success("Product deleted successfully 🗑️");

            navigate("/manage-products"); // ✅ FIXED
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Failed to delete product ❌");
        }
    };

    /* ---------------- EDIT PRODUCT ---------------- */
    const handleEditClick = () => {
        navigate(`/product/update/${id}`); // ✅ FIXED
    };

    if (!product) {
        return (
            <h2 className="text-center" style={{ padding: "10rem" }}>
                Loading...
            </h2>
        );
    }

    return (
        <div className="containers" style={{ display: "flex" }}>
            {/* IMAGE */}
            <img
                className="left-column-img"
                src={`http://localhost:8080/api/product/${id}/image`}
                alt={product.name}
                style={{ width: "50%", height: "auto" }}
            />

            {/* DETAILS */}
            <div className="right-column" style={{ width: "50%" }}>
                <div className="product-description">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{product.category}</span>
                        <h6>
                            Listed :
                            <i> {new Date(product.releaseDate).toLocaleDateString()}</i>
                        </h6>
                    </div>

                    <h1>{product.name}</h1>
                    <i>{product.brand}</i>

                    <p style={{ fontWeight: "bold" }}>PRODUCT DESCRIPTION :</p>
                    <p>{product.description}</p>
                </div>

                <div className="product-price">
                    <span>{"₹" + product.price}</span>

                    {/* ADMIN STATUS */}
                    <h6 style={{ marginTop: "1rem" }}>
                        Availability :
                        <i
                            style={{
                                color: product.productAvailable ? "green" : "red",
                                fontWeight: "bold",
                                marginLeft: "5px",
                            }}
                        >
                            {product.productAvailable ? "Available" : "Out of Stock"}
                        </i>
                    </h6>

                    <h6>
                        Stock Available :
                        <i style={{ color: "green", fontWeight: "bold" }}>
                            {product.stockQuantity}
                        </i>
                    </h6>
                </div>

                {/* ADMIN ACTIONS */}
                <div className="update-button" style={{ display: "flex", gap: "1rem" }}>
                    <button className="btn btn-primary" onClick={handleEditClick}>
                        Update
                    </button>

                    <button className="btn btn-danger" onClick={deleteProduct}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminProduct;
