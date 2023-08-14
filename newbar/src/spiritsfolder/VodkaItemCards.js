import React from 'react';
import { Link } from 'react-router-dom';
import Counter from "../components/counter";
import greygoose from '../img/greygoose.jpg';
import titos from '../img/titos.jpg';
import absolut from '../img/absolut.jpg';
import svedka from '../img/svedka.jpg';



function VodkaItemCards(){

    let Items = [
        {
            title: "Tito's Handmade Vodka",
            sub_header: " Titos",
            img_path: titos, 
            price:17.99,
        },
        {
            title: "Absolut Vodka",
            sub_header: " Absolut Vodka ",
            img_path: absolut,
            price:17.99,
        },
        {
            title: "Grey Goose ",
            sub_header: " Grey Goose",
            img_path: greygoose,
            price:22.99,
        },
        {
            title: "Svedka Vodka",
            sub_header: " Svedka Vodka",
            img_path: svedka,
            price:10.99,
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
                      <img src={Items.img_path} alt="" width='100' height='100' />
                      <div className="Items_price">{Items.price}</div>
                      <Counter product={Items}></Counter>
                  </div>
              ))
              }
              </div>
              </div>
)
            }
export default VodkaItemCards;