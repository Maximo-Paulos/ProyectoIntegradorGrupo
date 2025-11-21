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