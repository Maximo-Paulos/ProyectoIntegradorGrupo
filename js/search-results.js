/*
<div class="search-container">
            <form class="serch-bar" action="./search-result.html" method="get">
                <input class = "buscar" type="text" placeholder="Buscar..." name="buscador" value="">
                <button type="submit">Buscar</button>
            </form>
        </div>
*/ 

let queryStringserch = location.search;
let queryStringObjserch = new URLSearchParams(queryStringserch);
let buscadorserch = queryStringObjserch.get('buscador');


let itemsContainer = document.querySelector('.items');
let mensajeSinResultado = document.querySelector('.sin-resultado');

itemsContainer.innerHTML = "";
mensajeSinResultado.style.display = "none";



if (buscadorserch !== null && buscadorserch !== "") {

    fetch(`https://dummyjson.com/products/search?q=${buscadorserch}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {

            console.log(data);

    if (data.products.length == 0) {
      mensajeSinResultado.style.display = "block";
      alert("no items found");
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
