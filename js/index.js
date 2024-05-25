
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si el inicio de sesión fue exitoso
  const loginSuccessful = localStorage.getItem("loginSuccessful");

  if (loginSuccessful === "true") {
    // Modificar el texto 
    const bannerContentHeading = document.querySelector("#banner .banner_content h1");
    if (bannerContentHeading) {
      bannerContentHeading.textContent = "Ganaste un bono para tu próximo viaje";
      bannerContentHeading.classList.add("modificado","bono");
     
    } 

    // Limpia localStorage
    localStorage.removeItem("loginSuccessful");
  }
});

