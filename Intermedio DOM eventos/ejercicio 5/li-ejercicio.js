const boton = document.getElementById("boton");

const span_lista = document.getElementById("span-lista");

boton.addEventListener("click", () => {

    const li_actual = span_lista.innerHTML; 
    const nuevoLi = "<li>🪶</li>";
    const nuevoContenido = li_actual + nuevoLi;
    span_lista.innerHTML = nuevoContenido;





})