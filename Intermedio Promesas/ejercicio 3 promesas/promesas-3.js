function getUserData(nameUser, idUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!/^0404\d{4}$/.test(idUser)) { //la IDUSER tiene que empezar con 0404 si o si para que sea valido.
        reject(new Error(`wrong ID`))
      } else {
        let message = 'Good Morning ' + nameUser
        resolve(message);
      }

    }, Math.random() * 1000)
  })
}
getUserData('Mario', '04041111')
  .then(message => {
    console.log(message);
  })
  .catch( error => {
    console.error(error.message)
  })