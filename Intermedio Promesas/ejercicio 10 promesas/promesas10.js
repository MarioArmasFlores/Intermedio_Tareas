
function getUserData(idUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let baseInfo = {
                nombre: 'Bruce Wayne',
                email: 'imBatman123@gmail.com',
                city: 'Gotham City'
            }
            if (idUser.toString().length === 4) {
                resolve(baseInfo);
            } else {
                console.log("something's wrong. The Id must be only 4 characters.")
            }

            reject(new Error('Invalid credencials.'))


        }, 2000)
    })
}

/* getUserData(1234)
    .then(baseInfo => {
        console.log('nombre: ', baseInfo.nombre)
        console.log('email: ', baseInfo.email)
        console.log('ciudad de recidencia: ', baseInfo.city)
    })
    .catch(error => {
        console.error(error.message)
    }); */



//getusertweets

function getUserTweets(nickname) {
    return new Promise((resolve, reject) => {
        console.log('Accessing to Twitter Data Base.'); // Mover este console.log antes del primer setTimeout

        setTimeout(() => {
            console.log(`accessing to the last 5 tweets posted by user ${nickname}`);
        }, 8000);

        setTimeout(() => {
            let lastTweets = {
                one: `${nickname}: "all girls all the same - Juice Wrld 🎶. [19:40]"`,
                two: `${nickname}: "Lucid Dreams - Juice Wrld 🎶. [20:00]"`,
                three: `${nickname}: "Stockholm Syndrome - Muse 🎶. [20:06]"`,
                four: `${nickname}: "Self Love - Metro Boomin 🎶. [22:30]"`,
                five: `${nickname}: "El triste - Jose Jose </3  🎶. [23:58]"`
            };
            resolve(lastTweets);
        }, 10000);

        setTimeout(() => {
            reject(new Error('Error 404!'));
        }, 11000); // Mover este setTimeout al final

    });
}

/* getUserTweets("ArmasFloresM2000")
    .then(lastTweets => {
        console.log(lastTweets.one, lastTweets.two, lastTweets.three, lastTweets.four, lastTweets.five);
    })
    .catch(error => {
        console.error(error.message);
    }); */


//getuserage

function getAgeUser(day, month, year) {
    return new Promise((resolve, reject) => {
        console.log('calculando edad...')
        setTimeout(() => {
            let current = new Date();

            const currentDay = current.getDate(); // Usar getDate() en lugar de getDay()
            const currentMonth = current.getMonth() + 1; // Agregar 1 al resultado de getMonth()
            const currentYear = current.getFullYear();

            let differenceYear = currentYear - year; // Cambiar el orden de la resta

            let age = differenceYear;

            if (currentMonth < month) {
                age -= 1;
            } else if (currentMonth === month) {
                if (currentDay < day) {
                    age -= 1;
                }
            }

            resolve(age); // Resolver la promesa con la edad calculada

            reject(new Error('error'))

        }, 5000)
    });

}

function getUserInfo(getUserData, getAgeUser, getUserTweets) {
    console.log('Recuperando información...');

    Promise.all([getUserData(1234), getAgeUser(10, 11, 2000), getUserTweets("ArmasFloresM2000")])
        .then(([userData, age, tweets]) => {
            console.log('Información del usuario:');
            console.log('Nombre:', userData.nombre);
            console.log('Email:', userData.email);
            console.log('Ciudad:', userData.city);
            console.log('Edad:', age);
            console.log('Últimos tweets:', tweets);
        })
        .catch(error => {
            console.error(error.message);
        });
}

getUserInfo(getUserData, getAgeUser, getUserTweets);





