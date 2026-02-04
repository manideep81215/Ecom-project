// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AppContext from "../Context/Context";
// import CheckoutPopup from "./CheckoutPopup";
// import { Button } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "./Cart.css";

// const Cart = () => {
//   const navigate = useNavigate();
//   const {
//     cart,
//     removeFromCart,
//     clearCart,
//     updateQuantity, // ✅ REQUIRED IN CONTEXT
//   } = useContext(AppContext);

//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [showModal, setShowModal] = useState(false);

//   /* -------------------------------
//      SYNC CART
//   ------------------------------- */
//   useEffect(() => {
//     const items = cart.map((item) => ({
//       ...item,
//       imageUrl: `http://localhost:8080/api/product/${item.id}/image`,
//     }));
//     setCartItems(items);
//   }, [cart]);

//   /* -------------------------------
//      TOTAL PRICE
//   ------------------------------- */
//   useEffect(() => {
//     const total = cartItems.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0
//     );
//     setTotalPrice(total);
//   }, [cartItems]);

//   /* -------------------------------
//      QUANTITY HANDLERS (PERSISTED)
//   ------------------------------- */
//   const increaseQty = (id) => {
//     updateQuantity(id, 1);
//   };

//   const decreaseQty = (id) => {
//     updateQuantity(id, -1);
//   };

//   /* -------------------------------
//      REMOVE ITEM
//   ------------------------------- */
//   const handleRemove = (id) => {
//     removeFromCart(id);
//     toast.info("Item removed 🗑️");
//   };

//   /* -------------------------------
//      CHECKOUT
//   ------------------------------- */
//   const handleCheckout = async () => {
//     try {
//       toast.success("Proceeding to address... 🚚");
//       setShowModal(false);

//       // Navigate to address page with cart data
//       navigate("/address", {
//         state: { cartItems, totalPrice },
//       });
//     } catch (err) {
//       toast.error("Checkout failed ❌");
//     }
//   };

//   return (
//       <div className="cart-container">
//         <div className="shopping-cart">
//           <h2 className="title">Shopping Bag</h2>

//           {cartItems.length === 0 ? (
//               <div className="cart-empty">
//                 <h4>Your cart is empty</h4>
//               </div>
//           ) : (
//               <>
//                 {cartItems.map((item) => (
//                     <div key={item.id} className="cart-item">
//                       {/* LEFT: IMAGE */}
//                       <div className="cart-left">
//                         <img
//                             src={item.imageUrl}
//                             alt={item.name}
//                             className="cart-item-image"
//                         />
//                       </div>

//                       {/* CENTER: NAME */}
//                       <div className="cart-center">
//                         <div className="brand">{item.brand}</div>
//                         <div className="name">{item.name}</div>
//                       </div>

//                       {/* RIGHT: QTY + PRICE + DELETE */}
//                       <div className="cart-right">
//                         <div className="quantity">
//                           <button onClick={() => decreaseQty(item.id)}>−</button>
//                           <span>{item.quantity}</span>
//                           <button onClick={() => increaseQty(item.id)}>+</button>
//                         </div>

//                         <div className="price">
//                           ₹{item.price * item.quantity}
//                         </div>

//                         <button
//                             className="remove-btn"
//                             onClick={() => handleRemove(item.id)}
//                         >
//                           🗑
//                         </button>
//                       </div>
//                     </div>
//                 ))}

//                 <div className="total">Total: ₹{totalPrice}</div>

//                 <Button
//                     className="checkout-btn"
//                     onClick={() => setShowModal(true)}
//                 >
//                   Checkout
//                 </Button>
//               </>
//           )}
//         </div>

//         <CheckoutPopup
//             show={showModal}
//             handleClose={() => setShowModal(false)}
//             cartItems={cartItems}
//             totalPrice={totalPrice}
//             handleCheckout={handleCheckout}
//         />
//       </div>
//   );
// };

// export default Cart;
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import AppContext from "../Context/Context";
import CheckoutPopup from "./CheckoutPopup";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  // ✅ USE CONTEXT ONLY ONCE
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isAuthenticated,
  } = useContext(AppContext);

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  /* -------------------------------
     AUTH GUARD (INSIDE COMPONENT)
  ------------------------------- */
  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning("Please login to view your cart 🔐");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  /* -------------------------------
     SYNC CART
  ------------------------------- */
  useEffect(() => {
    const items = cart.map((item) => ({
      ...item,
      imageUrl: `http://localhost:8080/api/product/${item.id}/image`,
    }));
    setCartItems(items);
  }, [cart]);

  /* -------------------------------
     TOTAL PRICE
  ------------------------------- */
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  /* -------------------------------
     QUANTITY HANDLERS
  ------------------------------- */
  const increaseQty = (id) => updateQuantity(id, 1);
  const decreaseQty = (id) => updateQuantity(id, -1);

  /* -------------------------------
     REMOVE ITEM
  ------------------------------- */
  const handleRemove = (id) => {
    removeFromCart(id);
    toast.info("Item removed 🗑️");
  };

  /* -------------------------------
     CHECKOUT
  ------------------------------- */
  const handleCheckout = () => {
    toast.success("Proceeding to address... 🚚");
    setShowModal(false);

    navigate("/address", {
      state: { cartItems, totalPrice },
    });
  };

  /* -------------------------------
     UI
  ------------------------------- */
  return (
    <div className="cart-container">
      <div className="shopping-cart">
        <h2 className="title">Shopping Bag</h2>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h4>Your cart is empty</h4>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                {/* IMAGE */}
                <div className="cart-left">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>

                {/* NAME */}
                <div className="cart-center">
                  <div className="brand">{item.brand}</div>
                  <div className="name">{item.name}</div>
                </div>

                {/* QTY + PRICE */}
                <div className="cart-right">
                  <div className="quantity">
                    <button onClick={() => decreaseQty(item.id)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <div className="price">
                    ₹{item.price * item.quantity}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}

            <div className="total">Total: ₹{totalPrice}</div>

            <Button
              className="checkout-btn"
              onClick={() => setShowModal(true)}
            >
              Checkout
            </Button>
          </>
        )}
      </div>

      <CheckoutPopup
        show={showModal}
        handleClose={() => setShowModal(false)}
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleCheckout={handleCheckout}
      />
    </div>
  );
};

export default Cart;
