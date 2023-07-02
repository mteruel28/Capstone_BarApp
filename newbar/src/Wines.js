import React from 'react';
import './Wine.css';
import WineItemCards from './WineItemCards';
import { Link } from 'react-router-dom';

function Wines(){
    return(
        <div>
            <center><p>Wines</p></center>
      
            <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>

            <center> <Link to = '/'><button> Return to Home </button> </Link></center>
            <WineItemCards/>
        </div>
    )
}

export default Wines;
