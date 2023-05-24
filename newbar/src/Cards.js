import React from 'react';
import { Link } from 'react-router-dom';
import doge from './img/dogecrazy.jpg';

function Cards(){

    let cards = [
        {
            title: "Rewards",
            sub_header: "This page contains sign information for our rewards program",
            link_text: "View Rewards",
            path: "/rewards",
            img_path: doge
        },
        {
            title: "Rewards",
            sub_header: "This page contains sign information for our rewards program",
            link_text: "View Rewards",
            path: "/rewards"
        },
        {
            title: "Rewards",
            sub_header: "This page contains sign information for our rewards program",
            link_text: "View Rewards",
            path: "/rewards"
            
        },
        {

        }
    ]


    return(
      <div id="root">
         <div className="container-2">

            {
                cards.map(card => (
                    <div className="card">
                        <h3 className= "card__title">{card.title}</h3>
                        <p className="card_description">{card.sub_header}</p>
                        <Link to={card.path}>{card.link_text}</Link>
                        <img src={card.img_path} width='50' height='50' />
                    </div>
                ))
            }

            {/* <div className="card">
                <h3 className= "card__title">Rewards</h3>
                <p className="card_description">This page contains sign information for our rewards program</p>
                <Link to='/rewards'>View Rewards</Link>
            </div>
           
            <div className="card"> 
                <h3 className= "card__title">Shopping Cart</h3>
                <p className="card_description">This pages features your checkout information</p>
                <button className="card__btn"> View Shopping Cart</button>
            </div>

            <div className="card">
                <h3 className= "card__title"> Wines</h3>
                <p className="card_description">This page contains all information about Wines</p>
                <button className="card__btn"> View Wines</button>
            </div>

            <div className="card"> 
                <h3 className= "card__title">Spirits</h3>
                <p className="card_description" >This page contains all information about Spirits</p>
                <button className="card__btn"> View Spirits</button>
            </div>

            <div className="card"> 
                <h3 className= "card__title">Beers & Seltzers</h3>
                <p className="card_description">This page contains all information about Beers & Seltzers</p>
                <button className="card__btn"> View Beers & Seltzers</button>
            </div>

            <div className="card"> 
                <h3 className= "card__title">Mixers & Misc</h3>
                <p className="card_description">This page contains information about Mixers & all other Misc products</p>
                <button className="card__btn"> View Rewards</button>
            </div> */}
        </div>
      </div>
    )
}

export default Cards;