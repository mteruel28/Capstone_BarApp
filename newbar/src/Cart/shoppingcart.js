import React from "react";
import "./shoppingcart.css";
import { Link } from 'react-router-dom';

function Shoppingcart() {
  return (
    <div className="navbar">
      <div>
        <h1>ShoppingCart</h1>
        <center> <Link to = '/'><button> Return to Home  </button> </Link></center>
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
