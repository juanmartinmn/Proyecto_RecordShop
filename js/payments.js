document.addEventListener("DOMContentLoaded",() =>{
    restoreCart2();
    // fetchData();
})

let form = document.getElementById("form");

form.addEventListener('submit',function(event){
    event.preventDefault();

    let email = document.getElementById('email').value;
    console.log(email);

    let fName = document.getElementById('fName').value;
    console.log(fName);

    let lName = document.getElementById('lName').value;
    console.log(lName);

    let address = document.getElementById('address').value;

    swal({
        title: `Thank you for your purchase ${fName}!`,
        text: `It will be sent to you at ${address} in the next 24 hours.`,
        icon: "success",
        button: "Back to main page",
    }).then(function() {
        window.location = "../index.html";
        carrito=[];
        cartIndex=0;
        saveCart();
    });
})