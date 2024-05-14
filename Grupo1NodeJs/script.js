console.log("hola soy untexto del js");

// console.log(header[0]);
//  revisar como sonseguir q imprima un cero cuando esta en el top de la pagina e imprima un uno cuando scroll
// ee hacia abajo 

window.addEventListener("scroll", function(){
    let header = document.getElementsByTagName("header");
    if(window.scrollY <= 10){
        header[0].className = "initial";
        // header.classList.remove("scroll");
        // header.classList.add("initial");
        // console.log("Hola aqui no paso nada");
    }else{
        header[0].className = "scroll";
        // header.classList.remove("initial");
        // header.classList.add("scroll");
        // console.log("paso algo");
    }
})