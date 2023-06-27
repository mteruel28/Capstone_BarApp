import React from 'react';
import { Link } from 'react-router-dom';

function GinItemCards(){

    let Items = [
        {
            title: "Patron Silver Tequila",
            sub_header: "Patron Silver Tequila",
            link_text: "",
            path: "",
            img_path: ""
        },
        {
            title: "1800 Reserva Silver Tequila",
            sub_header: "1800 Silver Tequila",
            link_text: "",
            path: "",
            img_path: ""
        },
        {
            title: "Sauza Hacienda Gold Tequila",
            sub_header: "Sauza Hacienda Gold Tequila",
            link_text: "",
            path: "",
            img_path: ""
        },
        {
            title: "Painted Donkey Reposado Tequila",
            sub_header: "Painted Donkey Reposado Tequila",
            link_text: "",
            path: "",
            img_path: ""
        }
   ] 

return(
    <div id="root">
       <div className="Container-10">

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
export default GinItemCards;