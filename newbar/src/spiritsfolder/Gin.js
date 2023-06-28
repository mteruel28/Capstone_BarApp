import React from 'react';
import GinItemCards from './GinItemCards';
import './Gin.css';
import { Link } from 'react-router-dom';

function Gin(){
    return(
        <div>
      <center> <p>Gins</p> </center>
       <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>


            <center> <Link to = '/Spirits'>
<button> Return to Previous Page
    </button> </Link></center>

       <GinItemCards/>
       </div>
    )
}
export default Gin;