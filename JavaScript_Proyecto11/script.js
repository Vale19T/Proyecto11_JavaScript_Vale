//Ubicar los valores del html
const body = document.querySelector("body");
//Variable para el movimiento del toggle, el toggle se va con "getElementById" pq no tiene ID
//Tambien se puede con "querySelector" pero se debe referenciar con el #
const toggle = document.getElementById("toggle");

//EL metodo toggle consiste el en estar en un estado false por default, si lo llamo se vuelve true y viceversa segun la acccion
//Guarda el ultimo estado del que se encuentra el elemento

toggle.addEventListener("click", ()=>{
    //El classList para variar entre los valores ON y OFF
    //Son clases que se crean en el js que se adaptan con el css que se le otorgue
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
})