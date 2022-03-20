// Array Monedas 
const monedas = [{
        id: 1,
        nombreDeMoneda: "Pesos Argentinos",
        precioMonedaUsd: 0.005274,
        precioMonedaArs: 1,
        comision: 0.0005,
        saldoMoneda: 0,
        abreviatura: "ARS",
    },
    {
        id: 2,
        nombreDeMoneda: "DAI",
        precioMonedaUsd: 1.007,
        precioMonedaArs: 189.60,
        comision: 0.0005,
        saldoMoneda: 100,
        abreviatura: "DAI",
    },
    {
        id: 3,
        nombreDeMoneda: "Bitcoin",
        precioMonedaUsd: 38804.71,
        precioMonedaArs: 7354200,
        comision: 0.001,
        saldoMoneda: 0.000005,
        abreviatura: "BTC",
    },
    {
        id: 4,
        nombreDeMoneda: "Ethereum",
        precioMonedaUsd: 2565.31,
        precioMonedaArs: 486400,
        comision: 0.001,
        saldoMoneda: 0.0006,
        abreviatura: "ETH"
    },
    {
        id: 5,
        nombreDeMoneda: "Litcoin",
        precioMonedaUsd: 1.13,
        precioMonedaArs: 214248,
        comision: 0.001,
        saldoMoneda: 0,
        abreviatura: "LTC"
    },
    {
        id: 6,
        nombreDeMoneda: "Dolar Estadounidense",
        precioMonedaUsd: 1,
        precioMonedaArs: 189.60,
        comision: 0.0005,
        saldoMoneda: 1500,
        abreviatura: "USD"
    },
]

const precioVenta = monedas.map((monedasVenta) => {
    return {
        id: monedasVenta.id,
        nombreDeMoneda: monedasVenta.nombreDeMoneda,
        precioMonedaUsd: monedasVenta.precioMonedaUsd / 0.976951283,
        precioMonedaArs: monedasVenta.precioMonedaArs / 0.976951283,
        comision: monedasVenta.comision,
        saldoMoneda: monedasVenta.saldoMoneda
    }
})

console.log(precioVenta)




// ***************************************************************************


generarCard(monedas);

function generarCard(monedas) {
    let cardsGeneradas = ``;
    // const saldoValidado = monedas.saldoMoneda > 0 ? "true" : "false";
    monedas.forEach(elementoDelArray => {
        if (elementoDelArray.saldoMoneda > 0){
            cardsGeneradas += `
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${elementoDelArray.nombreDeMoneda}</h5>
                        <p class="card-text">${elementoDelArray.saldoMoneda} ${elementoDelArray.abreviatura}</p>
                    </div>
                </div>
            </div>`;
        } else{
            cardsGeneradas += ``
        }
    });
    mostrarCardsEnElHTML(cardsGeneradas);
}

function mostrarCardsEnElHTML (cards) {
    document.getElementById("saldos-monedas-index").innerHTML =cards
}

function validadorSaldo (monedas) {
    if (monedas.saldoMoneda > 0){
        return true;
    } else {
        return false;
    }
}

// class Crypto {
    //     constructor(id, nombre, precioMonedaUsd, precioMonedaArs , comision, saldoMoneda){
//         this.id = id
//         this.nombre = nombre;
//         this.precioMoneda = precioMonedaUsd;
//         this.precioMonedaArs = precioMonedaArs;
//         this.comision = comision;
//         this.saldoMoneda = saldoMoneda;
//     }
// }

// const btc = new Crypto(1,"Bitcoin", 38804.71, 7354200, 0.001, 0)
// const dai = new Crypto(2,"Dai", 1.007, 189.60, 0.0005, 0)
// const ars = new Crypto(3,"Peso Argentino",0.0052, 1, 0.0005, 0)
// const eth = new Crypto(4,"Ethereum",2565.31, 486400, 0.001, 0)
// const lit = new Crypto(5,"Litocoin",1.13 , 214248 , 0.001, 0)
// const usd = new Crypto(6,"Dolar Estadounidense", 1, 189.60, 0.0005, 0)    




// ******************** COMPRAR.HTML ********************************************

// LISTADOS MONEDAS

listadoMonedas(monedas);

function listadoMonedas(monedas) {
    let listadoGenerado = ``;
    monedas.forEach(elementoDelArray => {
        listadoGenerado += `
        <option value="${elementoDelArray.abreviatura}">${elementoDelArray.abreviatura}</option>
        `;
    });
    mostrarListadoEnHTML(listadoGenerado);
}
function mostrarListadoEnHTML (lista) {
    document.getElementById("comprar").innerHTML = lista
}



// funcion comprar 

function comprar() {
    const importePedido = document.getElementById("cantidadCompra").value
    const tieneSaldo = validarSaldo(saldo, importePedido);
    const cantidadPedida = importePedido / precioMoneda
    if (tieneSaldo) {
        console.log(`Compraste ${cantidadPedida} de ${nombreDeMoneda} a ${importePedido}`);
    } else {
        console.log(`No tenes Saldo disponible`);
    }
}

// comprar('Bitcoin', 39000, 1800)
// comprar('Dai', 1.01,2000)

function validarSaldo(saldoPesos, importePedido) {
    if (saldoPesos > importePedido) {
        return true;
    } else {
        return false;
    }
}




// ********************************************************************

// ******************* VENDER HTML ************************************

function vender(nombreDeMoneda, precioMoneda = 0, saldo) {
    let importePedido = Number(prompt('ingrese el monto que quiere vender'))
    const tieneSaldo = validarSaldo(saldo, importePedido);
    const cantidadPedida = importePedido / precioMoneda
    if (tieneSaldo) {
        console.log(`Vendiste ${cantidadPedida} de ${nombreDeMoneda} a ${importePedido}`);
    } else {
        console.log(`No tenes Saldo disponible`);
    }
}

// vender('Bitcoin', 39000, 2000)

function validarSaldo(saldoPesos, importePedido) {
    if (saldoPesos > importePedido) {
        return true;
    } else {
        return false;
    }
}

// ************************************************************************

// ********************** INDEX HTML **************************************

// cardsSaldos

generarCard(monedas);

function generarCard(monedas) {
    let cardsGeneradas = ``;
    monedas.forEach(elementoDelArray => {
        cardsGeneradas += `
        <div class="col-sm-6">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${elementoDelArray.nombreDeMoneda}</h5>
        <p class="card-text">${elementoDelArray.saldoMoneda} ${elementoDelArray.abreviatura}</p>
                    </div>
                    </div>
            </div>`;
        });
        mostrarCardsEnElHTML(cardsGeneradas);
    }

    function mostrarCardsEnElHTML (cards) {
        document.getElementById("saldos-monedas-index").innerHTML =cards
    }

    
    // funcion sumar saldo en usd 

const saldoTotalUsd2 = monedas.reduce((acc, saldoTotal) => acc + (saldoTotal.saldoMoneda * saldoTotal.precioMonedaUsd), 0)

let spotbalances = document.getElementById("SpotBalance")
spotbalances.innerText = `SpotBalance = USD ${saldoTotalUsd2}`



// variable y funcion de favoritos 
const favoritos = []

const agregarFavoritos = (monedas) => {
    favoritos.push(monedas)
}

// agregar a favoritos 

agregarFavoritos(monedas[0]);
console.log(favoritos)

agregarFavoritos(monedas[2]);
console.log(favoritos);

