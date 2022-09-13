// Variables Globales
let carrito = [];
let cart = document.getElementById("cart");
let cartTotalLi = document.getElementById("cartTotal");
let cartTotal = 0;
let cartCounter = 1;
let cartIndex = 0;

document.addEventListener("DOMContentLoaded",() =>{
    carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    cartIndex = JSON.parse(sessionStorage.getItem("cartIndex")) || [];
    restoreCart();
})

function saveCart() { 
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    sessionStorage.setItem('cartIndex',JSON.stringify(cartIndex));
}

function restoreCart(){
    cartCounter = 1;
    cartTotal = 0;
    for (let index = 0; index < carrito.length; index++) {
        
        li = document.createElement("li");
        
        
        li.innerHTML = `<h3>${cartCounter}</h3> <img src="../img/products/${carrito[index].img}" width="70px" height="70px"> ${carrito[index].nombre} - ${carrito[index].artista} $${carrito[index].precio} 
                        <a href="javascript:removeItem(${index})"><button class="removeBtn"><i class="bi bi-x-lg"></i> Remove</button></a>`;
        cart.appendChild(li);
        cartTotal += carrito[index].precio;
        cartTotalLi.innerHTML = `Total: $${cartTotal}`
        cartCounter++;
    }

    if(carrito.length==0){
        cartTotal = 0;
        cartTotalLi.innerHTML = `Total: $${cartTotal}`
    }
}

function removeItem(i){
    ul = document.getElementById("cart");
    ul.innerHTML = ``;
    carrito.splice(i,1);
    saveCart();
    restoreCart();
}

// fetch('/data.json')
//     .then((res)=>res.json())
//     .then((data)=>{

//         data.forEach(producto => {
//             let featuredArticles = document.getElementById("featuredArticles");
//             let cards = document.createElement("section");
//             let cardText = document.createElement("div");
//             let cardImg = document.createElement("div");
//             let cardTitle = document.createElement("div");
//             let cardArtist = document.createElement("div");
//             let cardPrice = document.createElement("div");
//             cards.classList.add("cards");
//             cardText.classList.add("card-text");
//             cardImg.classList.add("card-img");
//             cardTitle.classList.add("card-title");
//             cardArtist.classList.add("card-artist");
//             cardPrice.classList.add("card-price");

//             cardImg.innerHTML = `<img src=${producto.img}>`;
//             cardArtist.innerHTML = `<h4>${producto.artista}</h4>`;
//             cardTitle.innerHTML = `<h4>${producto.nombre}</h4>`;
//             cardPrice.innerHTML = `<h4>${producto.precio}</h4>`;
//             cardText.appendChild(cardTitle);
//             cardText.appendChild(cardArtist);
//             cardText.appendChild(cardPrice);
//             cards.appendChild(cardImg);
//             cards.appendChild(cardText);
//             featuredArticles.appendChild(cards);
//         });
//     })













