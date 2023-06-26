const imagen = document.getElementById("imagen");
const descripcion = document.getElementById("descripcion");
const span_texto = document.getElementById("span-texto");

imagen.addEventListener("mouseover", () => {
    span_texto.innerHTML = "Lobo / Canis Lupus" 
    
})
imagen.addEventListener("mouseout", () => {
    span_texto.innerHTML = "";
}) 