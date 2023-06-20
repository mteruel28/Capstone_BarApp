import React from 'react';
import './Spirits.css';
import SpiritsItemCards from './SpiritsItemCards.js';

function Spirits(){
    return(
        <div>
       <p>Spirits</p>
       <div className="search-bar-container">
       <input className="search-bar" placeholder="Search..." type="text"></input>
</div>
<SpiritsItemCards/>
</div>
    )
}
export default Spirits;