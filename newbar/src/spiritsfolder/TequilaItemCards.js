import React from 'react';
import { Link } from 'react-router-dom';
//import greygoose from '/Users/Miguel/Capstone_BarApp/Capstone_BarApp/newbar/src/img/greygoose.jpg';




function TequilaItemCards(){

    let Items = [
        {
            title: "Tito's Handmade Vodka",
            sub_header: " Titos",
            link_text: "",
            path: "",
            img_path: ""
        },
        {
            title: "Absolut Vodka",
            sub_header: " Absolut Vodka ",
            link_text: "",
            path: "",
            img_path: ""
        },
        {
            title: "Grey Goose ",
            sub_header: " Grey Goose",
            link_text: "",
            path: "",
            img_path: ""
        },
        {
            title: "Svedka Vodka",
            sub_header: " Svedka Vodka",
            link_text: "",
            path: "",
            img_path: ""
        }
   ] 

return(
    <div id="root">
       <div className="Container-9">

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
export default TequilaItemCards;