// let secretkey=`eI9WjUMw2ThwKHM2TsFDmulua9n7YlJ_6ov06y1zrVA`;

let Acesskey=`Ete8xKm22RpQ3hMvZ_eNu4m3Mvhg5gEWIOCk3xGiuKY`;

// import{navbar} from "./component/navbar.js"


// let url=`https://api.unsplash.com/search/photos?&query=${query}&client_id=${Acesskey}`;




// let n = document.getElementById("navbar") ;
// n.innerHTML = navbar() ;

import{searchImages,append} from "./fetch.js";


let search = (e) =>{
    if(e.key === "Enter"){
        let query = document.getElementById("search").value ;
        searchImages(Acesskey,query).then((data) =>{
        console.log(data)
        let container = document.getElementById("container")    ;
        container.innerHTML= null ;
        append(data.results,container)
       }) ;
    }
};
document.getElementById("search").addEventListener("keydown",search)

// let catagories =document.getElementById("catagories").children ;

// function cSearch() {
//  console.log(this.id)
//  searchImages(API,this.id).then((data) =>{
//     console.log(data)
//     let container = document.getElementById("container")    
//     container.innerHTML=  null;
//     append(data.results,container)
//    }) ;
// }

// for (let el of catagories){
//     el.addEventListener("click",cSearch)
// }


let select = document.getElementById("select");

select.onchange = () =>{
    if(select.value == 'clothes'){
        window.location.href = 'product_page.html'
;    }
}