function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldSucceed = Math.random() < 0.5; // Genera un valor aleatorio entre 0 y 1

            if (shouldSucceed) {
                const data = {
                    id: 'IP address: 192.168.123.132.',
                    name: ' Acer Aspire 3 A315-51-364e - Device',
                    description: 'Craking succeed. We have access to the victims device.',
                };
                resolve(data);
            } else {
                reject(new Error(`Something happened. We could not get any data from the device`));
            }
        }, 2000);
    });
}

getData()
    .then(data => {
        console.log('Datos obtenidos:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
