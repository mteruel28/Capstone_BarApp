import React from 'react';
import './Spirits.css';
import SpiritsItemCards from './SpiritsItemCards.js';
import { Link } from 'react-router-dom';

function Spirits(){
    return(
        <div>
       <center><p>Spirits</p></center>
       

<center> <Link to = '/'>
<button> Return to Home 
    </button> </Link></center>
    <center> <Link to = '/shoppingcart'><button> Return to Shopping Cart </button> </Link></center>

<SpiritsItemCards/>
</div>
    )
}
export default Spirits;