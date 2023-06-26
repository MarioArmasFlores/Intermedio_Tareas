// ejercici 6

const listaNumeros = [2, 3, 4, 5, 6, 7, 8, 9];

//const listaNumeros = []; Aqui pruebas la respuesta reject






function cuadradoNumeros(listaNumeros) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (listaNumeros.length === 0) {
                reject(new Error('Error. La lista esta vacia.'))
            } else {


                let resultadoCuadrado = listaNumeros.map(numObj => {
                    return {
                        numeroOriginal: numObj,
                        numeroCuadrado: numObj * numObj
                    }


                })
                resolve(resultadoCuadrado);

            }
        }, 4000)
    })
}

cuadradoNumeros(listaNumeros)
    .then(numerosObjetos => {
        console.log(numerosObjetos)
    })
    .catch(error => {
        console.error(error.message);
    })

