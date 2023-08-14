import React from "react";
import { Link } from "react-router-dom";
import Counter from "../components/counter";
import patron from "../img/patron.jpg";
import reservasilver from "../img/reservasilver.jpg";
import sauza from "../img/sauza.jpg";
import painteddonkey from "../img/painteddonkey.jpg";

function TequilaItemCards() {
  let Items = [
    {
      title: "Patron Silver Tequila",
      sub_header: "Patron Silver Tequila",
      img_path: patron,
      price:40.99,
    },
    {
      title: "1800 Reserva Silver Tequila",
      sub_header: "1800 Silver Tequila",
      img_path: reservasilver,
      price:24.99,
    },
    {
      title: "Sauza Hacienda Gold Tequila",
      sub_header: "Sauza Hacienda Gold Tequila",
      img_path: sauza,
      price:13.99,
    },
    {
      title: "Painted Donkey Reposado Tequila",
      sub_header: "Painted Donkey Reposado Tequila",
      img_path: painteddonkey,
      price:24.99,
    },
  ];

  return (
    <div id="root">
      <div className="Container-9">
        {Items.map((Items) => (
          <div className="Items" key={Items.title}>
            <h3 className="Items__title">{Items.title}</h3>
            <p className="Items_description">{Items.sub_header}</p>
            <img src={Items.img_path} alt="" width="100" height="100" />
            <div className="Items_price">{Items.price}</div>
            <Counter product={Items}></Counter>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TequilaItemCards;
