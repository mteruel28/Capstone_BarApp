import React, { useState, useEffect } from "react";
import "./shoppingcart.css";
import { Link } from "react-router-dom";
//import Inventory from "./inventory";
//import Counter from "../components/counter";

function Shoppingcart(){

  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  
  
  // Load cart items from localStorage when component mounts
  useEffect(() => {
   // retrieve all the objects as key and value objects in sessionStorage and store in an array
    const items = Object.keys(sessionStorage)
    .filter((k) => k !== "lastAddedTitle") // skip the banner key
    .map((k) => {
      try {
        const [qty, price] = JSON.parse(sessionStorage.getItem(k) || "[]");
        return { title: k, quantity: Number(qty) || 0, price: Number(price) || 0 };
      } catch {
        return null; // skip non-JSON keys
      }
    })
    .filter(Boolean);

  setProducts(items);

    const last = sessionStorage.getItem("lastAddedTitle");
  if (last) {
    setMessage(`"${last}" has been added to your shopping cart`);
    sessionStorage.removeItem("lastAddedTitle");
    setTimeout(() => setMessage(""), 2000);
  }

  }, []);

  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  
   // Calculate the total based on the items in the cart
  //  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

   return (
    

    <div className="header">
      <div>
        <div className="logo">Shopping Cart</div>

        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          Cart Items:
          <p id="count">
        {products.reduce((sum, p) => sum + (p.quantity || 0), 0)}
        </p>
        </div>

 {message && (
      <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
    )}

        <div className="sc-container">
          <div id="root"></div>
          <div className="sidebar">
            <div className="head"><p>"My Cart"</p></div>
            <div id="cartItem">
              {products.length > 0 ? (
                products.map(product => (
                  <div>
                    <h4>{product.title}</h4>
                    <p>Price: ${product.price.toFixed(2) * product.quantity}</p>
                    <p>Quantity: {product.quantity}</p>
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
          </div>
        </div>
      </div>
      <center>
        <Link to="/">
          <button> Return to Home </button>
        </Link>
      </center>


      
      {/* <Inventory /> */}
      {/* Passing product array as a prop */}
      {/* <Shoppingcart products={products} /> */}
      {/* <Counter product={product} onAddToCart={addToCart} /> */}


    </div>
  );
              }

export default Shoppingcart;





