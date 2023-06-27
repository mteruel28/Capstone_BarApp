import React from 'react';
import WhiskeyItemCards from './WhiskeyItemCards';
import './Whiskey.css';

function Whiskey(){
    return(
        <div>
       <p>Whiskeys</p>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
       <WhiskeyItemCards/>
       </div>
    )
}
export default Whiskey;