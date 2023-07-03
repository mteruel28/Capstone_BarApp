import React, { Component } from "react";
import { Link } from "react-router-dom";
import Counter from "./components/counter";

import mondavi from "./img/mondavi.jpg";
import kendall from "./img/kendalljackson.jpg";
import josh from "./img/josh.jpg";
import ruffino from "./img/Ruffino.jpg";
import joshsb from "./img/JoshSB.jpg";
import chateau from "./img/ChateauChardonnay.jpg";
import Bartenura from "./img/Bartenura.jpg";

function WineItemCards() {
  let Items = [
    {
      id: 1,
      title: "Robert Mondavi Private Selection Cabernet Sauvignon",
      sub_header: " Mondavi Private contains aroma of black cherry blackberry vanilla toasty oak aged incombination of american and french oak.",
      //link_text: "Mondavi",
      path: "",
      img_path: mondavi,
    },
    {
      id: 2,
      title: "Kendall Jackson Pinot Noir",
      sub_header:
        " The Kendall Jackson pinot noir consists of cherry strawberry and raspberry with aromas of earthy tones of spiced oak.",
      //link_text: "Kendall Jackson",
      path: "",
      img_path: kendall,
    },
    {
      id: 3,
      title: "Josh Cellars Merlot",
      sub_header:
        "Josh Cellars Merlot merlot consists of balancing flavors of blueberry raspberry and milk chocolate with aromas of violets and vanilla.",
      // link_text: "Kirin Beer",
      path: "",
      img_path: josh,
    },
    {
      id: 4,
      title: "Ruffino Lunima Venezia Giulia Pinot Grigio",
      sub_header:
        "Ruffino Pinot Grigio consists of medium bodied aroma of mint and sage accompanied by lemon notes.",
      // link_text: "Heineken Beer",
      path: "",
      img_path: ruffino,
    },
    {
      id: 5,
      title: "Josh Cellars Sauvignon Blanc ",
      sub_header:
        " Josh Cellars Sauvignon Blanc consists of combination of lemon and kiwi with aromas of green apple",
      //link_text: "Corona Extra Beer",
      path: "",
      img_path: joshsb,
    },
    {
      id: 6,
      title: "Chateau Ste. Michelle Chardonnay",
      sub_header:
        "Chateau Ste. Michelle Chardonnay consists of combination of sweet apples and citrus with subtle aromas of spices and oak ",
      // link_text: "Twisted Tea Seltzer",
      path: "",
      img_path: chateau,
    },
    {
      id: 7,
      title: "Bartenura Moscato",
      sub_header:
        "Bartenura Moscato consists of semi sweet with lingering pear tangerine nectar and melon.",
      // link_text: "Twisted Tea Seltzer",
      path: "",
      img_path: Bartenura,
    },
  ];

  return (
    <div id="root">
      <div className="Container-4">
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
export default WineItemCards;
