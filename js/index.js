/*
Un formulario con un buscador que al buscar debe enviarnos a la página “resultados de búsqueda”. El buscador deberá validar:
Que el campo de búsqueda no esté vacío. Si está vacío debe avisarle al usuario por pantalla.
Que el término buscado tenga al menos 3 caracteres. Si no los tiene debe avisarle al usuario por pantalla.
*/ 
console.log("Hola mundo desde index.js");

const urlProducts = "https://dummyjson.com/products"; 
let productsContainer = document.querySelector('.items');
fetch(urlProducts)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let products = data.products;
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            productsContainer.innerHTML += `
                <article class="item-card"> <img class="item-image" src="./img/tp-frontend-1.jpeg" alt="">
                    <h2 class="item-title">${product.title}</h2>
                    <p class="item-description">6.75 L twin-turbocharged V12 </p>
                    <p class="item-price">$574,280 USD</p>
                    <a class="verDetalle" href="./product.html">ver detalle</a>
                </article>
            `;
        }
    })
    .catch(function(error) {
        console.log("Error fetching products: " + error);
    });