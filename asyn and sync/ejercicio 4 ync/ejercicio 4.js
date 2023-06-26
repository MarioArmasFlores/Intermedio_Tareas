//ejercicio 4

function calcular(a, b, operacion) {
    return new Promise((resolve, reject) => {
        let operacionMatematica;
        console.log('Procesando...')
        setTimeout(() => {
            if (operacion === "suma") {
                operacionMatematica = a + b;
                resolve(operacionMatematica);
            } else if (operacion === "resta") {
                operacionMatematica = a - b;
                resolve(operacionMatematica);
            } else if (operacion === "multiplicacion") {
                operacionMatematica = a * b;
                resolve(operacionMatematica);
            } else if (operacion === "division") {
                operacionMatematica = a / b;
                resolve(operacionMatematica);
            } else {
                reject(new Error('Por favor ingresa un parametro de estos: "suma", "resta", "multiplicacion", o "division"'))
            }
        }, 2000)
    })
}

calcular(2,3,"multiplicacion")
    .then(operacionMatematica => {
        console.log(operacionMatematica)
    })
    .catch( error => {
        console.error(error.message)
    })