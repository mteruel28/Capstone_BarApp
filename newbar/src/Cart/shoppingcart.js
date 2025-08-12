import React, { useState, useEffect } from "react";
import "./shoppingcart.css";
import { Link } from "react-router-dom";
//import Inventory from "./inventory";
//import Counter from "../components/counter";

function Shoppingcart(){

  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  

  useEffect(() => {
    // load cart from sessionStorage
    const items = Object.keys(sessionStorage)
      .filter((k) => k !== "lastAddedTitle")
      .map((k) => {
        try {
          const [qty, price] = JSON.parse(sessionStorage.getItem(k) || "[]");
          return { title: k, quantity: Number(qty) || 0, price: Number(price) || 0 };
        } catch {
          return null;
        }
      })
      .filter(Boolean);
    setProducts(items);

    // one-time "added" banner
    const last = sessionStorage.getItem("lastAddedTitle");
    if (last) {
      setMessage(`"${last}" has been added to your shopping cart`);
      sessionStorage.removeItem("lastAddedTitle");
      setTimeout(() => setMessage(""), 2000);
    }
  }, []);

  //const itemCount = products.reduce((sum, p) => sum + (p.quantity || 0), 0);
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

 // --- NEW: simple cart actions ---
  const removeItem = (title) => {
    sessionStorage.removeItem(title);
    setProducts((prev) => prev.filter((p) => p.title !== title));
  };

  const changeQuantity = (title, delta) => {
    setProducts((prev) =>
      prev
        .map((p) => {
          if (p.title !== title) return p;
          const newQty = (p.quantity || 0) + delta;
          if (newQty <= 0) {
            sessionStorage.removeItem(title);
            return null; // drop it
          }
          sessionStorage.setItem(title, JSON.stringify([newQty, p.price]));
          return { ...p, quantity: newQty };
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    products.forEach((p) => sessionStorage.removeItem(p.title));
    setProducts([]);
  };

   return (
   <div className="header">
  {/* Top row with title & cart count */}
  <div className="header-top">
    <div className="logo">Shopping Cart</div>
    <div className="cart">
      <i className="fa-solid fa-cart-shopping"></i>
      Cart Items:{" "}
      <p id="count">
        {products.reduce((sum, p) => sum + (p.quantity || 0), 0)}
      </p>
    </div>
  </div>

  {message && (
    <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
  )}

  {/* Centered cart container */}
  <div className="sc-container">
    <div className="sidebar">
      <div className="head"><p>My Cart</p></div>

      <div id="cartItem">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.title}>
              <h4>{product.title}</h4>
              <p>Price: ${(product.price * product.quantity).toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>

              {/* Buttons for item control */}
              <button onClick={() => changeQuantity(product.title, -1)}>-</button>
              <button onClick={() => changeQuantity(product.title, 1)}>+</button>
              <button onClick={() => removeItem(product.title)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="foot">
        <h3>Total</h3>
        <h2 id="total">${total.toFixed(2)}</h2>
      </div>

      {products.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  </div>

  <center>
    <Link to="/">
      <button>Return to Home</button>
    </Link>
  </center>
</div>
   )
}
export default Shoppingcart;