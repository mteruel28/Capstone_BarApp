import React from 'react';
import './Mixers.css';
import MixersItemCards from './MixersItemCards';

function Mixers(){
    return(
        <div>
       <p>Here is Mixers and Misc</p>
       <div className="search-bar-container">
       <input className="search-bar" placeholder="Search..." type="text"></input>
</div>
<MixersItemCards/>
</div>
    )
}
export default Mixers;