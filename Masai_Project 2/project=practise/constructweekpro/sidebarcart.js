var cartData = JSON.parse(localStorage.getItem("masai-cart")) || [];
let muskan = document.querySelector("#pro");
;

function display(data){
  muskan.innerHTML= "";

  var sum = 0;

data.forEach(function(elem) {
  var card = document.createElement("div")
  card.setAttribute("id","card")

  var img = document.createElement("img")
  img.src=elem.image_url
  img.setAttribute("id","image")
  

  var name = document.createElement("h3")
  name.textContent=elem.name
  name.setAttribute("id","name")

  var price = document.createElement("p")
  price.textContent=elem.price
  price.setAttribute("id","price")
//-----------------------------------------------------------------------------
  
  sum += Number(elem.price);
  console.log(sum);
  // sum.style.color="black"
  document.querySelector("#sum").innerHTML="Subtotal: " + sum;
  

  var button=document.createElement("button")
  button.innerText="x"
  button.setAttribute("id","delete")

  button.addEventListener("click", function(){
        Delete(elem.price)
  })

  card.append(img,name,price,button);

  muskan.append(card);


});

}
display(cartData); 

function Delete(id){
cartData=cartData.filter(function(elem){
    return elem.price != id;
})
display(cartData);
localStorage.setItem("masai-cart",JSON.stringify(cartData));
}

//----------------------------------------------------------------------------------------

document.querySelector("#btn").addEventListener("click", muskan1)
function muskan1(){
  window.location.href="cart.html";
}

document.querySelector("#btn2").addEventListener("click", muskan2)
function muskan2(){
  window.location.href="men.html";
}