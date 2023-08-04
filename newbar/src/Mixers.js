import React from 'react';
import './Mixers.css';
import MixerItemCards from './MixersItemCards.js';
import { Link } from 'react-router-dom';

function Mixers(){
    return(
        <div>
       <p>Mixers and Misc</p>
       <div className="search-bar-container">
       <input className="search-bar" placeholder="Search..." type="text"></input>
</div>
<center> <Link to = '/'><button> Return to Home </button> </Link></center>
<MixerItemCards/>
</div>
    )
}
export default Mixers;