import React from "react";
import { Link } from "react-router-dom";
import Counter from "../components/counter";
import bombay from "../img/bombay.jpg";
import tanqueray from "../img/tanqueray.jpg";
import hendricks from "../img//hendricks.jpg";
import beefeater from "../img/beefeater.jpg";

function GinItemCards() {
  let Items = [
    {
      title: "Bombay Sapphire Gin",
      sub_header: "Bombay Sapphire Gin",
      link_text: "",
      path: "",
      img_path: bombay,
    },
    {
      title: "Tanqueray London Dry Gin",
      sub_header: "1800 Silver Tequila",
      link_text: "",
      path: "",
      img_path: tanqueray,
    },
    {
      title: "Hendricks Scottish Gin",
      sub_header: "Hendricks Scottish Gin",
      link_text: "",
      path: "",
      img_path: hendricks,
    },
    {
      title: "Beefeater London Dry Gin",
      sub_header: "Beefeater London Dry Gin",
      link_text: "",
      path: "",
      img_path: beefeater,
    },
  ];

  return (
    <div id="root">
      <div className="Container-10">
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
export default GinItemCards;
