const boton_1 = document.getElementById("boton-1")
boton_1.addEventListener("click", () => {
    let span_respuesta_1 = document.getElementById("span-respuesta-1")
     
    let uno = "Rojo Carmesi"
    let dos = "Triptofano"
    let tres = "Glutamato"
    let cuatro = "diente de leon"

    let base_datos = [uno, dos, tres, cuatro];

    let random_key = Math.floor(Math.random() * base_datos.length);

    let respuesta_1 = -1;


    for(let i = 0; i < base_datos.length; i++) {
        if(i === random_key) {
            respuesta_1 = i;
            break;
        }
    }
    if(respuesta_1 !== -1) {
        span_respuesta_1.innerHTML = base_datos[respuesta_1];
    } 

})
