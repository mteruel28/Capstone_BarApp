import React from 'react';
import { Link } from 'react-router-dom';
import jameson from './img/Jameson.jpg';
import greygoose from './img/greygoose.jpg';
import patron from './img/patron.jpg';
import hendricks from './img/hendricks.jpg';

function SpiritsItemCards(){

    let Items = [
        {
            title: "Whiskeys",
            sub_header: "Shop our wide selection of Whiskey!",
            link_text: "View Whiskeys",
            path: "/Whiskeys",
            img_path: jameson
        },
        {
            title: "Vodka",
            sub_header: "Shop our wide selection of Vodka! ",
            link_text: "View Vodkas",
            path: "/Vodkas",
            img_path: greygoose
        },
        {
            title: "Tequila",
            sub_header: "Shop our wide selection of Tequila!",
            link_text: "View Tequilas",
            path: "Tequilas",
            img_path: patron
        },
        {
            title: "Gin",
            sub_header: "Shop our wide selection of Gin!",
            link_text: "View Gins",
            path: "/Gins",
            img_path: hendricks
        }
   ] 

return(
    <div id="root">
       <div className="Container-5">

          {
              Items.map(Items => (
                  <div className="Items" key={Items.title} >
                      <h3 className= "Items__title">{Items.title}</h3>
                      <p className="Items_description">{Items.sub_header}</p>
                      <Link to={Items.path}>{Items.link_text}</Link> 
                      <img src={Items.img_path}  alt="" width='100' height='100'/>
                  </div>
              ))
              }
              </div>
              </div>
)
            }
export default SpiritsItemCards;