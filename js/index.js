console.log("Hola mundo desde index.js");
// Listado de productos

const urlProducts = "https://dummyjson.com/products/category/vehicle"; 
let productsContainer = document.querySelector('.items');
let productsContainer2 = document.querySelector('.items2');

fetch(urlProducts)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let products = data.products;

        // Primer contenedor
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            console.log(product);
            productsContainer.innerHTML += `
                <article class="item-card">
                    <img class="item-image" src="${product.thumbnail}" alt="">
                    <h2 class="item-title">${product.title}</h2>
                    <p class="item-description">${product.description}</p>
                    <p class="item-price">${product.price}</p>
                    <a class="verDetalle" href="./product.html?">ver detalle</a>
                </article>
            `;
        }

        // Segundo contenedor
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            console.log(product);
            productsContainer2.innerHTML += `
                <article class="item-card">
                    <img class="item-image" src="${product.thumbnail}" alt="">
                    <h2 class="item-title">${product.title}</h2>
                    <p class="item-description">${product.description}</p>
                    <p class="item-price">${product.price}</p>
                    <a class="verDetalle" href="./product.html?">ver detalle</a>
                </article>
            `;
        }
    }) 
    .catch(function(error) {
        console.log("Error fetching products: " + error);
    });


// Buscador

let formbuscador = document.querySelector('.serch-bar');
let inputBuscar = document.querySelector('.buscar');

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let buscador = queryStringObj.get('buscador');

formbuscador.addEventListener('submit', function(event)
{
    event.preventDefault();
    if (inputBuscar.value == ''){
    alert("El campo de búsqueda no puede estar vacío");
} else if (inputBuscar.value.length < 3) {
    alert("El término buscado debe tener al menos 3 caracteres");

}
else {
    this.submit();
}

});

// Categorias de productos
let URLcategorias = 'https://dummyjson.com/products/categories'
let categorias = document.querySelector('.categorias');

fetch(URLcategorias)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let categoria = data[i];
            categorias.innerHTML += `
            <li><a href="./category.html?categoria=${categoria.url}">${categoria.name}</a></li>
            `;
            console.log(categoria.url);
        }
        
            
    })
    .catch(function(error) {
        console.log("Error fetching products: " + error);
    });