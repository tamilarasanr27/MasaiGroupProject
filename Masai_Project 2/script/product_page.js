import nav from "../navbar/script/navImport.js";
import { disp } from "../import/importSide.js";

document.getElementById("navbar").innerHTML = nav();
var cartData = JSON.parse(localStorage.getItem("masai-cart")) || [];
let muskan = document.querySelector("#pro");

let dropdown = document.querySelector("#mo");
document.getElementById("close").onclick = () => {
  dropdown.style.display = "none";
};
disp(false, false, cartData, muskan);

var allData = [
  {
    name: "Scully Western Dress Womens Full Length Lace Up Sleeveless F0_HC118",
    imageurl:
      "https://img.shop.com/Image/290000/292000/292019/products/1932799920.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/290000/292000/292019/products/1932799920__800x800__.jpg",
    img2: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
    img3: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
  },

  {
    name: "CONNECTED APPAREL Womens Burgundy Short Sleeve V Neck Above The Knee Party Sheath Dress Petites 12P",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1920488545.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "30.00",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1920488545__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_828411405.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_828411406.jpg?plain&size=2000x2000",
  },
  {
    name: "R&M RICHARDS Womens Burgundy Embellished Velvet Off Shoulder Maxi Formal Dress 8",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1919879594.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "32.00",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1919879594__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
  },

  {
    name: "R&M RICHARDS Womens Burgundy Embellished Velvet Off Shoulder Maxi Formal Dress 8",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1919879594.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1919879594__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
  },
  {
    name: "CITY STUDIO Womens Black Sleeveless Maxi Sheath Evening Dress Juniors Size: 1",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1932450912.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1932450912__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_837766811.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_837766812.jpg?plain&size=2000x2000",
  },
  {
    name: "MORGAN & CO Womens Pink Spaghetti Strap Maxi Sheath Evening Dress Juniors 1",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1917714885.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1917714885__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_825523337.jpg?plain&size=400x400",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_825523339.jpg?plain&size=2000x2000",
  },
  {
    name: "Scully Western Dress Womens Full Length Lace Up Sleeveless F0_HC118",
    imageurl:
      "https://img.shop.com/Image/290000/292000/292019/products/1932799920.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/290000/292000/292019/products/1932799920__800x800__.jpg",
    img2: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
    img3: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
  },
  {
    name: "CONNECTED APPAREL Womens Burgundy Short Sleeve V Neck Above The Knee Party Sheath Dress Petites 12P",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1920488545.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1920488545__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_828411405.jpg?plain&size=400x400",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_828411406.jpg?plain&size=2000x2000",
  },
  {
    name: "BETSY & ADAM Womens Purple Cape-sleeve 3/4 Sleeve Asymmetrical Neckline Maxi Formal Dress 4",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1920882876.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1920882876__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_828711230.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_828711231.jpg?plain&size=2000x2000",
  },
  {
    name: "R&M RICHARDS Womens Burgundy Embellished Velvet Off Shoulder Maxi Formal Dress 8",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1919879594.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1919879594__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
  },
  {
    name: "CITY STUDIO Womens Black Sleeveless Maxi Sheath Evening Dress Juniors Size: 1",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1932450912.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1932450912__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_837766811.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_837766812.jpg?plain&size=2000x2000",
  },
  {
    name: "MORGAN & CO Womens Pink Spaghetti Strap Maxi Sheath Evening Dress Juniors 1",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1917714885.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1917714885__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_825523337.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_825523339.jpg?plain&size=2000x2000",
  },
  {
    name: "Scully Western Dress Womens Full Length Lace Up Sleeveless F0_HC118",
    imageurl:
      "https://img.shop.com/Image/290000/292000/292019/products/1932799920.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/290000/292000/292019/products/1932799920__800x800__.jpg",
    img2: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
    img3: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
  },
  {
    name: "CONNECTED APPAREL Womens Burgundy Short Sleeve V Neck Above The Knee Party Sheath Dress Petites 12P",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1920488545.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1920488545__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_828411405.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_828411406.jpg?plain&size=2000x2000",
  },
  {
    name: "BETSY & ADAM Womens Purple Cape-sleeve 3/4 Sleeve Asymmetrical Neckline Maxi Formal Dress 4",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1920882876.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1920882876__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_828711230.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_828711231.jpg?plain&size=2000x2000",
  },
  {
    name: "R&M RICHARDS Womens Burgundy Embellished Velvet Off Shoulder Maxi Formal Dress 8",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1919879594.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.00",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1919879594__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
  },
  {
    name: "CITY STUDIO Womens Black Sleeveless Maxi Sheath Evening Dress Juniors Size: 1",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1932450912.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "45",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1932450912__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_837766811.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_837766812.jpg?plain&size=2000x2000",
  },
  {
    name: "MORGAN & CO Womens Pink Spaghetti Strap Maxi Sheath Evening Dress Juniors 1",
    imageurl:
      "https://img.shop.com/Image/270000/278100/278132/products/1917714885.jpg?plain&size=400x400",
    seller: "Sold by Fifth Sun",
    price: "17.98",
    offprice: "off :$29.99",
    cashback: " cashback :+ $1.08 / 6%",
    type: "tshirt",
    img1: "https://img.shop.com/Image/270000/278100/278132/products/1917714885__800x800__.jpg",
    img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_825523337.jpg?plain&size=2000x2000",
    img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_825523339.jpg?plain&size=2000x2000",
  },
];

//append
function display_Data(allData) {
  //console.log(allData)
  //document.querySelector("#container").innerHTML = "";

  var container = document.getElementById("bivek");
  container.innerHTML = "";
  allData.forEach(function (el, index) {
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.imageurl;
    let name = document.createElement("h3");
    name.innerText = el.name;
    name.style.marginLeft = "20px";
    name.style.marginRight = "20px";
    let info = document.createElement("p");
    info.innerText = el.seller;
    let price = document.createElement("p");

    price.innerText = el.price;
    let category = document.createElement("h3");
    category.innerText = el.offprice;
    let gender = document.createElement("p");
    gender.innerText = el.cashback;
    let size = document.createElement("p");
    size.innerText = el.type;

    //btn
    var btndiv = document.createElement("div");
    btndiv.setAttribute("id", "product");

    var btn3 = document.createElement("button");
    btn3.setAttribute("id", "btn3");
    btn3.innerText = "Free Shipping";
    btn3.style.color = "#007E97";
    btn3.style.fontSize = "22px";

    let btn1 = document.createElement("button");
    btn1.setAttribute("id", "btn1");
    btn1.innerText = "See Details";
    btn1.style.color = "rgb(134, 134, 134)";
    btn1.addEventListener("click", function () {
      
      detail(el);
    });
    // btn1.style.color="red"
    // btn1.style.height="50px"

    let btn2 = document.createElement("button");
    btn2.setAttribute("id", "btn2");
    btn2.style.color = "rgb(134, 134, 134) ";
    btn2.innerText = "Add to cart";
    btn2.addEventListener("click", function () {
      addto(el);
    });


    //   btn3.addEventListener("click" ,function(){
    //     detal()
    //   })

    btndiv.append(btn1, btn2);

    box.append(image, name, info, price, category, gender, size, btn3, btndiv);
    container.append(box);
  });
}
display_Data(allData);
//add data in ls after clicking add to cart


function addto(el) {
  cartData.push(el);
  console.log(el)
  localStorage.setItem("masai-cart", JSON.stringify(cartData));
  setTimeout(() => {
    dropdown.style.display = "block";
  }, 3000);
}

//detail.html
var arr = JSON.parse(localStorage.getItem("masai-cart"));

function detail(el) {
  arr.push(el);
  console.log(arr);
  localStorage.setItem("arr", JSON.stringify(arr));
  window.location.href = "detail.html";
  // alert("Product added successfully");
}

// SORT BY PRICE*/
document
  .querySelector("#sort_price")
  .addEventListener("change", function_sort_price);

function function_sort_price() {
  var selected = document.querySelector("#sort_price").value;
  console.log(selected);

  if (selected == "HTL") {
    allData.sort(function (a, b) {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    });
    display_Data(allData);
  }

  if (selected == "LTH") {
    allData.sort(function (a, b) {
      return a.price - b.price;
    });
    display_Data(allData);
  }
}

// condition for the dropdown menu


document.getElementById('btnn').onclick = () =>{
  window.location.href = './projectPractise/constructweekpro/cart.html'
}