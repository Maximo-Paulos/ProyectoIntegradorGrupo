window.addEventListener("load", function () {

    let logout = document.querySelector(".logout");
    let auth = document.querySelector(".auth-container");

    if (logout) {

        logout.addEventListener("click", function (event) {
            event.preventDefault();

            localStorage.removeItem("userEmail");

            auth.innerHTML = `
                <h3><a href="./login.html">LogIn</a></h3>
                <h3>/</h3>
                <h3><a href="./register.html">Register</a></h3>
            `;
        });
    }
});
