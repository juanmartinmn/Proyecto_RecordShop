document.addEventListener("DOMContentLoaded",() =>{
    carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    cartIndex = JSON.parse(sessionStorage.getItem("cartIndex")) || [];
    restoreCart();
    // fetchData();
})

function loadProducts(){
    const featuredArticles = document.querySelector("#featuredArticles");
    const productList = document.querySelector("#product-list");
    
    productos.forEach(producto => {
        let prod = document.createElement("div");
        let prodcards = document.createElement("div");

        prod.setAttribute('id', 'row_'+producto.id);
        prodcards.setAttribute('id', 'row_'+producto.id);

        if (producto.destacado==1) {
            prod.innerHTML=`
            <article class="featuredProduct">
                <div class=cards>
                <img class="card-img" src="./img/products/${producto.img}">
                    <div class="card-text">
                        <div class="card-title">
                            <h4>${producto.nombre}<br><b>${producto.artista}</b></h4> 
                        </div>
                        <div class="card-price">
                            <h4>$${producto.precio} ARS</h4>
                        </div>
                        <a href="javascript:addToCart(${producto.id},${cartIndex})" class=btnAddA> <button class="btnAdd">Add to Cart</button> </a>
                        </div>
                </div>
            </article>`
            featuredArticles.appendChild(prod);
        }

        

        
        prodcards.innerHTML=`
                            <article class="product">
                                <div class=cards>
                                <img class="card-img" src="./img/products/${producto.img}">
                                    <div class="card-text">
                                        <div class="card-title">
                                            <h4>${producto.nombre}<br><b>${producto.artista}</b></h4> 
                                        </div>
                                        <div class="card-price">
                                            <h4>$${producto.precio} ARS</h4>
                                        </div>
                                        <a href="javascript:addToCart(${producto.id},${cartIndex})" class=btnAddA> <button class="btnAdd">Add to Cart</button> </a>
                                        </div>
                                </div>
                            </article>`
        
        productList.appendChild(prodcards);
        
        
}) 
}

function addToCart(id,cartIndex){
    let li = document.createElement("li");
    li.innerHTML = `<h3>${cartCounter}</h3><img src="./img/products/${productos[id].img}" width="70px" height="70px">
                    ${productos[id].nombre} - ${productos[id].artista} $${productos[id].precio}
                    <a href="javascript:removeItem(${cartIndex})"><button class="removeBtn"><i class="bi bi-x-lg"></i> Remove</button></a>`;
    cart.appendChild(li);
    cartTotal += productos[id].precio;
    cartTotalLi.innerHTML = `Total: $${cartTotal}`
    carrito.push(productos[id]);
    saveCart();
    toast();
    cartCounter++;
    cartIndex++;
}

function toast(){
    Toastify({
        text: "Added to cart",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "#1a6947",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

// Buscar Productos
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h4");

    for (let index = 0; index < pname.length; index++) {
        let match = product[index].getElementsByTagName("h4")[0];
        
        if (match) {
            // Operador OR
            let textvalue = match.textContent || match.innerHTML;

            // Operador Ternario
            textvalue.toUpperCase().indexOf(searchbox) > -1 ? product[index].style.display = "" : product[index].style.display = "none";
        }
    }
}

function redirectToCheckout(){
    if (carrito.length==0){
        swal({
            title: "Your cart is empty",
            text: "Add some items to your cart!",
            icon: "error",
        });
    }else{
        window.location = "./pages/payment.html";
    }
}

loadProducts(productos);