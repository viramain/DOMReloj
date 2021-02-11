// obtiene la fecha y la muestra por pantalla
function obtenerFecha() {
    // let fecha = new Date();
    // let horas = fecha.getHours();
    // let minutos = fecha.getMinutes();
    // let segundos = fecha.getSeconds();

    // otra forma de crear variables: separados por , y al final ;
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    // traigo los elementos html necesarios para escribir la fecha    
    let pHoras = document.getElementById(`horas`),
        pMinutos = document.getElementById(`minutos`),
        pSegundos = document.getElementById(`segundos`),
        pDiaSemana = document.getElementById(`diaSemana`),
        pNumDia = document.getElementById(`numDia`),
        pMes = document.getElementById(`mes`),
        pAnio = document.getElementById(`anio`);

    // modifico el texto para la fecha actual
    let diasSemana = [`Domingo`, `Lunes`, `Martes`, `Miércoles`, `Jueves`, `viernes`, `Sábado`];
    pDiaSemana.innerHTML = diasSemana[fecha.getDay()];
    pNumDia.innerHTML = fecha.getDate();

    let meses = [`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`, `Junio`, `Julio`, `Agosto`, `Septiembre`, `Octubre`, `Noviembre`, `diciembre`]
    pMes.innerHTML = meses[fecha.getMonth()];
    pAnio.innerHTML = fecha.getFullYear();

    // asigno los valores a la hora. Completo con "0" el primer digito cuando es <10
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;
    // meses de 0 (enero) a 11
    // console.log(fecha.getMonth());
    // dia de la semana de 0 (domingo) a 6
    // console.log(fecha.getDay());
    // nro del dia
    // console.log(fecha.getDate());
    // año
    // console.log(fecha.getFullYear());
}

function cambiarColor(color) {
    let section = document.getElementById(`contenedorPrincipal`);
    console.log(section);
    if (color == "pink") {
        section.className = "mt-5 w-75 neon-pink"
    }
    if (color == "yellow") {
        section.className = "mt-5 w-75 neon-yellow"
    }
    if (color == "green") {
        section.className = "mt-5 w-75 neon-green"
    }
}

//--- BOM ----
window.setTimeout(obtenerFecha, 0);
window.setInterval(obtenerFecha, 1000);