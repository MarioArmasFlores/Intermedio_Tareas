// ejercicio 2
async function resolverPromesa(resuelve) {


    if (resuelve === true) {
        return Promise.resolve('el valor es verdadero (true)')
    } else if (resuelve === false) {
        return Promise.reject('el valor es falso (false)')
    } else {
        console.log("el valor no es un Booleano.")
    }
}
resolverPromesa(true)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log('Error:', error);
    });
