const ultimosMovimientos = JSON.parse(localStorage.getItem("transacciones"));
console.log(ultimosMovimientos);

generarListadoSaldos(ultimosMovimientos);

function generarListadoSaldos(movimientosAGenerar) {
    let listadosMovimientosGenerados = ``;
    movimientosAGenerar.forEach(elementoDelArray => {
        listadosMovimientosGenerados += `
        <li>${elementoDelArray.id} : fecha de movimiento = "${elementoDelArray.fechaDeTrx}" ha comprado "${elementoDelArray.nombreMonedaComprada}" por un valor de $ ${elementoDelArray.importeComprada} pagando con la moneda: "${elementoDelArray.nombreMonedaPaga}" por el importe de $ ${elementoDelArray.importeMonedaPaga}</li>
        `;
    });
    mostrarListadoSaldosEnHTML(listadosMovimientosGenerados);
}

function mostrarListadoSaldosEnHTML(movs) {
    document.getElementById("ultimos-movimientos").innerHTML = movs
}