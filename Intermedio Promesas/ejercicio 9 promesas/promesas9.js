
//tres opciones, calle Gus, Harleen y 93



/*  de la calle gus la calle Harleen: toma la calle A, gira a la calle B, 100 metros, 1min */
/* de la calle Gus a la 93 : toma la calle E 2min pasa por el tunnel Marcus, dobla en la calle 12A*/
/*  de la calle Harleen a la 93: toma la calle B  1min toma la diagonal Stalone 20metros*/


const origin = prompt("Escribe el Origen por favor.").toUpperCase();
const destiny = prompt(" Escribe el Destino por favor.").toUpperCase();



function getDirections(origin, destiny) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let direction;

            if (origin === "GUS" && destiny === "HARLEEN") {

                direction = {
                    street: 'toma la calle A',
                    duration: ' 1 minuto',
                    street2: 'gira a la derecha en la calle D',
                    distance: '200 metros.'
                }
                resolve(direction)


            } else if (origin === "GUS" && destiny === "93") {

                direction = {
                    street: 'toma la calle B',
                    duration: ' 1 minuto',
                    street2: 'gira a la derecha en la diagonal Stalone',
                    distance: '20 metros.'
                }
                resolve(direction)

            } else if (origin === "HARLEEN" && destiny === "GUS") {

                direction = {
                    street: 'toma la calle E',
                    duration: ' 2 minuto',
                    street2: 'pasa por el tunel Marcus',
                    distance: '100 metros.'
                }
                resolve(direction)

            } else if (origin === "HARLEEN" && destiny === "93") {

                direction = {
                    street: 'toma la calle F',
                    duration: ' 2 minuto',
                    street2: 'gira a la izquierda en la calle D',
                    distance: '300 metros.'
                }
                resolve(direction)

            } else if (origin === "93" && destiny === "GUS") {

                direction = {
                    street: 'toma la calle Romulo',
                    duration: ' 3 minuto',
                    street2: 'gira a la derecha en la calle D',
                    distance: '200 metros.'
                }
                resolve(direction)

            } else if (origin === "93" && destiny === "HARLEEN") {

                direction = {
                    street: 'toma la calle ScarFace',
                    duration: ' 10 minutos',
                    street2: 'gira a la derecha en la calle Gus',
                    distance: '300 metros.'
                }
                resolve(direction)

            } else {
                console.log("Buscando direcciones...")
            }

            reject(new Error('la ubcacion que ingresaste no esta dentro del grupo de direcciones para este ejercicio.'))

        }, Math.random() * 1000)
    })
}

getDirections(origin, destiny)
    .then( direction => {
        console.log('recomendacion de ruta:')
        console.log(direction.street, direction.duration, direction.street2, direction.distance)
    })
    .catch( error => {
        console.log(error.message);
    })