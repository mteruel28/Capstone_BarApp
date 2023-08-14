import React from 'react';
import RumItemCards from './RumItemCards';
import './Rum.css';
import { Link } from 'react-router-dom';

function Rum(){
    return(
        <div>
      <center> <p>Rums</p> </center>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>

            <center> <Link to = '/Spirits'>
<button> Return to Previous Page
    </button> </Link></center>
    <center> <Link to = '/shoppingcart'><button> Return to Shopping Cart </button> </Link></center>

       <RumItemCards/>
       </div>
    )
}
export default Rum;