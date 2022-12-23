// calling elements html
const mainsetion = document.getElementById("main-section")
const elecionjugador = document.getElementById("ataqueelegido-jugador")
const elecionenemi = document.getElementById("ataqueelegido-enemigo")
const botonselecionar = document.getElementById("selecionar-ataque")

// creating variable
let h1 = `<h1>PIEDRA PAPEL O TIJERA</h1>`
let h2 = `<h2>ELIGE TU ATAQUE</h2>`
let buttom
let ataques = []
let inputpiedra
let inputpapel
let inputtijera

// creating classes
class Elementos {
    constructor(buttom) {
        this.buttom = buttom
    }
    aleatorio(min,max){// metodo que para nuemeros aleatorios
        return Math.floor(Math.random()*(max-min+1)+min)
    }
}

class Ataque {
    constructor (ataque, id) {
        this.ataque = ataque
        this.id = id
        this.vida = []
    }
}

let piedra = new Ataque("PIEDRA", "ataque-piedra")
let papel = new Ataque("PAPEL", "ataque-papel")
let tijera = new Ataque("TIJERA", "ataque-tijera")

piedra.vida.push(
    {cantida: "5"},
    {cantida: "3"},
    {cantida: "2"},
)

papel.vida.push(
    {cantida: "5"},
    {cantida: "3"},
    {cantida: "6"},
)

tijera.vida.push(
    {cantida: "7"},
    {cantida: "3"},
    {cantida: "2"},
)

ataques.push(piedra,papel,tijera)
console.log(ataques[2].ataque)


