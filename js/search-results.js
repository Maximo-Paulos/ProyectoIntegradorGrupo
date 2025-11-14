/*
Un formulario con un buscador que al buscar debe enviarnos a la página “resultados de búsqueda”. El buscador deberá validar:
Que el campo de búsqueda no esté vacío. Si está vacío debe avisarle al usuario por pantalla.
Que el término buscado tenga al menos 3 caracteres. Si no los tiene debe avisarle al usuario por pantalla.

*/ 
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let buscador = queryStringObj.get('buscador');

console.log(buscador);

if (buscador == ''){
    alert("El campo de búsqueda no puede estar vacío");
} else if (buscador.length < 3) {
    alert("El término buscado debe tener al menos 3 caracteres");

}
console.log("Hola mundo desde search-results.js");