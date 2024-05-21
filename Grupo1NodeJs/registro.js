document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const registroExitosoDiv = document.getElementById("registroExitoso");
    let userDataArray = JSON.parse(localStorage.getItem("userDataArray")) || [];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Crear un objeto con los datos
        const userData = {
            email: email,
            password: password
        };

        // Agrega al array
        userDataArray.push(userData);

        // Almacena el array 
        localStorage.setItem("userDataArray", JSON.stringify(userDataArray));

        console.log("Datos ingresados:", userDataArray);

        // Mostrar mensaje 
        registroExitosoDiv.style.display = "block";
        

        // Redirigir a la página de inicio de sesión después de unos segundos
        setTimeout(function() {
            window.location.href = "login.html";
        }, 3000); 
    });
});
