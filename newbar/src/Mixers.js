import React from 'react';
import './Mixers.css';
import MixerItemCards from './MixersItemCards.js';

function Mixers(){
    return(
        <div>
       <p>Mixers and Misc</p>
       <div className="search-bar-container">
       <input className="search-bar" placeholder="Search..." type="text"></input>
</div>
<MixerItemCards/>
</div>
    )
}
export default Mixers;