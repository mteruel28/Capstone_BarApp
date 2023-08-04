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
      link_text: "",
      path: "",
      img_path: patron,
    },
    {
      title: "1800 Reserva Silver Tequila",
      sub_header: "1800 Silver Tequila",
      link_text: "",
      path: "",
      img_path: reservasilver,
    },
    {
      title: "Sauza Hacienda Gold Tequila",
      sub_header: "Sauza Hacienda Gold Tequila",
      link_text: "",
      path: "",
      img_path: sauza,
    },
    {
      title: "Painted Donkey Reposado Tequila",
      sub_header: "Painted Donkey Reposado Tequila",
      link_text: "",
      path: "",
      img_path: painteddonkey,
    },
  ];

  return (
    <div id="root">
      <div className="Container-9">
        {Items.map((Items) => (
          <div className="Items" key={Items.title}>
            <h3 className="Items__title">{Items.title}</h3>
            <p className="Items_description">{Items.sub_header}</p>
            <Link to={Items.path}>{Items.link_text}</Link>
            <img src={Items.img_path} alt="" width="100" height="100" />
            <Counter></Counter>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TequilaItemCards;
