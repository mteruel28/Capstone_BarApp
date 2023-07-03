import React, { Component } from "react";

//extending the parent class
class Counter extends Component {
  state = {
    count: 0,
  };

  constructor() {
    super(); // refers to component object // this refers to current class
    this.countIncrement = this.countIncrement.bind(this);
    this.countDecrement = this.countDecrement.bind(this);
  }

  countIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  countDecrement() {
    if (this.state.count === 0) {
      this.setState({ count: this.state.count });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render(){
    return(
    <div>
        
        <button>Add to Cart</button>
        <button onClick={this.countIncrement}>+</button>
        <button onClick={this.countDecrement}>-</button>
        <span>{this.state.count}</span>
        
    </div>
    )
  }
}

export default Counter;
