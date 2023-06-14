import React from 'react';
import ItemCards from './ItemCards';
import './Beer.css';

function BeersSelters(){
    return(
        <div>
       <p>Beers and Seltzers</p>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
       <ItemCards/>
       </div>
    )
}
export default BeersSelters;