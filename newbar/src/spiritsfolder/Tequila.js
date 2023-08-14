import React from 'react';
import TequilaItemCards from './TequilaItemCards';
import './Tequila.css';
import { Link } from 'react-router-dom';

function Tequila(){
    return(
        <div>
      <center> <p>Tequila</p> </center>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>

            <center> <Link to = '/Spirits'>
<button> Return to Previous Page
    </button> </Link></center>
    <center> <Link to = '/shoppingcart'><button> Return to Shopping Cart </button> </Link></center>

       <TequilaItemCards/>
       </div>
    )
}
export default Tequila;