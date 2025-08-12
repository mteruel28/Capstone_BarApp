import React, { useState } from "react";

const Counter = ({ product,onAdded }) => {
  const [count, setCount] = useState(0);

  const countIncrement = () => setCount((n) => n + 1);
  const countDecrement = () => setCount((n) => (n > 0 ? n - 1 : 0));

  const onAddToCart = () => {
    if (count <= 0) return;

    // Save item in cart: [quantity, price]
    sessionStorage.setItem(
      product.title,
      JSON.stringify([count, product.price])
    );

    // Save last added title for banner on other pages
    sessionStorage.setItem("lastAddedTitle", product.title);

    // NEW: Send title & quantity back to parent
    if (onAdded) {
      onAdded(product.title, count);
    }

    setCount(0);
  };

  return (
    <div>
      <button type="button" onClick={countDecrement}>-</button>
      <button type="button" id="addtocart" onClick={onAddToCart}>
        Add to Cart
      </button>
      <button type="button" onClick={countIncrement}>+</button>

      <center><span>{count}</span></center>
    </div>
  );
};

export default Counter;
