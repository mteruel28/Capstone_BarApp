import React from "react";
import "./shoppingcart.css";
import { Link } from "react-router-dom";

function Shoppingcart() {
  return (
    <div className="header">
      <div>
        <div className="logo">Shopping Cart</div>

        <div className="cart">
          {" "}
          Cart Items <p id="count"> " 4 " </p>
        </div>

        <div className="sc-container">
          <div id="root"></div>
          <div class="sidebar">
          <div class="head"><p>"My Cart"</p></div>
          <div id="cartItem"><p>Your cart is empty</p></div>
          <div class="foot">
            <h3>Total</h3>
            <h2 id="total">$0.00</h2>
            </div>
          </div>
        </div>
      </div>
      <center>
        {" "}
        <Link to="/">
          <button> Return to Home </button>{" "}
        </Link>
      </center>
    </div>
  );
}
export default Shoppingcart;
