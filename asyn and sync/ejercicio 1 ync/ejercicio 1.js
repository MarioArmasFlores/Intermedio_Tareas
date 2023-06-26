
//ejercicio 1

/* function esperarSegundos(segundos){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let mensj = "MEMORIES"
            resolve(mensj)

        }, segundos)
    })
}

esperarSegundos(3000)
    .then(mensj => {
        console.log(mensj)
        console.log('true')
    })
    .catch( error => {
        console.error(error.message)
    });
 */

function esperarSegundos(segundos){
    return new Promise((resolve) => {
        setTimeout(() => {
            let mensj = 'This is actually working'
            resolve(mensj)

        }, segundos)
    })
}

async function mensaje(){
    try {
        const mensaje = await esperarSegundos(3000);
        console.log(mensaje);
    } catch ( error ) {
        console.error(error.message);
    }
}


mensaje();