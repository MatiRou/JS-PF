// ******************** COMPRAR.HTML ********************************************

// listado saldos

generarListadoSaldos(monedas);

function generarListadoSaldos(listadosAGenerar) {
    let listadosSaldoGenerados = ``;
    listadosAGenerar.forEach(elementoDelArray => {
        listadosSaldoGenerados += `
        <li>${elementoDelArray.nombreDeMoneda} : ${elementoDelArray.saldoMoneda} ${elementoDelArray.abreviatura}</li>
        `;
    });
    mostrarListadoSaldosEnHTML(listadosSaldoGenerados);
}

function mostrarListadoSaldosEnHTML(listado) {
    document.getElementById("saldos-compra").innerHTML = listado
}

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
    // mostrarListadoEnHTML2(listadoGenerado);
}    

function mostrarListadoEninnerHTMLById(id, lista) {
    document.getElementById(id).innerHTML = lista
}

// ************


// ****************************

function convertir() {
    const idMonedaCompra = document.getElementById("comprar").value;
    const valor = parseFloat(document.getElementById("importePedido").value);
    const idMonedaPaga = document.getElementById("pagarcompra").value;
    const monedaSeleccionada = monedas.find(monedaC => monedaC.id == idMonedaCompra);
    const monedaPagar = monedas.find(monedaP => monedaP.id == idMonedaPaga);
    const tieneSaldo = validarSaldo(monedaPagar.saldoMoneda, monedaPagar.precioMonedaUsd ,valor ,monedaSeleccionada.precioMonedaUsd);
    const cotizador = (monedaSeleccionada.precioMonedaUsd / monedaPagar.precioMonedaUsd);
    const cotizacionTitulo = `Cotizacion: ${monedaSeleccionada.abreviatura} / ${monedaPagar.abreviatura}`
    if (valor > 0) {
        if (tieneSaldo) {
            resultado = ((valor * monedaSeleccionada.precioMonedaUsd) / monedaPagar.precioMonedaUsd);
        } else {
            resultado = "no tiene saldo disponible"
        }
    } else {
        resultado = "Ingrese el monto que quiera comprar"
    }
    document.getElementById("conversion-moneda-pagar").innerHTML = resultado;
    document.getElementById("cotizacion").innerHTML = cotizador;
    document.getElementById("cotizacion-titulo").innerHTML = cotizacionTitulo;
}

function validarSaldo(saldo, precioC, importePedido, precioP) {
    if ((saldo * precioC) > (importePedido * precioP)) {
        return true;    
    } else {
        return false;    
    }
}


// Comprar **** siguiente funcion a desarrollar. 

const transaccionesRealizadas = []



// ******************* ./ COMPRAR.HTML ********************************