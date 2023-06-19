import React from 'react';
import BeerItemCards from './BeerItemCards';
import './Beer.css';

function BeersSelters(){
    return(
        <div>
       <p>Beers and Seltzers</p>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
       <BeerItemCards/>
       </div>
    )
}
export default BeersSelters;