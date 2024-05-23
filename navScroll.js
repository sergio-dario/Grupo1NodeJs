console.log("hola soy untexto del js");

window.addEventListener("scroll", function () {
  let header = document.getElementsByTagName("header");
  if (window.scrollY <= 40) {
    header[0].className = "initial";
    
  } else {
    header[0].className = "scroll";
  }
});
