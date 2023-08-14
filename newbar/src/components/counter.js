import React, { useState } from "react";
import { Link } from "react-router-dom";

//extending the parent class
const Counter = ({ product }) => {
  // react hooks for state management. State is just a variable that changes in a component.
  const [count, setCount] = useState(0);
  // state = {
  //   count: 0,
  // };

  // constructor() {
  //   super(); // refers to component object // this refers to current class
  //   this.countIncrement = this.countIncrement.bind(this);
  //   this.countDecrement = this.countDecrement.bind(this);
  // }

  const [cart, setCart] = useState([]);

  const countIncrement = () => {
    // this.setState({ count: this.state.count + 1 });
    setCount(count + 1)
  }

  const countDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const addToCart = () => {
    if (count > 0) {
      onAddToCart(product, count);
      setCount(0);
    }
  }

  const onAddToCart = () => {
    // // Check if product is already in the cart
    // const existingProduct = cart.find(item => item.id === product.id);

    // if (existingProduct) {
    //     // If the product is already in the cart, just update its quantity
    //     const updatedCart = cart.map(item =>
    //         item.id === product.id
    //             ? { ...item, quantity: item.quantity + quantity }
    //             : item
    //     );
    //     setCart(updatedCart);
    // } else {
    //     // If the product is not in the cart, add it with the specified quantity
    //     setCart([...cart, { ...product, quantity }]);
    // }


    // Save product to sessionStorage
    // store the value as an array of two elements: quantity and price
    sessionStorage.setItem(product.title, JSON.stringify([count, product.price]));
    
    setCount(0);
   
};


  return (
    <div>
      <button onClick={countIncrement}>+</button>
      <button id="addtocart"onClick={onAddToCart} >Add to Cart</button> 
      {/* <Link to={`/shoppingcart/${product.id}/${count}`}>
        Add to Cart
      </Link> */}
      <button onClick={countDecrement}>-</button>
      
      <center>
          <span>{count}</span>
      </center>
    </div>
  )

};

export default Counter;
