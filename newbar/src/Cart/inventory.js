import React, { useState } from "react";
import Counter ,{addToCart} from '../components/counter';
import mondavi from "../img/mondavi.jpg";
import kendall from "../img/kendalljackson.jpg";
import josh from "../img/josh.jpg";
import ruffino from "../img/Ruffino.jpg";
import joshsb from "../img/JoshSB.jpg";
import chateau from "../img/ChateauChardonnay.jpg";
import Bartenura from "../img/Bartenura.jpg";

export const product = [
    {
        id: 0,
        title: "Robert Mondavi Private Selection Cabernet Sauvignon",
        sub_header: " Mondavi Private contains aroma of black cherry blackberry vanilla toasty oak aged incombination of american and french oak."
        ,img_path: mondavi,
        price:7.97,
      },
      {
        id: 1,
        title: "Kendall Jackson Pinot Noir",
        sub_header:
          " The Kendall Jackson pinot noir consists of cherry strawberry and raspberry with aromas of earthy tones of spiced oak.",       
        img_path: kendall,
        price:14.97,
      },
      {
        id: 2,
        title: "Josh Cellars Merlot",
        sub_header:
          "Josh Cellars Merlot merlot consists of balancing flavors of blueberry raspberry and milk chocolate with aromas of violets and vanilla.",
        img_path: josh,
        price:11.97,
      },
      {
        id: 3,
        title: "Ruffino Lunima Venezia Giulia Pinot Grigio",
        sub_header:
          "Ruffino Pinot Grigio consists of medium bodied aroma of mint and sage accompanied by lemon notes.",
        img_path: ruffino,
        price:9.97,
      },
      {
        id: 4,
        title: "Josh Cellars Sauvignon Blanc ",
        sub_header:
          " Josh Cellars Sauvignon Blanc consists of combination of lemon and kiwi with aromas of green apple",
        img_path: joshsb,
        price:10.97,
      },
      {
        id: 5,
        title: "Chateau Ste. Michelle Chardonnay",
        sub_header:
          "Chateau Ste. Michelle Chardonnay consists of combination of sweet apples and citrus with subtle aromas of spices and oak ",
        img_path: chateau,
        price:8.47,
      },
      {
        id: 6,
        title: "Bartenura Moscato",
        sub_header:
          "Bartenura Moscato consists of semi sweet with lingering pear tangerine nectar and melon.",
        img_path: Bartenura,
        price:12.99,
      },

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
      <Inventory newitem= {addToCart}/>

      {product.map(product => (
        <div key={product.id}>
          <img src={product.img_path} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.sub_header}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <Counter product={product} onAddToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}

export default Inventory;


