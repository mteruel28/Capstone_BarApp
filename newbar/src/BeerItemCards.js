import React from 'react';
import { Link } from 'react-router-dom';
import Heineken from './img/Heineken.jpg';
import Sapporo from './img/Sapporo.jpg';
import Asahi from './img/Asahi.jpg';
import Kirin from './img/Kirin.jpg';
import CoronaExtra from './img/CoronaExtra.jpg';

function BeerItemCards(){

    let Items = [
        {
            title: "Sapporo",
            sub_header: " This is Sapporo Beer.",
            link_text: "Sapporo Beer",
            path: "",
            img_path: Sapporo 
        },
        {
            title: "Asahi",
            sub_header: " This is Asahi Beer ",
            link_text: "Asahi Beer",
            path: "",
            img_path: Asahi
        },
        {
            title: "Kirin",
            sub_header: " This is Kirin Beer ",
            link_text: "Kirin Beer",
            path: "",
            img_path: Kirin
        },
        {
            title: "Heineken",
            sub_header: " This is Heineken Beer ",
            link_text: "Heineken Beer",
            path: "",
            img_path: Heineken
        },
        {
            title: "Corona Extra ",
            sub_header: " This is Corona Extra Beer ",
            link_text: "Corona Extra Beer",
            path: "",
            img_path: CoronaExtra
        }
   
   ] 

return(
    <div id="root">
       <div className="Container-3">

          {
              Items.map(Items => (
                  <div className="Items" key={Items.title} >
                      <h3 className= "Items__title">{Items.title}</h3>
                      <p className="Items_description">{Items.sub_header}</p>
                      <Link to={Items.path}>{Items.link_text}</Link> 
                      <img src={Items.img_path} width='100' height='100' />
                  </div>
              ))
              }
              </div>
              </div>
)
            }
export default BeerItemCards;