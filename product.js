let query =location.search;
let queryObj = new URLSearchParams (query);
let produtctoElegido = queryObj.get ("id");


let productUrl = `https://dummyjson.com/products/${productoElegido}`;

let producto = document.querySelector(".items-producto");
let reviews = document.querySelector (".comentarios-producto")

fetch (productUrl)
.then (function (response){
    return response.json();
})
.then (function (data){
    console.log (data);

    let tagsTexto="";
    for (let i=0; i<data.tags.length && i<3; i++) {
        tagsTexto += `#${data.tags[i]}`;
    }


    producto.innerHTML=`
    <div class="imagen-producto">
        <img src="${data.images[0]}" alt="${data.title}">
    </div>
    
    <section class="descripcion-producto">
        <h1 class="Ferrari_1">${data.title}</h1>
        <h2 class="marca"> Marca: ${data.brand} </h2>
        <h2 class="precio">Precio: $${data.price}</h2>
        <h4 class="describi">${data.description}</h4>

          <p><strong>Categoría:</strong> ${data.category}</p>
          <p><strong>Stock:</strong> ${data.stock}</p>
          <p><strong>Tags:</strong> ${tagsTexto}</p>
        </section>
    `;
    
    review.innerHTML="<h2>Comentarios:</h2>";

   for (let i=0; i<data.reviews.length; i++) {

    let review = data.reviews[i];
    let emojiRating="";

    for (let r = 0; r < review.rating; r++) {
        emojiRating +=  "★";
    }

    reviews.innerHTML += `
    <div class="comentarios-caja">
        <h3>${emojiRating}</h3>
        <p><strong>${review.reviewerName}:</strong> "${review.comment}"</p>
        <p>${review.date}</p>
       
     </div>
    `;
 }
    
})
.catch(function (error) {
    console.log("El error es: " + error);
});
//final