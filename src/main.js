function comprar(nombreDeMoneda, precioMoneda = 0, saldo) {
    let importePedido = Number(prompt('ingrese el monto que quiere comprar'))
    const tieneSaldo = validarSaldo(saldo, importePedido);
    const cantidadPedida = importePedido / precioMoneda
    if (tieneSaldo) {
        console.log(`Compraste ${cantidadPedida} de ${nombreDeMoneda} a ${importePedido}`);
    } else {
        console.log(`No tenes Saldo disponible`);
    }
}

comprar('Bitcoin', 39000, 1800)
comprar('Dai', 1.01,2000)

function validarSaldo(saldoPesos, importePedido) {
    if (saldoPesos > importePedido) {
        return true;
    } else {
        return false;
    }
}

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

vender('Bitcoin', 39000, 2000)

function validarSaldo(saldoPesos, importePedido) {
    if (saldoPesos > importePedido) {
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



// Array Monedas 
const monedas = [{
        id: "ARS",
        nombreDeMoneda: "Pesos Argentinos",
        precioMonedaUsd: 0.005274,
        precioMonedaArs: 1,
        comision: 0.0005,
        saldoMoneda: 10000,
    },
    {
        id: "DAI",
        nombreDeMoneda: "DAI",
        precioMonedaUsd: 1.007,
        precioMonedaArs: 189.60,
        comision: 0.0005,
        saldoMoneda: 100
    },
    {
        id: "BTC",
        nombreDeMoneda: "Bitcoin",
        precioMonedaUsd: 38804.71,
        precioMonedaArs: 7354200,
        comision: 0.001,
        saldoMoneda: 0.000005
    },
    {
        id: "ETH",
        nombreDeMoneda: "Ethereum",
        precioMonedaUsd: 2565.31,
        precioMonedaArs: 486400,
        comision: 0.001,
        saldoMoneda: 0.0006
    },
    {
        id: "LIT",
        nombreDeMoneda: "Litcoin",
        precioMonedaUsd: 1.13,
        precioMonedaArs: 214248,
        comision: 0.001,
        saldoMoneda: 252
    },
    {
        id: "USD",
        nombreDeMoneda: "Dolar Estadounidense",
        precioMonedaUsd: 1,
        precioMonedaArs: 189.60,
        comision: 0.0005,
        saldoMoneda: 1500
    },
]

// cards


let cardsGeneradas = ``;

monedas.forEach(moneda => {
    cardsGeneradas += `<div class="row">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${moneda.nombreDeMoneda}</h5>
                    <p class="card-text">${moneda.saldoMoneda} ${moneda.id}</p>
                </div>
            </div>
        </div>
    </div>`;
})

document.write(cardsGeneradas)

// funcion sumar saldo en usd 

let saldoTotalUsd = 0;

monedas.forEach(moneda => {
    saldoTotalUsd += (moneda.saldoMoneda * moneda.precioMonedaUsd)
})
console.log(`Tu saldo en Dolares es: ${saldoTotalUsd}`)


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


// todas las monedas de la wallet 

monedas.forEach(moneda => {
    console.log(moneda)
})