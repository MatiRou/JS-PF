// ******************** COMPRAR.HTML ********************************************
document.getElementById("btn-comprar").addEventListener("click",() => comprar());


// listado saldos

generarListadoSaldos(monedas);

function generarListadoSaldos(listadosAGenerar) {
    let listadosSaldoGenerados = ``;
    listadosAGenerar.forEach(elementoDelArray => {
        if (elementoDelArray.saldoMoneda > 0) {
            listadosSaldoGenerados += `
        <li>${elementoDelArray.nombreDeMoneda} : ${elementoDelArray.saldoMoneda} ${elementoDelArray.abreviatura}</li>
        `;
        }
    });
    mostrarListadoSaldosEnHTML(listadosSaldoGenerados);
}

function mostrarListadoSaldosEnHTML(listado) {
    document.getElementById("saldos-compra").innerHTML = listado
}

// ./listado saldos

// LISTADOS MONEDAS


listadoMonedas(monedas);

function listadoMonedas(listadosMonedasAGenerar) {
    let listadoGenerado = ``;
    listadosMonedasAGenerar.forEach(elementoDelArray => {
        listadoGenerado += `
        <option value="${elementoDelArray.id}">${elementoDelArray.abreviatura}</option>
        `;
    });
    mostrarListadoEninnerHTMLById("comprar", listadoGenerado);
    mostrarListadoEninnerHTMLById("pagarcompra", listadoGenerado);
}

function mostrarListadoEninnerHTMLById(id, lista) {
    document.getElementById(id).innerHTML = lista
}

// ./listado monedas


// CONVERTIR 

function convertir() {
    const idMonedaCompra = document.getElementById("comprar").value;
    const valor = parseFloat(document.getElementById("importePedido").value);
    const idMonedaPaga = document.getElementById("pagarcompra").value;
    const monedaSeleccionada = monedas.find(monedaC => monedaC.id == idMonedaCompra);
    const monedaPagar = monedas.find(monedaP => monedaP.id == idMonedaPaga);
    // const tieneSaldo = validarSaldo(monedaPagar.saldoMoneda, monedaPagar.precioMonedaUsd, valor, monedaSeleccionada.precioMonedaUsd);
    const tieneSaldo = ((monedaPagar.saldoMoneda * monedaPagar.precioMonedaUsd)>(valor * monedaSeleccionada.precioMonedaUsd)) ? true : false
    const cotizador = (monedaSeleccionada.precioMonedaUsd / monedaPagar.precioMonedaUsd);
    const cotizacionTitulo = `Cotizacion: ${monedaSeleccionada.abreviatura} / ${monedaPagar.abreviatura}`
    if (valor > 0) {
        tieneSaldo ? resultado = ((valor * monedaSeleccionada.precioMonedaUsd) / monedaPagar.precioMonedaUsd) : resultado = "no tiene saldo disponible";
    } else {
        resultado = "Ingrese el monto que quiera comprar"
    }
    document.getElementById("conversion-moneda-pagar").innerHTML = resultado;
    document.getElementById("cotizacion").innerHTML = cotizador;
    document.getElementById("cotizacion-titulo").innerHTML = cotizacionTitulo;
}

// function validarSaldo(saldo, precioC, importePedido, precioP) {
//     if ((saldo * precioC) > (importePedido * precioP)) {
//         return true;
//     } else {
//         return false;
//     }
// }


// ./convertir

// Comprar **** siguiente funcion a desarrollar. 



function comprar() {
    const idMonedaCompra = document.getElementById("comprar").value;
    const valor = parseFloat(document.getElementById("importePedido").value);
    const idMonedaPaga = document.getElementById("pagarcompra").value;
    const monedaSeleccionada = monedas.find(monedaC => monedaC.id == idMonedaCompra);
    const monedaPagar = monedas.find(monedaP => monedaP.id == idMonedaPaga);
    const importeMonedaPaga = document.getElementById("conversion-moneda-pagar").innerHTML;
    const precioMonedaComprada = monedaSeleccionada.precioMonedaUsd;
    const fechaDeTrx = new Date();
    const idDeTrx = transaccionesRealizadas.length + 1;
    // const tieneSaldo = validarSaldo(monedaPagar.saldoMoneda, monedaPagar.precioMonedaUsd, valor, monedaSeleccionada.precioMonedaUsd);
    const tieneSaldo = ((monedaPagar.saldoMoneda * monedaPagar.precioMonedaUsd)>(valor * monedaSeleccionada.precioMonedaUsd)) ? true : false
    if (tieneSaldo) {
        const trx = new TransaccionesRealizadas (idDeTrx, monedaSeleccionada.nombreDeMoneda, valor, precioMonedaComprada, monedaPagar.nombreDeMoneda, importeMonedaPaga, fechaDeTrx)
        transaccionesRealizadas.push(trx)
        localStorage.setItem("transacciones", JSON.stringify(transaccionesRealizadas));
        transaccionResultante = `<div> Su operacion ha sido exitosa: </div>`;
        monedaSeleccionada.saldoMoneda = monedaSeleccionada.saldoMoneda + valor;
        monedaPagar.saldoMoneda = monedaPagar.saldoMoneda - importeMonedaPaga;
    } else {
        transaccionResultante = `<div>No tiene saldo para realizar esta operacion.</div>`;
    }
    console.log(localStorage.getItem("transacciones"));
    document.getElementById("modal-texto").innerHTML = transaccionResultante
}

// ******************* ./ COMPRAR.HTML ********************************