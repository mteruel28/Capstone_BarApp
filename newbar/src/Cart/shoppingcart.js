import React, { useState, useEffect } from "react";
import "./shoppingcart.css";
import { Link } from "react-router-dom";
import Inventory from "./inventory";

function Shoppingcart({ products }){

  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

   // Calculate the total based on the items in the cart
   const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

   return (

    <div className="header">
      <div>
        <div className="logo">Shopping Cart</div>

        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          Cart Items <p id="count">{cartItems.length}</p>
        </div>

        <div className="sc-container">
          <div id="root"></div>
          <div className="sidebar">
            <div className="head"><p>"My Cart"</p></div>
            <div id="cartItem">
              {cartItems.length > 0 ? (
                cartItems.map(item => (
                  <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
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

      <Inventory />
      {/* Passing product array as a prop */}
      <Shoppingcart products={products} />

    </div>
  );
              }

export default Shoppingcart;






