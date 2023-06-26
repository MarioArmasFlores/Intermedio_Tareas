function activision() {
    const elementos = document.querySelectorAll(".activo");

    elementos.forEach(elemento => {
        elemento.addEventListener("click", () => {
            elementos.forEach(e => e.classList.remove("activo"));
        })
    })

}






