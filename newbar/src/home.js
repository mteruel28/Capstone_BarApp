
import React from 'react';
import Cards from './Cards';

function Home() {

    return (
        <div>
            <div className="container">
                <div class="item-1-header"> <h1>Miguel's Bar</h1></div>
            </div>
            <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..." type="text"></input>
            </div>
            <Cards/>
        </div>
    )
}

export default Home;