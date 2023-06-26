const urls = [
    { direction: 'https://example.com/respuesta1' },
    { direction2: 'https://example.com/respuesta2' },
    { direction3: 'https://example.com/respuesta3' }
  ];
  
  function tamanioTotalRespuesta(urls) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let tamanioTotal = 0;
  
        for (const objUrl of urls) {
          const url = Object.values(objUrl)[0];
          tamanioTotal += url.length;
        }
  
        resolve(tamanioTotal);
  
        reject(new Error('Fallo'));
      }, 3000);
    });
  }
  
  tamanioTotalRespuesta(urls)
    .then(tamanioTotal => {
      console.log('El tamaño total en bytes de las URLs obtenidas es:', tamanioTotal);
    })
    .catch(error => {
      console.error(error.message);
    });
  