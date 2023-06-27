import React from 'react';
import { Link } from 'react-router-dom';
import garnish from './img/garnish.jpg';
import soda from './img/soda.jpg';
import clubsoda from './img/clubsoda.jpg';
import mixers2 from './img/mixers2.jpg';



function MixerItemCards(){

    let Items = [
        {
            title: "Specialty Ingredients & Mixers",
            sub_header: "Shop our wide selection of Specialty Ingredients & Mixers!",
            //link_text: "Mondavi",
            path: "",
            img_path: mixers2
        },
        {
            title: "Tonic Water & Club Soda",
            sub_header: "Shop our wide selection of Tonic Water & Club Soda! ",
            //link_text: "Kendall Jackson",
            path: "",
            img_path: clubsoda
        },
        {
            title: "Juices & Sodas",
            sub_header: "Shop our wide selection of Syrups!",
           // link_text: "Kirin Beer",
            path: "",
            img_path: soda
        },
        {
            title: "Garnishes",
            sub_header: "Shop our wide selection of Garnishes!",
           // link_text: "Heineken Beer",
            path: "",
            img_path: garnish
        }
   ] 

return(
    <div id="root">
       <div className="Container-6">

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
export default MixerItemCards;