import React from 'react';
import VodkaItemCards from './VodkaItemCards';
import './Vodka.css';

function Vodka(){
    return(
        <div>
       <p>Vodka</p>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
       <VodkaItemCards/>
       </div>
    )
}
export default Vodka;