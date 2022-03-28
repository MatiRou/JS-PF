// Array Monedas 
const monedas = [{
        id: 1,
        nombreDeMoneda: "Pesos Argentinos",
        precioMonedaUsd: 0.005274,
        precioMonedaArs: 1,
        comision: 0.0005,
        saldoMoneda: 5000.000000,
        abreviatura: "ARS",
    },
    {
        id: 2,
        nombreDeMoneda: "DAI",
        precioMonedaUsd: 1.007,
        precioMonedaArs: 189.60,
        comision: 0.000500,
        saldoMoneda: 100,
        abreviatura: "DAI",
    },
    {
        id: 3,
        nombreDeMoneda: "Bitcoin",
        precioMonedaUsd: 38804.71,
        precioMonedaArs: 7354200,
        comision: 0.001,
        saldoMoneda: 0.001135,
        abreviatura: "BTC",
    },
    {
        id: 4,
        nombreDeMoneda: "Ethereum",
        precioMonedaUsd: 2565.31,
        precioMonedaArs: 486400,
        comision: 0.001,
        saldoMoneda: 0.000000,
        abreviatura: "ETH"
    },
    {
        id: 5,
        nombreDeMoneda: "Litcoin",
        precioMonedaUsd: 1.13,
        precioMonedaArs: 214248,
        comision: 0.001,
        saldoMoneda: 50.000000,
        abreviatura: "LTC"
    },
    {
        id: 6,
        nombreDeMoneda: "Dolar Estadounidense",
        precioMonedaUsd: 1,
        precioMonedaArs: 189.60,
        comision: 0.0005,
        saldoMoneda: 1500.000000,
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

const transaccionesRealizadas = JSON.parse(localStorage.getItem('transacciones')) || []

class TransaccionesRealizadas {
    constructor(id, nombreMonedaComprada, importeComprada, precioMonedaComprada, nombreMonedaPaga, importeMonedaPaga, fechaDeTrx) {
        this.id = id;
        this.nombreMonedaComprada = nombreMonedaComprada;
        this.importeComprada = importeComprada;
        this.precioMonedaComprada = precioMonedaComprada;
        this.nombreMonedaPaga = nombreMonedaPaga;
        this.importeMonedaPaga = importeMonedaPaga;
        this.fechaDeTrx = fechaDeTrx;
    }
}




// ************************** ./arrays *********************************

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

// ************************************************************************