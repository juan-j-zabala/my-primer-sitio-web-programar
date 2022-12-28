// calling elements html
const mainsetion = document.getElementById("main-section")
const elecionjugador = document.getElementById("ataqueelegido-jugador")
const elecionenemi = document.getElementById("ataqueelegido-enemigo")
const botonselecionar = document.getElementById("selecionar-ataque")
const resultado_combate = document.getElementById("resultado-combate")
const htmlvictoriasjugador = document.getElementById("victorias-jugador")
const htmlderrotasjugador = document.getElementById("derrotas-jugador")
const htmlvictoriasenemigo = document.getElementById("victorias-enemigo")
const htmlderrotasenemigo = document.getElementById("derrotas-enemigo")
const resultado_final = document.getElementById("resultado-final")
const infohtmljugador = document.getElementById("infotextojugador")
const infohtmlenemigo = document.getElementById("infotextoenemigo")
const botonreinciar = document.getElementById("reiniciar")

// creating variable
let inputpapel = document.getElementById("ataque-papel")
let inputtijera = document.getElementById("ataque-tijera")   
let inputpiedra = document.getElementById("ataque-piedra")
let buttom
let ataques = []
let resultadocombatejugador
let resultadocombateenemigo
let victoriasjuagador = 0
let victoriasenemigo = 0

// creating classes
class Puntuaciones {
    constructor() {
        // datos para resultado combate
        this.derrota = "HAZ SIDO DERROTA!!😭",
        this.victoria = "TIENES LA VICTORIA!!😎",
        this.empate = "EMPATASTE 😐",
        //datos para resultado final
        this.ganaste = "GANASTE!!",
        this.perdiste = "PERDISTE"
    }
}

let puntuaciones = new Puntuaciones

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

ataques.push(piedra,papel,tijera)



