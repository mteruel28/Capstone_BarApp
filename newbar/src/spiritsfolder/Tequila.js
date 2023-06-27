import React from 'react';
import TequilaItemCards from './TequilaItemCards';
import './Tequila.css';

function Tequila(){
    return(
        <div>
       <p>Tequila</p>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
       <TequilaItemCards/>
       </div>
    )
}
export default Tequila;