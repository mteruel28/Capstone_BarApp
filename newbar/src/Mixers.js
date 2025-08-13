import React from "react";
import './Mixers.css';
import MixerItemCards from './MixersItemCards.js';
import { Link } from 'react-router-dom';

function Mixers(){
    return(
        <div>
       <center><p>Mixers and Misc</p></center>
       
<center> <Link to = '/'><button> Return to Home </button> </Link></center>
 <center> <Link to = '/shoppingcart'><button> Return to Shopping Cart </button> </Link></center>
<MixerItemCards/>
</div>
    )
}
export default Mixers;