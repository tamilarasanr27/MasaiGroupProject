let searchImages = async (Acesskey,query) =>{
    try {
        // let query=document.getElementById("search")
       
        let res = await fetch(`https://api.unsplash.com/search/photos?&query=${query}&client_id=${Acesskey}`) ;
      
        let data =await res.json()

        console.log(data);
        return data ;
    }   
    catch(err){
        console.log(err) ;
    }
}
let append = (data,container) =>{
    data.forEach(({alt_description,urls:{ small } })=>{
        let div = document.createElement("div")
        div.setAttribute("class","image");
        let img = document.createElement("img")
        let h3 =document.createElement("h3")

        img.src = small ;
        h3.innerText =alt_description;


        div.append(img,h3)
        container.append(div)
    });
}

export{searchImages,append};