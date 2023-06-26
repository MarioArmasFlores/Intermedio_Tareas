function suma(num1,num2){
    return new Promise((resolve,reject) => {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            reject(new Error('Los argumentos deben ser numeros, joven.'));
        }else{
            const result = num1 + num2;
            resolve(result);
        }
    })
}
suma(22, 27)
    .then(result => {
        console.log('El resultado es: ', result);
    })
    .catch(error => {
        console.error('Mi loco que ha hechoooo: ', error.message);
    })
