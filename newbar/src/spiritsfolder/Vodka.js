import React from 'react';
import VodkaItemCards from './VodkaItemCards';
import './Vodka.css';
import { Link } from 'react-router-dom';

function Vodka(){
    return(
        <div>
       <center><p>Vodka</p></center>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>

            <center> <Link to = '/Spirits'>
<button> Return to Previous Page
    </button> </Link></center>
    <center> <Link to = '/shoppingcart'><button> Return to Shopping Cart </button> </Link></center>

       <VodkaItemCards/>
       </div>
    )
}
export default Vodka;