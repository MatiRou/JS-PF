
function comprar(nombreDeMoneda, precioMoneda = 0, saldo, importePedido){
    const tieneSaldo = validarSaldo(saldo, importePedido);
    const cantidadPedida = importePedido / precioMoneda
    if(tieneSaldo){
        console.log(`Compraste ${cantidadPedida} de ${nombreDeMoneda} a ${importePedido}`);
    }else{
        console.log(`No tenes Saldo disponible`);
    }
}

comprar('Bitcoin', 39000, 1800, 1500)
comprar('Dai', 1.01,2000,1000)

function validarSaldo(saldoPesos, importePedido){
    if (saldoPesos > importePedido){
        return true;
    } else {
        return false;
    }
}

function vender(nombreDeMoneda, precioMoneda = 0, saldo, importePedido){
    const tieneSaldo = validarSaldo(saldo, importePedido);
    const cantidadPedida = importePedido / precioMoneda
    if(tieneSaldo){
        console.log(`Vendiste ${cantidadPedida} de ${nombreDeMoneda} a ${importePedido}`);
    }else{
        console.log(`No tenes Saldo disponible`);
    }
}

vender('Bitcoin', 39000, 2000, 1800)

function validarSaldo(saldoPesos, importePedido){
    if (saldoPesos > importePedido){
        return true;
    } else {
        return false;
    }
}