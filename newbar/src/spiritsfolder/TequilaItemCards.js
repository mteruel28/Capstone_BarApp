import React from "react";
import Counter from "../components/counter";
import patron from "../img/patron.jpg";
import reservasilver from "../img/reservasilver.jpg";
import sauza from "../img/sauza.jpg";
import painteddonkey from "../img/painteddonkey.jpg";

function TequilaItemCards({ onAdded }) {
  const Tequilas = [
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
      <div className="Container-7">
        {Tequilas.map((tequila) => (
          <div className="Items" key={tequila.title}>
            <div className="Items__title">{tequila.title}</div>
            <p className="Items_description">{tequila.sub_header}</p>
            <img src={tequila.img_path} alt={tequila.title} width="100" height="100" />
            <div className="Items_price">${tequila.price.toFixed(2)}</div>
            {/* Counter handles adding to cart and setting lastAddedTitle */}
            <Counter product={tequila} onAdded={onAdded} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default TequilaItemCards;
