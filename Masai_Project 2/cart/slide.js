import { display } from "./import/importSide.js";

var cartData = JSON.parse(localStorage.getItem("masai-cart")) || [];
let muskan = document.querySelector("#pro");

let dropdown = document.querySelector("#mo");
document.getElementById("close").onclick = () => {
  dropdown.style.display = "none";
};
display(cartData, muskan);
