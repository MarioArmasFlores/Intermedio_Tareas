// ejercicio 3

//base de datos.

const informacionUsuarios = [
    { nombre: 'ramiel', id: '1110', eva: '01' },
    { nombre: 'azrael', id: '0710', eva: '00' },
    { nombre: 'Malus', id: '0000', eva: '02' }
]

async function obtenerInformacion(id) {
    return new Promise((resolve, reject) => {
        console.log('accediendo a la base de datos del pentagono...')
        setTimeout(() => {
            const usuario = informacionUsuarios.find(objective => objective.id === id)
            
            if (usuario) {
                resolve(usuario)
            } else {
                reject(new Error('no se encontro ningun resultado.'))
            }
        }, 3000)
    })

}
obtenerInformacion("0710")
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.error(error.message)
    });
