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
      img_path: bombay,
      price:19.99,
    },
    {
      title: "Tanqueray London Dry Gin",
      sub_header: "1800 Silver Tequila",
      img_path: tanqueray,
      price:22.99,
    },
    {
      title: "Hendricks Scottish Gin",
      sub_header: "Hendricks Scottish Gin",
      img_path: hendricks,
      price:22.99,
    },
    {
      title: "Beefeater London Dry Gin",
      sub_header: "Beefeater London Dry Gin",
      img_path: beefeater,
      price:20.99,
    },
  ];

  return (
    <div id="root">
      <div className="Container-10">
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
export default GinItemCards;
