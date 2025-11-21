let formulariologin = document.querySelector(".login-index");
let emaillogin = document.querySelector("#email");
let passlogin = document.querySelector("#password");

formulariologin.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emaillogin.value === "") {
        alert("El campo email es obligatorio");
        return;
    }

    if (passlogin.value === "") {
        alert("El campo contraseña es obligatorio");
        return;
    }

    if (passlogin.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    localStorage.setItem("userEmail", emaillogin.value);

    window.location.href = "./index.html";
});
