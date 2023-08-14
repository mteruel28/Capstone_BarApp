import React from 'react';
import WhiskeyItemCards from './WhiskeyItemCards';
import './Whiskey.css';
import { Link } from 'react-router-dom';

function Whiskey(){
    return(
        <div>
       <center><p>Whiskeys</p></center>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>

            <center> <Link to = '/Spirits'><button> Return to Previous Page</button> </Link></center>
            <center> <Link to = '/shoppingcart'><button> Return to Shopping Cart </button> </Link></center>

       <WhiskeyItemCards/>
       </div>
    )
}
export default Whiskey;