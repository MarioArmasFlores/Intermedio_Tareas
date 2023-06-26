function getWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let weather;
            if (city === "Cucuta") {
                weather = 'sunny and hot as hell. '
                resolve(weather);
            } else if (city === "Bogota") {
                weather = 'cold and cloudy'
                resolve(weather);
            } else if (city == "Bucaramanga") {
                weather = 'heavy rain all the day long'
                resolve(weather)
            } else {
                console.log('no tenemos informacion de eso aun.')
            }

            reject ( new Error('there is no founds related to', city))

        }, Math.random() * 1000)
    })
}

getWeather("Cucuta")
    .then(weather => {
        console.log(weather)
        console.log('true')
    })
    .catch(error => {
        console.error(error.message)
    });