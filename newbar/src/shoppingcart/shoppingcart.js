import React from 'react';
import './shoppingcart.css';


function Shoppingcart(){
    return (
        <div className="navbar">
          <div>
            <h1>Shopping Cart</h1>
             <div className="cart"><h3>Cart Items</h3></div>               
            <div className='row'>
                <div className ="column"> Example</div>
                <div className ="column">  Another Example</div>
                </div>
        </div>
        </div>
      );
    }
    export default Shoppingcart;