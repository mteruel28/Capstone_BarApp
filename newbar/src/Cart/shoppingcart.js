import React from "react";
import "./shoppingcart.css";

function Shoppingcart() {
  return (
    <div className="navbar">
      <div>
        <h1>ShoppingCart</h1>
        <div className="cart">Cart Items</div>
        <div>
          <button>Clear the Cart</button>
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
export default Shoppingcart;
