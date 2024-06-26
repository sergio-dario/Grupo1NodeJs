console.log("hola soy untexto del js");
window.location.href = "#contact";
document.addEventListener("DOMContentLoaded", function() {
  const offset = 50; 
  const contactSection = document.getElementById("contact");
  const yOffset = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: yOffset, behavior: 'smooth' });
});
window.addEventListener("scroll", function () {
  let header = document.getElementsByTagName("header");
  if (window.scrollY <= 40) {
    header[0].className = "initial";
    
  } else {
    header[0].className = "scroll";
  }
});
