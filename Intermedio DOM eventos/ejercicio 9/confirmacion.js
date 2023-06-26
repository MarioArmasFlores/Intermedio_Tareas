const boton = document.getElementById("boton");
const elementoEliminar = document.getElementById("eliminar");
boton.addEventListener("click", () => {
  const confirmacion = confirm("Estas seguro de que deseas eliminar el elemento?");

  if(confirmacion) {
    elementoEliminar.remove();
    alert("Se eliminara el elemento.")
  } else{
    alert("Has cancelado la eliminacion.")
  }

}) 