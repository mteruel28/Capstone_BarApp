import React, { useState } from "react";
import RumItemCards from "./RumItemCards";
import "./Rum.css";
import { Link } from "react-router-dom";

function Rum() {
  // message state
  const [message, setMessage] = useState("");

  // handler for adding to cart
  const handleAdded = (title, quantity) => {
    setMessage(`"${title}" has been added to your shopping cart\nQuantity added: ${quantity}`);
    setTimeout(() => setMessage(""), 10000);
  };

  return (
    <div>
      <center>
        <p>Rums</p>
      </center>

      {/* success message */}
      {message && (
        <center>
          <p style={{ color: "green", fontWeight: "bold", whiteSpace: "pre-line" }}>
            {message}
          </p>
        </center>
      )}

      <center>
        <Link to="/Spirits">
          <button>Return to Previous Page</button>
        </Link>
      </center>
      <center>
        <Link to="/shoppingcart">
          <button>Return to Shopping Cart</button>
        </Link>
      </center>

      {/* pass handler to child */}
      <RumItemCards onAdded={handleAdded} />
    </div>
  );
}

export default Rum;
