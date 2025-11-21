/*
<div class="search-container">
            <form class="serch-bar" action="./search-result.html" method="get">
                <input class = "buscar" type="text" placeholder="Buscar..." name="buscador" value="">
                <button type="submit">Buscar</button>
            </form>
        </div>
*/ 


let formbuscador = document.querySelector('.serch-bar');
let inputBuscar = document.querySelector('.buscar');

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let buscador = queryStringObj.get('buscador');

formbuscador.addEventListener('submit', function(event) {
    event.preventDefault();
    if (inputBuscar.value == '') {
        alert("El campo de búsqueda no puede estar vacío");
    } else if (inputBuscar.value.length < 3) {
        alert("El término buscado debe tener al menos 3 caracteres");
    } else {
        this.submit();
    }
});


let URLcategorias = 'https://dummyjson.com/products/categories';
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
                <li><a href="./category.html?categoria=${categoria}">${categoria}</a></li>
            `;
        }
    })
    .catch(function(error) {
        console.log("Error fetching categories: " + error);
    });


let itemsContainer = document.querySelector('.items');
let mensajeSinResultado = document.querySelector('.sin-resultado');

itemsContainer.innerHTML = "";
mensajeSinResultado.style.display = "none";

if (buscador !== null && buscador !== "") {

    fetch(`https://dummyjson.com/products/search?q=${buscador}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {

            console.log(data);

    if (data.products.length == 0) {
      mensajeSinResultado.style.display = "block";
      
    }

     for (let i = 0; i < data.products.length; i++) {

                let producto = data.products[i];

                itemsContainer.innerHTML += `
                    <article class="item-card">
                        <img class="item-image" src="${producto.thumbnail}" alt="">
                        <h2 class="item-title">${producto.title}</h2>
                        <p class="item-description">${producto.description}</p>
                        <p class="item-price">$${producto.price} USD</p>
                        <a class="verDetalle" href="./product.html?id=${producto.id}">ver detalle</a>
                    </article>
                `;
            }
        })
        .catch(function(error) {
            console.log("Error fetching search results: " + error);
        });
}
