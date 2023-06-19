import React from 'react';
import { Link } from 'react-router-dom';
import mondavi from './img/mondavi.jpg';
import kendall from './img/kendalljackson.jpg';


function WineItemCards(){

    let Items = [
        {
            title: "Robert Mondavi Private Selection Cabernet Sauvignon",
            sub_header: " This is the house red wine and contains aroma of black cherry blackberry vanilla toasty oak aged incombination of american and french oak",
            link_text: "Mondavi",
            path: "",
            img_path: mondavi
        },
        {
            title: "Kendall Jackson Pinot Noir",
            sub_header: " The Kendall Jackson pinot noir consists of cherry strawberry and raspberry with aromas of earthy tones of spiced oak",
            link_text: "Kendall Jackson",
            path: "",
            img_path: kendall
        },
        {
            title: "Kirin",
            sub_header: " This is Kirin Beer ",
            link_text: "Kirin Beer",
            path: "",
            img_path: ""
        },
        {
            title: "Heineken",
            sub_header: " This is Heineken Beer ",
            link_text: "Heineken Beer",
            path: "",
            img_path: ""
        },
        {
            title: "Corona Extra ",
            sub_header: " This is Corona Extra Beer ",
            link_text: "Corona Extra Beer",
            path: "",
            img_path: ""
        },
        {
            title: "Twisted Tea",
            sub_header: " This is Twisted Tea Seltzer",
            link_text: "Twisted Tea Seltzer",
            path: "",
            img_path: ""
        }
   
   ] 

return(
    <div id="root">
       <div className="Container-4">

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
export default WineItemCards;