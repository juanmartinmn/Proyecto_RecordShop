// Variables Globales
let carrito = [];
let cart = document.getElementById("cart");
let cartTotalLi = document.getElementById("cartTotal");
let cartTotal = 0;
let cartCounter = 1;
let cartIndex = 0;

// El fetch al json local no me funciona por alguna razon, lo dejo aca por si quieren probarlo.

document.addEventListener("DOMContentLoaded",() =>{
    carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    cartIndex = JSON.parse(sessionStorage.getItem("cartIndex")) || [];
    restoreCart();
    // fetchData();
})

// function fetchData(){
//     // fetch('/data.json')
// //     .then((res)=>res.json())
// //     .then((data)=>{

// //         data.forEach(producto => {
//                 // let prod = document.createElement("div");
//                 // let prodcards = document.createElement("div");

//                 // prod.setAttribute('id', 'row_'+producto.id);
//                 // prodcards.setAttribute('id', 'row_'+producto.id);

//                 // if (producto.destacado==1) {
//                 //     prod.innerHTML=`
//                 //     <article class="featuredProduct">
//                 //         <div class=cards>
//                 //         <img class="card-img" src="./img/products/${producto.img}">
//                 //             <div class="card-text">
//                 //                 <div class="card-title">
//                 //                     <h4>${producto.nombre}<br><b>${producto.artista}</b></h4> 
//                 //                 </div>
//                 //                 <div class="card-price">
//                 //                     <h4>$${producto.precio} ARS</h4>
//                 //                 </div>
//                 //                 <a href="javascript:addToCart(${producto.id},${cartIndex})" class=btnAddA> <button class="btnAdd">Add to Cart</button> </a>
//                 //                 </div>
//                 //         </div>
//                 //     </article>`
//                 //     featuredArticles.appendChild(prod);
//                 // }
//                 // prodcards.innerHTML=`
//                 //                     <article class="product">
//                 //                         <div class=cards>
//                 //                         <img class="card-img" src="./img/products/${producto.img}">
//                 //                             <div class="card-text">
//                 //                                 <div class="card-title">
//                 //                                     <h4>${producto.nombre}<br><b>${producto.artista}</b></h4> 
//                 //                                 </div>
//                 //                                 <div class="card-price">
//                 //                                     <h4>$${producto.precio} ARS</h4>
//                 //                                 </div>
//                 //                                 <a href="javascript:addToCart(${producto.id},${cartIndex})" class=btnAddA> <button class="btnAdd">Add to Cart</button> </a>
//                 //                                 </div>
//                 //                         </div>
//                 //                     </article>`
//                 // productList.appendChild(prodcards);
// //         });
// //     })
// }

function saveCart() { 
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    sessionStorage.setItem('cartIndex',JSON.stringify(cartIndex));
}

function restoreCart(){
    cartCounter = 1;
    cartTotal = 0;
    for (let index = 0; index < carrito.length; index++) {
        
        li = document.createElement("li");
        
        if (window.location == "./payment.html") {
            li.innerHTML = `<h3>${cartCounter}</h3> <img src="../img/products/${carrito[index].img}" width="70px" height="70px"> ${carrito[index].nombre} - ${carrito[index].artista} $${carrito[index].precio} 
                        <a href="javascript:removeItem(${index})"><button class="removeBtn"><i class="bi bi-x-lg"></i> Remove</button></a>`;
        } else{
            li.innerHTML = `<h3>${cartCounter}</h3> <img src="./img/products/${carrito[index].img}" width="70px" height="70px"> ${carrito[index].nombre} - ${carrito[index].artista} $${carrito[index].precio} 
                        <a href="javascript:removeItem(${index})"><button class="removeBtn"><i class="bi bi-x-lg"></i> Remove</button></a>`;
        }
        
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
















