import React, {useState } from "react";


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
    setCount(prevCount => prevCount + 1);
  }

  const countDecrement = () => {
    if (count === 0) {
      // this.setState({ count: this.state.count });
      //setCount(count)
      return;
    } else {
      // this.setState({ count: this.state.count - 1 });
      setCount(prevCount => prevCount - 1)
    }
  }

  const addToCart = () => {
    console.log("Item has been added to cart!");
  }

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
