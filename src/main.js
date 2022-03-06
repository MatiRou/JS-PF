
function comprar(nombreDeMoneda, precioMoneda = 0, saldo){
    let importePedido = Number(prompt('ingrese el monto que quiere comprar'))
    const tieneSaldo = validarSaldo(saldo, importePedido);
    const cantidadPedida = importePedido / precioMoneda
    if(tieneSaldo){
        console.log(`Compraste ${cantidadPedida} de ${nombreDeMoneda} a ${importePedido}`);
    }else{
        console.log(`No tenes Saldo disponible`);
    }
}

comprar('Bitcoin', 39000, 1800)
comprar('Dai', 1.01,2000)

function validarSaldo(saldoPesos, importePedido){
    if (saldoPesos > importePedido){
        return true;
    } else {
        return false;
    }
}

function vender(nombreDeMoneda, precioMoneda = 0, saldo){
    let importePedido = Number(prompt('ingrese el monto que quiere vender'))
    const tieneSaldo = validarSaldo(saldo, importePedido);
    const cantidadPedida = importePedido / precioMoneda
    if(tieneSaldo){
        console.log(`Vendiste ${cantidadPedida} de ${nombreDeMoneda} a ${importePedido}`);
    }else{
        console.log(`No tenes Saldo disponible`);
    }
}

vender('Bitcoin', 39000, 2000)

function validarSaldo(saldoPesos, importePedido){
    if (saldoPesos > importePedido){
        return true;
    } else {
        return false;
    }
}