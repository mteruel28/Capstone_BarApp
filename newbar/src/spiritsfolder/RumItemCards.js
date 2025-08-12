import React from "react";
import Counter from "../components/counter";
import malibu from "../img/malibu.jpg";
import bacardi from "../img/bacardi.jpg";
import bacardigold from "../img/bacardigold.jpg";
import captainmorgan from "../img/captainmorgan.jpg";

function RumItemCards({ onAdded }) {
 const Rums = [
    {
      title: "Malibu Coconut Rum",
      sub_header: "Malibu Coconut Rum",
      img_path: malibu,
      price:14.99,
    },
    {
      title: "Bacardi Superior Light Rum",
      sub_header: "Bacardi Superior Light Rum",
      img_path: bacardi,
      price:13.99,
    },
    {
      title: "Bacardi Gold Rum",
      sub_header: "Bacardi Gold Rum",
      img_path: bacardigold,
      price:13.99,
    },
    {
      title: "Captain Morgan Spiced Rum",
      sub_header: "Captain Morgan Spiced Rum",
      img_path: captainmorgan,
      price:14.99,
    },
  ];

  return (
    <div id="root">
      <div className="Container-10">
        {Rums.map((Rum) => (
          <div className="Items" key={Rum.title}>
            <h3 className="Items__title">{Rum.title}</h3>
            <p className="Items_description">{Rum.sub_header}</p>
            <img src={Rum.img_path} alt="" width="100" height="100" />
            <div className="Items_price">${Rum.price.toFixed(2)}</div>
            <Counter product={Rum} onAdded={onAdded}></Counter>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RumItemCards;
