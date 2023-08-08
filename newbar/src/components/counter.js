import React, { Component, useState } from "react";


//extending the parent class
const Counter = () => {
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

  const countIncrement = () => {
    // this.setState({ count: this.state.count + 1 });
    setCount(count + 1)
  }

  const countDecrement = () => {
    if (this.state.count === 0) {
      // this.setState({ count: this.state.count });
      setCount(count)
    } else {
      // this.setState({ count: this.state.count - 1 });
      setCount(count - 1)
    }
  }

  const AddToCart = () => {
    console.log("Item has been added to cart!");
  }

  return (
    <div>
      <button onClick={countIncrement}>+</button>
      <button id="addtocart" onClick={AddToCart}>Add to Cart</button>
      <button onClick={countDecrement}>-</button>
      <center>
          <span>{count}</span>
      </center>
    </div>
  )

};

    


export default Counter;
