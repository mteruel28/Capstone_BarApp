import React from 'react';
import { Link } from 'react-router-dom';


function SpiritsItemCards(){

    let Items = [
        {
            title: "Whiskey",
            sub_header: "Shop our wide selection of Whiskey! ",
            //link_text: "Mondavi",
            path: "",
            img_path: ""
        },
        {
            title: "Vodka",
            sub_header: "Shop our wide selection of Vodka! ",
            //link_text: "Kendall Jackson",
            path: "",
            img_path: ""
        },
        {
            title: "Tequila",
            sub_header: "Shop our wide selection of Tequila",
           // link_text: "Kirin Beer",
            path: "",
            img_path: ""
        },
        {
            title: "Gin",
            sub_header: "Shop our wide selection of Gin",
           // link_text: "Heineken Beer",
            path: "",
            img_path: ""
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
                      <img src={Items.img_path} width='100' height='100' />
                  </div>
              ))
              }
              </div>
              </div>
)
            }
export default SpiritsItemCards;