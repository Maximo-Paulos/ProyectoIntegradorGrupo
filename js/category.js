let Urlautos = `https://dummyjson.com/products/category/vehicle`;
let contenedorAutos = document.querySelector (".items");

fetch (Urlautos) 
  .then (function (respuesta) {
    respuesta.json();
  })
    .then (function (data) {
        console.log (data);

        let autos= data.products;
        let contenido ="";

        for (let i=0; i<autos.length; i++) {

            contenido += 
            `<article class="item-card"> 

            <img class= "item-img" src="${autos[i].images[0]}" alt="${autos[i].title}">

            <h2 

        