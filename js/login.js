let formularioLogin = document.querySelector(".caja-index");
let campoEmailLogin = document.querySelector("#correo");
let campoPassLogin = document.querySelector("#pass");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoEmailLogin.value == "") {
        alert("El campo email es obligatorio");
    }

});
