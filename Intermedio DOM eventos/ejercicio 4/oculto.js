


const button = document.getElementById("boton-oculto");
const button2 = document.getElementById("boton-aparecer");
const elemento = document.getElementById("oculto");

button.addEventListener("click", () => {
    elemento.style.setProperty('--visibilidad', 'hidden')
})

button2.addEventListener("click", () => {
    elemento.style.setProperty('--visibilidad', 'visible')
})
 















