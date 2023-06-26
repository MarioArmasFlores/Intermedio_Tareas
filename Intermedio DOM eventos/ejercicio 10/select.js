function cambiar() {
    const seleccion = document.getElementById("select");

    if ((seleccion.value) === "option-1") {

        document.getElementById("img-container").innerHTML = '<img src="lesdiscrets.jpg" width="100px" height="100px">';

    } else if ((seleccion.value) === "option-2") {

        document.getElementById("img-container").innerHTML = '<img src="alcest.jpg" width="100px" height="100px">';

    } else {
        document.getElementById("img-container").innerHTML = '<img src="Gojira.jpg" width="100px" height="100px">';
    }



}
