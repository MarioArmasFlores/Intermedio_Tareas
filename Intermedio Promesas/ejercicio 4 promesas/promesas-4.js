const nameUser = prompt('Ingresa tu usuario');
const passwordUser = parseInt(prompt('Ingresa tu contraseña'));

function login(nameUser, passwordUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(passwordUser)) {
        resolve(false); //  false si la contraseña no es un número
      } else {
        resolve(true); // true si las credenciales son válidas
      }
    }, 0 | Math.random() > 0.5 * 1000); //esto no estoy seguro si funciona
  });
}

login(nameUser, passwordUser)
  .then(response => {
    if (response) {
      let welcomeMessage = `Welcome ${nameUser}! You are logged in now!`;
      console.log(welcomeMessage);
    } else {
      console.log("Invalid credentials. Login failed."); 
    }
  })
  .catch(error => {
    console.error(error.message);
  });