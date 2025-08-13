import React, { useState } from "react";
import VodkaItemCards from './VodkaItemCards';
import './Vodka.css';
import { Link } from 'react-router-dom';

function Vodka(){
 // define message state INSIDE component
    const [message, setMessage] = useState("");
    
    // define handler INSIDE component
    const handleAdded = (title, quantity) => {
    setMessage(`"${title}" has been added to your shopping cart\nQuantity added: ${quantity}`);
    setTimeout(() => setMessage(""), 10000);
      };
    
    return(
        <div>
       <center><p>Vodka</p></center>

        {/* use message safely */}
      {message && (
        <center>
          <p style={{ color: "green", fontWeight: "bold", whiteSpace: "pre-line" }}>{message}</p>
        </center>
      )}

            <center> <Link to = '/Spirits'>
<button> Return to Previous Page
    </button> </Link></center>
    <center> <Link to = '/shoppingcart'><button> Return to Shopping Cart </button> </Link></center>

       <VodkaItemCards onAdded={handleAdded}/>
       </div>
    )
}
export default Vodka;