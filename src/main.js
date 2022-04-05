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

function mostrarCardsEnElHTML(cards) {
    document.getElementById("saldos-monedas-index").innerHTML = cards
}


// funcion sumar saldo en usd 

const saldoTotalUsd2 = monedas.reduce((acc, saldoTotal) => acc + (saldoTotal.saldoMoneda * saldoTotal.precioMonedaUsd), 0)

let spotbalances = document.getElementById("SpotBalance")
spotbalances.innerText = `SpotBalance = USD ${saldoTotalUsd2.toFixed(6)}`



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


// ************************./INDEX HTML *********************************
