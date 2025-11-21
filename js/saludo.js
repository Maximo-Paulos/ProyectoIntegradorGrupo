window.addEventListener("load", function () {

    let emailUsuario = localStorage.getItem("userEmail");
    let auth = document.querySelector(".auth-container");

    if (emailUsuario == null) {

        auth.innerHTML = `
            <h3><a href="./login.html">LogIn</a></h3>
            <h3>/</h3>
            <h3><a href="./register.html">Register</a></h3>
        `;

    } else {

        auth.innerHTML = `
            <h3>Bienvenido: ${emailUsuario}</h3>
            <h3 class="logoutjs"><a href="#" class="logout">Cerrar Sesion</a></h3>

        `;
    }

});
