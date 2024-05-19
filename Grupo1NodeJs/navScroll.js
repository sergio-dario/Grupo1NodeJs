console.log("hola soy untexto del js");

// console.log(header[0]);
//  revisar como sonseguir q imprima un cero cuando esta en el top de la pagina e imprima un uno cuando scroll
// ee hacia abajo

window.addEventListener("scroll", function () {
  let header = document.getElementsByTagName("header");
  if (window.scrollY <= 40) {
    header[0].className = "initial";
  } else {
    header[0].className = "scroll";
  }
});
