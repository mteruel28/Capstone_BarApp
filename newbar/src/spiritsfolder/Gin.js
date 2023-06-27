import React from 'react';
import GinItemCards from './GinItemCards';
import './Gin.css';

function Gin(){
    return(
        <div>
       <p>Tequila</p>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
       <GinItemCards/>
       </div>
    )
}
export default Gin;