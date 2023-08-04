import React from "react";
import { Link } from "react-router-dom";
import Counter from "../components/counter";
import suntory from "../img/suntory.jpg";
import jameson from "../img/Jameson.jpg";
import crownroyal from "../img/CrownRoyal.jpg";
import johnniewalker from "../img/johnniewalker.jpg";
import makers from "../img/makers.jpg";
import macallan from "../img/macallan.jpg";

function WhiskeyItemCards() {
  let Items = [
    {
      title: "Jameson Irish Whiskey",
      sub_header: " Jameson",
      link_text: "",
      path: "",
      img_path: jameson,
    },
    {
      title: "Crown Royal Whiskey",
      sub_header: " Crown Royal Whiskey ",
      link_text: "",
      path: "",
      img_path: crownroyal,
    },
    {
      title: "Makers Mark ",
      sub_header: " Makers Maker ",
      link_text: "",
      path: "",
      img_path: makers,
    },
    {
      title: "Suntory Toki Whiskey",
      sub_header: " Suntory Toki Whiskey ",
      link_text: "",
      path: "",
      img_path: suntory,
    },
    {
      title: "Johnnie Walker Black Label 12 Year Old Blended Scotch Whiskey",
      sub_header:
        " Johnnie Walker Black Label 12 Year Old Blended Scotch Whiskey ",
      link_text: "",
      path: "",
      img_path: johnniewalker,
    },
    {
      title: "Macallan Malt 12 Year Malt",
      sub_header: "Macallan Malt 12 Year Malt",
      link_text: "",
      path: "",
      img_path: macallan,
    },
  ];

  return (
    <div id="root">
      <div className="Container-7">
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
export default WhiskeyItemCards;
