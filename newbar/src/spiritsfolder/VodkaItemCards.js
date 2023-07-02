import React from 'react';
import { Link } from 'react-router-dom';
import greygoose from '../img/greygoose.jpg';
import titos from '../img/titos.jpg';
import absolut from '../img/absolut.jpg';
import svedka from '../img/svedka.jpg';



function VodkaItemCards(){

    let Items = [
        {
            title: "Tito's Handmade Vodka",
            sub_header: " Titos",
            link_text: "",
            path: "",
            img_path: titos
        },
        {
            title: "Absolut Vodka",
            sub_header: " Absolut Vodka ",
            link_text: "",
            path: "",
            img_path: absolut
        },
        {
            title: "Grey Goose ",
            sub_header: " Grey Goose",
            link_text: "",
            path: "",
            img_path: greygoose
        },
        {
            title: "Svedka Vodka",
            sub_header: " Svedka Vodka",
            link_text: "",
            path: "",
            img_path: svedka
        }
   ] 

return(
    <div id="root">
       <div className="Container-8">

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
export default VodkaItemCards;