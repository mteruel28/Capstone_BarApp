import React, { useState } from "react";
import './Wine.css';
import WineItemCards from './WineItemCards';
import { Link } from 'react-router-dom';

function Wines(){

    // define message state INSIDE component
      const [message, setMessage] = useState("");
    
      // define handler INSIDE component
      const handleAdded = (title, quantity) => {
        setMessage(`"${title}" has been added to your shopping cart\nQuantity added: ${quantity}`);
        setTimeout(() => setMessage(""), 10000);
      };

    return(
        <div>
            <center><p>Wines</p></center>

                {/* use message safely */}
      {message && (
        <center>
          <p style={{ color: "green", fontWeight: "bold", whiteSpace: "pre-line" }}>{message}</p>
        </center>
      )}
      
            <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>

            <center> <Link to = '/'><button> Return to Home </button> </Link></center>
            <center> <Link to = '/shoppingcart'><button> Return to Shopping Cart </button> </Link></center>
            <WineItemCards  onAdded={handleAdded}/>
        </div>
    )
}

export default Wines;
