window.addEventListener("load", function () {

    let query = location.search;
    let queryObj = new URLSearchParams(query);
    let productoElegido = queryObj.get("id");

    if (productoElegido == null) {
        console.log("No hay id en la URL");
        return;
    }

    let productUrl = `https://dummyjson.com/products/${productoElegido}`;

    let imgProducto = document.querySelector(".img-prod-desc");
    let tituloProducto = document.querySelector(".Ferrari_1");
    let marcaProducto = document.querySelector(".marca");
    let precioProducto = document.querySelector(".precio");
    let descripcionProducto = document.querySelector(".describi");

    let categoriaProducto = document.querySelector(".producto-categoria");
    let stockProducto = document.querySelector(".producto-stock");
    let tagsProducto = document.querySelector(".producto-tags");

    let contenedorReviews = document.querySelector(".comentarios");

    fetch(productUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            if (imgProducto) {
                imgProducto.src = data.images[0];
                imgProducto.alt = data.title;
            }

            if (tituloProducto) {
                tituloProducto.innerText = data.title;
            }

            if (marcaProducto) {
                marcaProducto.innerText = "Marca: " + data.brand;
            }

            if (precioProducto) {
                precioProducto.innerText = "Precio: $" + data.price;
            }

            if (descripcionProducto) {
                descripcionProducto.innerText = data.description;
            }

            if (categoriaProducto) {
                categoriaProducto.innerHTML =
                    `<strong>Categoría:</strong>
                     <a href="./category.html?category=${data.category}">
                        ${data.category}
                     </a>`;
            }

            if (stockProducto) {
                stockProducto.innerHTML = `<strong>Stock:</strong> ${data.stock}`;
            }

            if (tagsProducto) {
                let tagsTexto = "";
                for (let i = 0; i < data.tags.length && i < 3; i++) {
                    tagsTexto += `#${data.tags[i]} `;
                }
                tagsProducto.innerHTML = `<strong>Tags:</strong> ${tagsTexto}`;
            }

            if (contenedorReviews) {
                contenedorReviews.innerHTML = "<h2>Comentarios:</h2>";

                for (let i = 0; i < data.reviews.length; i++) {
                    let review = data.reviews[i];

                    let estrellas = "";
                    for (let r = 0; r < review.rating; r++) {
                        estrellas += "★";
                    }

                    contenedorReviews.innerHTML += `
                        <div class="comentarios-caja">
                            <h3>${estrellas}</h3>
                            <p><strong>${review.reviewerName}:</strong> "${review.comment}"</p>
                            <p>${review.date}</p>
                        </div>
                    `;
                }
            }
        })
        .catch(function (error) {
            console.log("El error es: " + error);
        });

});
