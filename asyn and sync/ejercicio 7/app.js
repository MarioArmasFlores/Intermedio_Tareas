//ejercicio 7


function comparar(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let message;
            if(a > b){
                message = `${a} es mayor que ${b}`
                resolve(message)
            } else if(a < b){
                message = `${a} es menor que ${b}`
                resolve(message)
            }else if(a == b){
                
                reject(new Error (`${a} es igual que ${b}`))
            } else {
                console.log('ingresa solo valores numericos.')
            }

        }, Math.random() * 1000)
    })
}

comparar(5,5)
    .then( resultado => {
        console.log(resultado)
    })
    .catch( error => {
        console.error(error.message)
    });