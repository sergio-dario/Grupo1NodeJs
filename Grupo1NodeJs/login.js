document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const registroExitosoDiv = document.getElementById("registroExitoso");
    let userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Comparar los datos ingresados con los almacenados
        const userFound = userDataArray.find(user => user.email === email && user.password === password);

        if (userFound) {
            console.log("¡Inicio de sesión exitoso!");
             
              // Mostrar mensaje 
        registroExitosoDiv.style.display = "block";

        // Redirigir a la página de inicio de sesión después de unos segundos
        setTimeout(function() {
            window.location.href = "./index.html";
        }, 3000); 
        } else {
            console.log("El email o contraseña ingresados son incorrectos.");
        }
    });
});
