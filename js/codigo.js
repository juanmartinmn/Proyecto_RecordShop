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
    fetchPrueba();
})

function fetchPrueba(){
    const featuredArticles = document.querySelector("#featuredArticles");
    fetch('/data.json')
    .then((res)=>res.json())
    .then((data)=>{

        data.forEach(producto => {
            let prod = document.createElement("div");
            prod.setAttribute('id', 'row_'+producto.id); 
            
            prod.innerHTML= `   <article class="cards">
                                <img class="card-img" src="./img/products/${producto.img}">
                                <div class="card-text">
                                    <div class="card-title">
                                        <h4>${producto.nombre}</h4> 
                                    </div>
                                    <div class="card-artist">
                                        <h4>${producto.artista}</h4>                 
                                    </div>
                                    <div class="card-price">
                                        <h4>$${producto.precio} ARS</h4>
                                    </div>
                                    <a href="javascript:addToCart(${producto.id},${cartIndex})"> <button class="btnAdd">Add to Cart</button> </a>
                                </div>
                                </article>` 
            
            featuredArticles.appendChild(prod);
        });
    })
}

function saveCart() { 
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
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



