import React from 'react';
import BeerItemCards from './BeerItemCards';
import './Beer.css';
import { Link } from 'react-router-dom';

function BeersSelters(){
    return(
        <div>
      <center><p>Beers and Seltzers</p></center>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
       
 <center> <Link to = '/'><button> Return to Home  </button> </Link></center>

    <BeerItemCards/>
       </div>
    )
}
export default BeersSelters;