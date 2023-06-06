import React from 'react';
import { Link } from 'react-router-dom';

function ItemCards(){
    let ItemCards = [
        {
            title: "Description",
            sub_header: " This is a Sample ",
            link_text: "Hello",
            //path: "",
            //img_path: 
        },
}

return(
    <div id="root">
       <div className="container-2">

          {
              cards.map(card => (
                  <div className="card">
                      <h3 className= "card__title">{card.title}</h3>
                      <p className="card_description">{card.sub_header}</p>
                      <Link to={card.path}>{card.link_text}</Link> 
                      <img src={card.img_path} width='100' height='100' />
                  </div>
              ))
          }

export default ItemCards;