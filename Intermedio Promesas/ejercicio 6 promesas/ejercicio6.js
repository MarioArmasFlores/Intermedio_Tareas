function getPromiseFile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemFile = {
                fileName: 'nav_data.exe',
                fileSize: '2GB',
                url: 'https://chat.openai.com/c/57ba1580-1036-466b-9d72-7c8cb006991f'
            };
            resolve(itemFile);

            // No se alcanzará esta línea porque ya se resolvió la promesa en el paso anterior
            // reject(new Error('Error 404.'));
        }, Math.random() * 1000);
    });
}

function uploadFile(nombreArchivo, getPromiseFile) {
    getPromiseFile()
        .then(itemFile => {
            console.log(`hemos generado el enlace de descarga para el archivo ${itemFile.fileName}, ${itemFile.fileSize}`)
            console.log(`URL: ${itemFile.url}`)
            console.log('true')
        })
        .catch(error => {
            console.error(error.message);
            console.log('false')
        });
}

uploadFile("AutoCAD2023", getPromiseFile);
