import React from 'react';
import RumItemCards from './RumItemCards';
import './Rum.css';

function Rum(){
    return(
        <div>
       <p>Rums</p>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
       <RumItemCards/>
       </div>
    )
}
export default Rum;