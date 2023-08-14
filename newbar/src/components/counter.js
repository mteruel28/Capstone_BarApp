 import React, { useState } from "react";

//extending the parent class
const Counter = ({ product}) => {
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
    // Check if product is already in the cart
    //const existingProduct = cart.find(item => item.id === product.id);


// Save cart to LocalStorage
//sessionStorage.setItem(`${products.title}`,JSON.stringify(count));
sessionStorage.setItem(product.title, JSON.stringify([count, product.price]));
setCount(0);
};

  return (
    <div>
      <button onClick={countIncrement}>+</button>
      <button id="addtocart" onClick={addToCart}>Add to Cart</button>
      <button onClick={countDecrement}>-</button>
   
      <center>
          <span>{count}</span>
      </center>
    </div>
  )

};

export default Counter;
