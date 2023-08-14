import React from "react";
import Counter from "../components/counter";
import suntory from "../img/suntory.jpg";
import jameson from "../img/Jameson.jpg";
import crownroyal from "../img/CrownRoyal.jpg";
import johnniewalker from "../img/johnniewalker.jpg";
import makers from "../img/makers.jpg";
import macallan from "../img/macallan.jpg";

function WhiskeyItemCards() {
  let Whiskeys = [
    {
      title: "Jameson Irish Whiskey",
      sub_header: " Jameson Irish Whiskey is a blended Irish Whiskey. A light floral fragrance, peppered with spicy wood and sweet notes.",
      img_path: jameson,
      price:24.99,
    },
    {
      title: "Crown Royal Whiskey",
      sub_header: " Crown Royal Whiskey is crispy and bright with notes of brittle toffee, vanilla, a dash of cinnamon, apple, and menthol. ",
      img_path: crownroyal,
      price:24.99,
    },
    {
      title: "Makers Mark ",
      sub_header: " Makers Maker is a wheated bourbon. A spiced fragrance of caramel, roasted grains and oak, vanilla, apple, cinnamon, clove, and cocoa powder.  ",
      img_path: makers,
      price:23.99,
    },
    {
      title: "Suntory Toki Whiskey",
      sub_header: " Suntory Toki Whiskey a silky Japanese whisky with a subtle sweet-and-spicy finish.  ",
      img_path: suntory,
      price:20.99,
    },
    {
      title: "Johnnie Walker Black Label 12 Year Old Blended Scotch Whiskey",
      sub_header:
        " Johnnie Walker Black Label is rich, complex and incredibly well-balanced, full of dark fruits, sweet vanilla and signature smokiness. ",
      img_path: johnniewalker,
      price:30.99,
    },
    {
      title: "Macallan Malt 12 Year Malt Double Cask",
      sub_header: "Macallan 12 Year Malt is a fully rounded single malt in perfect balance, with flavors of honey, citrus and ginger",
      img_path: macallan,
      price:74.99,
    },
  ];

  return (
    <div id="root">
      <div className="Container-7">
      {Whiskeys.map((Whiskeys) => (
          <div className="Whiskeys" key={Whiskeys.id}>
            <div className="Whiskeys__title">{Whiskeys.title}</div>
            <p className="Whiskeys_description">{Whiskeys.sub_header}</p>
            <img src={Whiskeys.img_path} alt="" width="100" height="100" />
            <div className="Whiskeys_price">{Whiskeys.price}</div>
            <Counter product={Whiskeys}></Counter>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WhiskeyItemCards;
