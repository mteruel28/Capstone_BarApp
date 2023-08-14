import React from "react";
import Counter from "../src/components/counter";
import Heineken from "./img/Heineken.jpg";
import Sapporo from "./img/Sapporo.jpg";
import Asahi from "./img/Asahi.jpg";
import Kirin from "./img/Kirin.jpg";
import CoronaExtra from "./img/CoronaExtra.jpg";
import TwistedTea from "./img/TwistedTea.jpg";

function BeerItemCards() {
  let Beers = [
    {
      title: "Sapporo Premium",
      sub_header: " Sapporo Premium Beer is a refreshing lager with a crisp, refined flavor and a clean finish",
      img_path: Sapporo,
      price:2.99,
    },
    {
      title: "Asahi Super Dry",
      sub_header: " Asahi Super Dry Beer is a rice lager from Japan. These beers are prepared with rice and malted barley ",
      img_path: Asahi,
      price:2.99,
    },
    {
      title: "Kirin Ichiban",
      sub_header: " Kirin Ichiban is a Lager-type beer, which means it is fermented at low temperatures and offers a light and refreshing texture with a smooth and balanced flavor.",
      img_path: Kirin,
      price:2.99,
    },
    {
      title: "Heineken",
      sub_header: " Heineken is a lager style of beer so it is heavier than other types. It has more of a stronger taste to it.",
      img_path: Heineken,
      price:2.99,
    },
    {
      title: "Corona Extra ",
      sub_header: " Corona is a light and crisp pale Mexican lager that's wildly popular in the U.S.Its flavor profile is not overly complex, with sweet notes on the palate  ",
      img_path: CoronaExtra,
      price:2.99,
    },
    {
      title: "Twisted Tea Peach",
      sub_header: " Twisted Tea Original is refreshingly smooth hard iced tea made with real brewed black tea and a twist of natural peach flavor.",
      img_path: TwistedTea,
      price:2.99,
    },
  ];

  return (
    <div id="root">
      <div className="Container-3">
      {Beers.map((Beers) => (
          <div className="Beers" key={Beers.id}>
            <div className="Beers__title">{Beers.title}</div>
            <p className="Beers_description">{Beers.sub_header}</p>
            <img src={Beers.img_path} alt="" width="100" height="100" />
            <div className="Beers_price">{Beers.price}</div>
            <Counter product={Beers}></Counter>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BeerItemCards;
