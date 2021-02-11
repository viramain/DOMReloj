// ejecutar una funcion luego de un tiempo. 
// window.setTimeout(funcion a ejecutar,tiempo en milisegundos)


function saludar() {
    document.write(`Hola <br>`);
}

// window.setTimeout(saludar, 2000);

// ejecutar una funcion cada cierto tiempo en milisegundos
//window.setInterval(funcion a ejecutar,tiempo en milisegundos)
// let intervalo = window.setInterval(saludar, 3000);
window.setInterval(saludar, 3000);

// se debe pasar una variable con el valor de la funcion
// window.clearInterval(intervalo)