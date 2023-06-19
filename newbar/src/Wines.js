import React from 'react';
import './Wine.css';
import WineItemCards from './WineItemCards';

function Wines(){
    return(
        <div>
       <p>Wines</p>
       <div className="search-bar-container">
            <input className="search-bar" placeholder="Search..." type="text"></input>
   </div>
<WineItemCards/>
</div>
    )
}
export default Wines;