const products = [
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

const categories = [...new Set(product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var{title,sub_header,img_path,price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${img_path}></img>
                </div>
                <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`+
                "<button onclick ='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
                </div>`

        )

})
