// Variables Globales
let productos = [];
let carrito = [];

class Productos{
    constructor(nombre,artista,precio,id){
        this.nombre = nombre;
        this.artista = artista;
        this.precio = precio;
        this.id = id;
    }
}

// Spread de objetos, aplicado en la linea 124 en adelante.
const producto7 = {
    nombre: "Some Girls",
    artista: "The Rolling Stones",
    precio: 2800,
}

const producto8 ={
    ...producto7,
    id: 7
}

document.addEventListener("DOMContentLoaded",() =>{
    // Operador OR
    carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
})

function saveCart() { 
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

// Funcion para aplicar los toasts, dentro de cada btnAdd.
function toast(){
    Toastify({
        text: "Added to cart",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "#1a6947",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}


// Array de productos de la clase Productos.
productos.push(new Productos("AM","ARCTIC MONKEYS",1500,1));
productos.push(new Productos("Favourite Worst Nightmare","ARCTIC MONKEYS",1900,2));
productos.push(new Productos("Nevermind","NIRVANA",2000,3));
productos.push(new Productos("Knebworth 1996","OASIS",2500,4));
productos.push(new Productos("(What's The Story) Morning Glory?","OASIS",3000,5));
productos.push(new Productos("OK Computer","RADIOHEAD",3500,6));

let entrada = "";
let desc = document.querySelector(".discounts");
let cuotas = document.querySelector(".payments");

// Carrito de compras
let cart = document.getElementById("cart");
let btnAdd = document.getElementsByClassName("btnAdd");
let btnAdd1 = document.getElementById("btnAdd1");
let btnAdd2 = document.getElementById("btnAdd2");
let btnAdd3 = document.getElementById("btnAdd3");
let btnAdd4 = document.getElementById("btnAdd4");
let btnAdd5 = document.getElementById("btnAdd5");
let btnAdd6 = document.getElementById("btnAdd6");
let btnAdd7 = document.getElementById("btnAdd7");
let cartTotal = 0;
let cartTotalLi = document.getElementById("cartTotal");

// Desestructurando Array de Productos, aplicado en la linea 67
let [a]= productos;
let {precio:precioA} = a;

btnAdd1.onclick = () => {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./img/products/amam.jpg" width="70px" height="70px"> AM - Arctic Monkeys $${productos[0].precio}`
    cart.appendChild(li);
    cartTotal += precioA;
    cartTotalLi.innerHTML = `Total: $${cartTotal}`
    carrito.push(productos[0]);
    saveCart();
    toast();
}

btnAdd2.onclick = () => {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./img/products/amfwn.jpg" width="70px" height="70px"> Favourite Worst Nightmare - Arctic Monkeys $${productos[1].precio}`
    cart.appendChild(li);
    cartTotal += productos[1].precio;
    cartTotalLi.innerHTML = `Total: $${cartTotal}`
    carrito.push(productos[1]);
    saveCart();
    toast();
}

btnAdd3.onclick = () => {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./img/products/nirvananevermind.jpg" width="70px" height="70px"> Nevermind - Nirvana $${productos[2].precio}`
    cart.appendChild(li);
    cartTotal += productos[2].precio;
    cartTotalLi.innerHTML = `Total: $${cartTotal}`
    carrito.push(productos[2]);
    saveCart();
    toast();
}

btnAdd4.onclick = () => {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./img/products/oasisknebworth.jpg" width="70px" height="70px"> Knebworth 1996 - Oasis $${productos[3].precio}`
    cart.appendChild(li);
    cartTotal += productos[3].precio;
    cartTotalLi.innerHTML = `Total: $${cartTotal}`
    carrito.push(productos[3]);
    saveCart();
    toast();
}

btnAdd5.onclick = () => {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./img/products/oasiswtsmg.jpg" width="70px" height="70px"> (What's The Story) Morning Glory? - Oasis $${productos[4].precio}`
    cart.appendChild(li);
    cartTotal += productos[4].precio;
    cartTotalLi.innerHTML = `Total: $${cartTotal}`
    carrito.push(productos[4]);
    saveCart();
    toast();
}

btnAdd6.onclick = () => {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./img/products/radioheadokc.jpg" width="70px" height="70px"> OK Computer - Radiohead $${productos[5].precio}`
    cart.appendChild(li);
    cartTotal += productos[5].precio;
    cartTotalLi.innerHTML = `Total: $${cartTotal}`
    carrito.push(productos[5]);
    saveCart();
    toast();
}

// Aplicando el Spread de objeto
btnAdd7.onclick = () => {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./img/products/trssomegirls.jpg" width="70px" height="70px"> ${producto8.nombre} - ${producto8.artista} $${producto8.precio}`
    cart.appendChild(li);
    cartTotal += producto8.precio;
    cartTotalLi.innerHTML = `Total: $${cartTotal}`
    carrito.push(producto8);
    saveCart();
    toast();
}

// Buscar Productos
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2");

    for (let index = 0; index < pname.length; index++) {
        let match = product[index].getElementsByTagName("h2")[0];
        
        if (match) {
            // Operador OR
            let textvalue = match.textContent || match.innerHTML;

            // Operador Ternario
            textvalue.toUpperCase().indexOf(searchbox) > -1 ? product[index].style.display = "" : product[index].style.display = "none";
        }
    }
}

fetch('/data.json')
    .then((res)=>res.json())
    .then((data)=>{

        data.forEach(producto => {
            let featuredArticles = document.getElementById("featuredArticles");
            let cards = document.createElement("section");
            let cardText = document.createElement("div");
            let cardImg = document.createElement("div");
            let cardTitle = document.createElement("div");
            let cardArtist = document.createElement("div");
            let cardPrice = document.createElement("div");
            cards.classList.add("cards");
            cardText.classList.add("card-text");
            cardImg.classList.add("card-img");
            cardTitle.classList.add("card-title");
            cardArtist.classList.add("card-artist");
            cardPrice.classList.add("card-price");

            cardImg.innerHTML = `<img src=${producto.img}>`;
            cardArtist.innerHTML = `<h4>${producto.artista}</h4>`;
            cardTitle.innerHTML = `<h4>${producto.nombre}</h4>`;
            cardPrice.innerHTML = `<h4>${producto.precio}</h4>`;
            cardText.appendChild(cardTitle);
            cardText.appendChild(cardArtist);
            cardText.appendChild(cardPrice);
            cards.appendChild(cardImg);
            cards.appendChild(cardText);
            featuredArticles.appendChild(cards);
        });
    })