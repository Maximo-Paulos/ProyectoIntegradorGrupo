let formulario = document.querySelector("form");
let campoEmail = document.querySelector("#correo");
let campoPass = document.querySelector("#pass");
let campoPassRepeat = document.querySelector("#passw");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (campoEmail.value == "") {
    alert("El campo email es obligatorio");
  } else if (campoPass.value == "") {
    alert("El campo contraseña es obligatorio");
  } else if (campoPass.value.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
} else if (campoPass.value != campoPassRepeat.value) {
    alert("Las contraseñas no coinciden");
  } else {
  this.submit();
  }
});
