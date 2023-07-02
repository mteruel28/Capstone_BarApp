import React from 'react';
import { Link } from 'react-router-dom';
import malibu from '../img/malibu.jpg';
import bacardi from '../img/bacardi.jpg';
import bacardigold from '../img/bacardigold.jpg';
import captainmorgan from '../img/captainmorgan.jpg';

function RumItemCards(){

    let Items = [
        {
            title: "Malibu Coconut Rum",
            sub_header: "Malibu Coconut Rum",
            link_text: "",
            path: "",
            img_path: malibu
        },
        {
            title: "Bacardi Superior Light Rum",
            sub_header: "Bacardi Superior Light Rum",
            link_text: "",
            path: "",
            img_path: bacardi
        },
        {
            title: "Bacardi Gold Rum",
            sub_header: "Bacardi Gold Rum",
            link_text: "",
            path: "",
            img_path: bacardigold
        },
        {
            title: "Captain Morgan Spiced Rum",
            sub_header: "Captain Morgan Spiced Rum",
            link_text: "",
            path: "",
            img_path: captainmorgan
        }
   ] 

return(
    <div id="root">
       <div className="Container-11">

          {
              Items.map(Items => (
                  <div className="Items" key={Items.title} >
                      <h3 className= "Items__title">{Items.title}</h3>
                      <p className="Items_description">{Items.sub_header}</p>
                      <Link to={Items.path}>{Items.link_text}</Link> 
                      <img src={Items.img_path} alt="" width='100' height='100' />
                  </div>
              ))
              }
              </div>
              </div>
)
            }
export default RumItemCards;