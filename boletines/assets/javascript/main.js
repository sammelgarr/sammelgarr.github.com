console.log("Bienvenida al mundo de Javascript");

// DOM
//querySelector  //querySelectorAll

/* let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link)
}); */

/* let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log("Click");
    });
}); */

/* let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    });
}); */

// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

// Recorrrerlos
links.forEach(function (link) {

    // agregar un evento click a cada uno de dellos
    link.addEventListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        // Quitarle las clases de animacción que ya tiene
        content.classList.remove("faceInDown");
        content.classList.remove("animated");

        // Agregarle clases para animar su salida fadeOutUP
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function () {
            location.href = "/boletines";
        }, 600);


        return false;
    });
});



/* // Obtener los elementos de la clase .close
let iconos = document.querySelectorAll("i");

// Recorrrerlos
iconos.forEach(function(icono){

    // agregar un evento click a cada uno de dellos
    icono.classList.remove("fa-star");

}); */




