var show=JSON.parse(localStorage.getItem("arr"));
console.log(show)


// const url=`https://fakestoreapi.com/products/category/jewelery`
// console.log(url)
// async function getData() {
//   try {
//     let res = await fetch(url);

//     let users = await res.json();
//      append(users);
    
//     console.log(users);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getData();

var users=[
    {
        name: "BARBOUR Mens Green Plaid Button Down Casual Shirt",
        imageurl: "https://img.shop.com/Image/270000/278100/278132/products/1925889439.jpg?size=400x400",
        seller: "Sold by BOBBI + BRICKA",
        price: "$40.98",
        cashback: "off:+ $1.23 / 3%",
        type: "shirts"
        //
        
    },

    {
        name: "Hanes Men's Boxer Brief Underwear Sz M 3 Pack Stretch Cotton Blue",
        imageurl: "https://img.shop.com/Image/280000/285800/285857/products/1928297230.jpg?size=400x400",
        seller: "Sold by Phoenix Trading Co",
        price: "$20.99",
        offprice: "$59.99",
        cashback: "off :+ $1.26 / 6%",
        type: "uwear"
    },
    {
        name: "The Mens Store Mens White Classic Fit Button Down Casual Shirt",
        imageurl: "https://img.shop.com/Image/270000/278100/278132/products/1921266290.jpg?size=400x400",
        seller: "Sold by BOBBI + BRICKA",
        price: "$16.98",
        offprice: "off:$98.00",
        cashback: "+ $0.51 / 3%",
        type: "shirts"
    },
    {
        name: "Boss x Nba Men's Relaxed-Fit Shorts",
        imageurl: "https://img.shop.com/Image/240000/243400/243406/products/1927496055.jpg?size=400x400",
        seller: "Sold by Macy's",
        price: "158.00",
        offprice: "",
        cashback: "",
        type: "shorts"
    },
    
  
]

var detail=[
    
        'SKU :P981511',
        'type: Love, Fire_Womens_Juniors_Sleeveless_Fitted_Party_Dress',
        'Manufacturer : Love_Fire',
        'Size :Size' ,
        'Origin : US',
        'ManufacturerColor :Suggested',
        'Price : $39',
        'Condition :Style',
        'Type : PartyDress',
        'Collection : Love, Fire',
        'Silhouette : A-Line',
        'SleeveLength : AdjustableStrap',
        'Closure : Pullover',
        'DressLength : Above-Knee', 
        'TotalLength : Inches',
        'BusAcross : Inches',
        'WaistAcross : Inches',
        'HipsAcross : Inches',
        'Material : 100% Polyester',
        'FabricType : Lace',
        'Specialty : Lined',
        
]


//Small image

var smallimg=document.getElementById("smallimg")
var largeimg=document.getElementById("lagreimg")
var small=document.querySelectorAll(".small")

console.log(largeimg)
smallimg.innerHTML="";
function display_image(show) {
 
show.forEach(function (el, index) {
    //mig image
    var img=document.createElement("img");
    img.src=el.imageurl;
    largeimg.append(img)
    //end
    
//show three images in side div
    var img1=document.createElement("img");
    img1.className="small";
    img1.src=el.img1
    img1.addEventListener("click",function(){
         deta(el.img1)
    })
    var img2=document.createElement("img");
    img2.className="small";

    img2.src=el.img2
    img2.addEventListener("click",function(){
        deta(el.img2)
   })
    
   var img3=document.createElement("img");
   img3.className="small";

    img3.src=el.img3
    img3.addEventListener("click",function(){
        deta(el.img3)
   })
    
    smallimg.append(img1,img2,img3)
    
})

}
display_image(show)


//small  to large

function deta(el){
var poo=document.createElement("img");
poo.src=el
poo.style.width="100%"
largeimg.innerHTML="";
largeimg.append(poo)
console.log(largeimg)
}



//third part

function append(users) {
    let container = document.getElementById("detail_two");
    users.forEach(function (el) {
        let div = document.createElement("div");
    // var div=document.createElement("div")
      let img = document.createElement("img");
      img.src = el.imageurl;
  
      let h2 = document.createElement("h3");
      h2.innerText = el.name;
  
      let p = document.createElement("p");
      p.innerText = el.seller;

      let p1 = document.createElement("p");
      p1.innerText = el.price;

      var btn1=document.createElement("button");
      btn1.setAttribute("id","btn1")
      btn1.innerText="Free Shipping"
      btn1.style.color="green"
      btn1.addEventListener("click" ,function(){
        detal(detail)
      })
      
      
      div.append(img, h2, p,p1,btn1);
  
      container.append(div);
    });
  }
append(users);

//detail
var app=document.getElementById("detail_th");
function detal(detail){
    app.innerHTML=" ";

   
    
for(var i=0;i<detail.length;i++){
        var p=document.createElement("p");
        p.innerText=detail[i]
        
        app.append(p)
    }
    }

// button js
document.querySelector(".btn>button").value;
function back_to_top(){
    window.scroll(0,0)
}

  







    