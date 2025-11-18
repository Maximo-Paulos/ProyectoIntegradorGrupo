let formularioLogin = document.querySelector(".login-index");
let campoEmailLogin = document.querySelector("#email");
let campoPassLogin = document.querySelector("#password");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoEmailLogin.value === "") {
        alert("El campo email es obligatorio");
        return;
    }

    if (campoPassLogin.value === "") {
        alert("El campo contraseña es obligatorio");
        return;
    }

    if (campoPassLogin.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    localStorage.setItem("userEmail", campoEmailLogin.value);

    window.location.href = "./index.html";
});
