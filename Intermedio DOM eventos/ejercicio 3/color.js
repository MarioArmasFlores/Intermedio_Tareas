const cambiarColorBtn1 = document.getElementById('boton-rojo');
const cambiarColorBtn2 = document.getElementById('boton-azul');
const cambiarColorBtn3 = document.getElementById('boton-oro');
const cambiarColorBtn4 = document.getElementById('boton-morado');
const miDiv = document.getElementById('cambio-color');

cambiarColorBtn1.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#950404');
});

cambiarColorBtn2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#2e2e6d');
});

cambiarColorBtn3.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#ffd700');
});

cambiarColorBtn4.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#800080');
});