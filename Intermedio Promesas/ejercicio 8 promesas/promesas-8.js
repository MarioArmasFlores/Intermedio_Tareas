
const word = prompt('ingresa la palabra (recuerda que solo es una simulacion esto no tiene la API de google para traducir lo que desee.) ').toUpperCase()

function translate (word){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let traducir;
            if(word == "WATER"){
                traducir = "AGUA";
                resolve(traducir)
            }else if(word == "AGUA"){
                traducir = "WATER"
                resolve(traducir)
            }else {
                resolve(console.log('unfortunately we dont have that word in our data base.'))
            }

            reject(new Error('please use the word example, "Agua" or "Water"'))

        }, Math.random() * 1000)
    })
}

translate(word)
    .then(traducir => {
        console.log('La traduccion es: ', traducir)
        console.log('esto es true mi hermano')
    })
    .catch(error => {
        console.error(error.message)
    })