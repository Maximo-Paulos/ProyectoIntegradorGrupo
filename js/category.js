console.log("Category JS loaded");

let productsContainercateg = document.querySelector('.items-category');

let queryStringCateg = location.search;
let queryStringObjCat = new URLSearchParams(queryStringCateg);
let categoria = queryStringObjCat.get('categoria');

let urlCategory = `https://dummyjson.com/products/category/${categoria}`;

fetch(urlCategory)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let products = data.products;   
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            console.log(product);
            productsContainercateg.innerHTML += `
                <article class="item-card">
                    <img class="item-image" src="${product.thumbnail}" alt="">
                    <h2 class="item-title">${product.title}</h2>
                    <p class="item-description">${product.description}</p>
                    <p class="item-price">${product.price}</p>
                    <a class="verDetalle" href="./product.html?id=${product.id}">ver detalle</a>
                </article>
            `;
        }
    }) 
    .catch(function(error) {
        console.log("Error fetching products: " + error);
    });