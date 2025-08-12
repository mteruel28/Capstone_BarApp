import React, { useState } from "react";
import { Link } from "react-router-dom";

//extending the parent class
const Counter = ({ product }) => {
  // react hooks for state management. State is just a variable that changes in a component.
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  //New: state the confirmation message
  const[message ,setMessage] = useState("");

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
      //save product to sessionStorage
      sessionStorage.setItem(
        product.title,
        JSON.stringify([count,product.price])
      );
      setMessage(`"${product.title}" has been added to your shopping cart`);
      setTimeout(() => setMessage(""), 2000);
      setCount(0);

    //New: Shows confirmation message
    setMessage(`"${product.title}" has been added to your shopping cart`);
  
    //Clears message after 2 seconds
    setTimeout(() => setMessage(""), 2000);

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
    sessionStorage.setItem("lastAddedTitle", product.title);
    setCount(0);
   
};


  return (
    <div>
      <button onClick={countDecrement}>-</button>
      <button id="addtocart" onClick={onAddToCart} 
      >Add to Cart
      </button> 
      <button onClick={countIncrement}>+</button>
      
      <center>
          <span>{count}</span>
      </center>

       {message && (
        <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
      )}

    </div>
  )

};

export default Counter;
