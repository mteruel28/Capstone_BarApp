import React, { useState, useEffect } from "react";
import "./shoppingcart.css";
import { Link } from "react-router-dom";
import Inventory from "./inventory";
import Counter from "../components/counter";

function Shoppingcart(){

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  

  // Load cart items from localStorage when component mounts
  useEffect(() => {
   // retrieve all the objects as key and value objects in sessionStorage and store in an array
    const items = Object.keys(sessionStorage).map(key => {
      let value = JSON.parse(sessionStorage.getItem(key));
      return {
        title: key,
        quantity: value[0],
        price: value[1]
      }
    });

    setProducts(items);
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
          Cart Items <p id="count">{cartItems.length}</p>
        </div>

        <div className="sc-container">
          <div id="root"></div>
          <div className="sidebar">
            <div className="head"><p>"My Cart"</p></div>
            <div id="cartItem">
              {products.length > 0 ? (
                products.map(product => (
                  <div>
                    <h4>{product.title}</h4>
                    <p>Price: ${product.price * product.quantity}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
            <div className="foot">
              <h3>Total</h3>
              <h2 id="total">${total}</h2>
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





