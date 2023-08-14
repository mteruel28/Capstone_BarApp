import React, { useState } from "react";
import Counter from '../components/counter';
import mondavi from "../img/mondavi.jpg";
import kendall from "../img/kendalljackson.jpg";
import josh from "../img/josh.jpg";
import ruffino from "../img/Ruffino.jpg";
import joshsb from "../img/JoshSB.jpg";
import chateau from "../img/ChateauChardonnay.jpg";
import Bartenura from "../img/Bartenura.jpg";

export const products = [
    {
        id: 0,
        title: "Robert Mondavi Private Selection Cabernet Sauvignon",
        sub_header: " Mondavi Private contains aroma of black cherry blackberry vanilla toasty oak aged incombination of american and french oak."
        ,img_path: mondavi,
        price:7.97,
        quantity:"",
      },
      {
        id: 1,
        title: "Kendall Jackson Pinot Noir",
        sub_header:
          " The Kendall Jackson pinot noir consists of cherry strawberry and raspberry with aromas of earthy tones of spiced oak.",       
        img_path: kendall,
        price:14.97,
        quantity:"",
      },
      {
        id: 2,
        title: "Josh Cellars Merlot",
        sub_header:
          "Josh Cellars Merlot merlot consists of balancing flavors of blueberry raspberry and milk chocolate with aromas of violets and vanilla.",
        img_path: josh,
        price:11.97,
        quantity:"",
      },
      {
        id: 3,
        title: "Ruffino Lunima Venezia Giulia Pinot Grigio",
        sub_header:
          "Ruffino Pinot Grigio consists of medium bodied aroma of mint and sage accompanied by lemon notes.",
        img_path: ruffino,
        price:9.97,
        quantity:"",
      },
      {
        id: 4,
        title: "Josh Cellars Sauvignon Blanc ",
        sub_header:
          " Josh Cellars Sauvignon Blanc consists of combination of lemon and kiwi with aromas of green apple",
        img_path: joshsb,
        price:10.97,
        quantity:"",
      },
      {
        id: 5,
        title: "Chateau Ste. Michelle Chardonnay",
        sub_header:
          "Chateau Ste. Michelle Chardonnay consists of combination of sweet apples and citrus with subtle aromas of spices and oak ",
        img_path: chateau,
        price:8.47,
        quantity:"",
      },
      {
        id: 6,
        title: "Bartenura Moscato",
        sub_header:
          "Bartenura Moscato consists of semi sweet with lingering pear tangerine nectar and melon.",
        img_path: Bartenura,
        price:12.99,
        quantity:"",
      },{
        id: 7,
      title: "Sapporo Premium",
      sub_header: " Sapporo Premium Beer is a refreshing lager with a crisp, refined flavor and a clean finish",
      img_path: Sapporo,
      price:2.99,
      quantity:"",
      },{
        id: 8,
        title: "Asahi Super Dry",
        sub_header: " Asahi Super Dry Beer is a rice lager from Japan. These beers are prepared with rice and malted barley ",
        img_path: Asahi,
        price:2.99,
        quantity:"",
      },
      {
        id: 9,
        title: "Kirin Ichiban",
        sub_header: " Kirin Ichiban is a Lager-type beer, which means it is fermented at low temperatures and offers a light and refreshing texture with a smooth and balanced flavor.",
        img_path: Kirin,
        price:2.99,
        quantity:"",
      },
      {
        id: 10,
        title: "Heineken",
        sub_header: " Heineken is a lager style of beer so it is heavier than other types. It has more of a stronger taste to it.",
        img_path: Heineken,
        price:2.99,
        quantity:"",
      },
      {
        id: 11,
        title: "Corona Extra ",
        sub_header: " Corona is a light and crisp pale Mexican lager that's wildly popular in the U.S.Its flavor profile is not overly complex, with sweet notes on the palate  ",
        img_path: CoronaExtra,
        price:2.99,
        quantity:"",
      },
      {
        id: 12,
        title: "Twisted Tea Peach",
        sub_header: " Twisted Tea Original is refreshingly smooth hard iced tea made with real brewed black tea and a twist of natural peach flavor.",
        img_path: TwistedTea,
        price:2.99,
        quantity:"",
      },{
        id: 13,
        title: "Jameson Irish Whiskey",
        sub_header: " Jameson Irish Whiskey is a blended Irish Whiskey. A light floral fragrance, peppered with spicy wood and sweet notes.",
        img_path: jameson,
        price:24.99,
        quantity:"",
      },
      {
        id: 14,
        title: "Crown Royal Whiskey",
        sub_header: " Crown Royal Whiskey is crispy and bright with notes of brittle toffee, vanilla, a dash of cinnamon, apple, and menthol. ",
        img_path: crownroyal,
        price:24.99,
        quantity:"",
      },
      {
        id: 15,
        title: "Makers Mark ",
        sub_header: " Makers Maker is a wheated bourbon. A spiced fragrance of caramel, roasted grains and oak, vanilla, apple, cinnamon, clove, and cocoa powder.  ",
        img_path: makers,
        price:23.99,
        quantity:"",
      },
      {
        id: 16,
        title: "Suntory Toki Whiskey",
        sub_header: " Suntory Toki Whiskey a silky Japanese whisky with a subtle sweet-and-spicy finish.  ",
        img_path: suntory,
        price:20.99,
        quantity:"",
      },
      {
        id: 17,
        title: "Johnnie Walker Black Label 12 Year Old Blended Scotch Whiskey",
        sub_header:
          " Johnnie Walker Black Label is rich, complex and incredibly well-balanced, full of dark fruits, sweet vanilla and signature smokiness. ",
        img_path: johnniewalker,
        price:30.99,
        quantity:"",
      },
      {
        id: 18,
        title: "Macallan Malt 12 Year Malt Double Cask",
        sub_header: "Macallan 12 Year Malt is a fully rounded single malt in perfect balance, with flavors of honey, citrus and ginger",
        img_path: macallan,
        price:74.99,
        quantity:"",
      },{
        id: 19,
        title: "Tito's Handmade Vodka",
        sub_header: " Titos",
        img_path: titos, 
        price:17.99,
    },
    {
      id: 20,
        title: "Absolut Vodka",
        sub_header: " Absolut Vodka ",
        img_path: absolut,
        price:17.99,
    },
    {
      id: 21,
        title: "Grey Goose ",
        sub_header: " Grey Goose",
        img_path: greygoose,
        price:22.99,
    },
    {
      id: 22,
        title: "Svedka Vodka",
        sub_header: " Svedka Vodka",
        img_path: svedka,
        price:10.99,
    },{
      id: 23,
      title: "Patron Silver Tequila",
      sub_header: "Patron Silver Tequila",
      img_path: patron,
      price:40.99,
    },
    {
      id: 24,
      title: "1800 Reserva Silver Tequila",
      sub_header: "1800 Silver Tequila",
      img_path: reservasilver,
      price:24.99,
    },
    {
      id: 25,
      title: "Sauza Hacienda Gold Tequila",
      sub_header: "Sauza Hacienda Gold Tequila",
      img_path: sauza,
      price:13.99,
    },
    {
      id: 26,
      title: "Painted Donkey Reposado Tequila",
      sub_header: "Painted Donkey Reposado Tequila",
      img_path: painteddonkey,
      price:24.99,
    }, {
      id: 27,
      title: "Malibu Coconut Rum",
      sub_header: "Malibu Coconut Rum",
      img_path: malibu,
      price:14.99,
    },
    {
      id: 28,
      title: "Bacardi Superior Light Rum",
      sub_header: "Bacardi Superior Light Rum",
      img_path: bacardi,
      price:13.99,
    },
    {
      id: 29,
      title: "Bacardi Gold Rum",
      sub_header: "Bacardi Gold Rum",
      img_path: bacardigold,
      price:13.99,
    },
    {
      id: 30,
      title: "Captain Morgan Spiced Rum",
      sub_header: "Captain Morgan Spiced Rum",
      img_path: captainmorgan,
      price:14.99,
    },  {
      id: 31,
      title: "Bombay Sapphire Gin",
      sub_header: "Bombay Sapphire Gin",
      img_path: bombay,
      price:19.99,
    },
    {
      id: 32,
      title: "Tanqueray London Dry Gin",
      sub_header: "1800 Silver Tequila",
      img_path: tanqueray,
      price:22.99,
    },
    {
      id: 33,
      title: "Hendricks Scottish Gin",
      sub_header: "Hendricks Scottish Gin",
      img_path: hendricks,
      price:22.99,
    },
    {
      id: 34,
      title: "Beefeater London Dry Gin",
      sub_header: "Beefeater London Dry Gin",
      img_path: beefeater,
      price:20.99,
    }
]

function Inventory() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCartItems(updatedCart);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.img_path} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.sub_header}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <Counter products={product} onAddToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}

export default Inventory;


