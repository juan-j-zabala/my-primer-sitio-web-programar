// creacion y uso de funcion-flujo del juego
function iniciodeljuego () {
    mainsetion.innerHTML = h1 + h2
    botonreinciar.style.display = "none"
    resultado_final.style.display = "none"
    
    creandoelementohtml()

}

function creandoelementohtml () {
    ataques.forEach((elecciones) => {
        buttom = `
        <input type="radio" name="eleccion" id=${elecciones.id}>
        <label class="boton-seleccion-ataques" for=${elecciones.id}>
            <p>${elecciones.ataque}</p>
        </label>
        `
        mainsetion.innerHTML += buttom
        // console.log(piedra.id)
        inputpiedra = document.getElementById("ataque-piedra")
        inputpapel = document.getElementById("ataque-papel")
        inputtijera = document.getElementById("ataque-tijera")   
    })
    botonselecionar.addEventListener("click",elegirunataque)
    
}

function elegirunataque () { // funcion para que el jugador eliga ataque
    if (inputpiedra.checked) {
        elecionjugador.innerHTML = piedra.ataque
        resultadocombatejugador = piedra.ataque
    }else if (inputpapel.checked) {
        elecionjugador.innerHTML = papel.ataque
        resultadocombatejugador = papel.ataque
    }else if (inputtijera.checked) {
        elecionjugador.innerHTML = tijera.ataque
        resultadocombatejugador = tijera.ataque
    }else {
        alert("no haz elegido una mascota")
        return
    }
    elecionenemigo()
}

function elecionenemigo () {// funcion aleatoria de ataque del "enemigo-makina"
    let enemigomaquina = aleatorio(0,ataques.length -1)
    elecionenemi.innerHTML = ataques[enemigomaquina].ataque
    resultadocombateenemigo = ataques[enemigomaquina].ataque

    resultadocombate()
}

function resultadocombate () {
    if (resultadocombatejugador === resultadocombateenemigo) {
        resultado_combate.innerHTML = puntuaciones.empate
    }else if (resultadocombatejugador === piedra.ataque && resultadocombateenemigo === tijera.ataque 
        || resultadocombatejugador === papel.ataque && resultadocombateenemigo === piedra.ataque 
        || resultadocombatejugador === tijera.ataque && resultadocombateenemigo === papel.ataque) {
            resultado_combate.innerHTML = puntuaciones.victoria
            victoriasjuagador += 1
            htmlvictoriasjugador.innerHTML = victoriasjuagador
            htmlderrotasenemigo.innerHTML = victoriasjuagador
        }else {
        resultado_combate.innerHTML = puntuaciones.derrota
        victoriasenemigo += 1
        htmlvictoriasenemigo.innerHTML = victoriasenemigo
        htmlderrotasjugador.innerHTML = victoriasenemigo
    }
    resultadofinal()
}

function resultadofinal () {
    if (victoriasjuagador === 3 || victoriasenemigo === 3) {
        botonselecionar.style.display = "none"
        mainsetion.style.display = "none"
        elecionjugador.style.display = "none"
        elecionenemi.style.display = "none"
        infohtmljugador.innerHTML = "JUGADOR"
        infohtmlenemigo.innerHTML = "ENEMIGO"
        resultado_final.style.display = "block"

        if (victoriasjuagador > victoriasenemigo) {
            resultado_final.innerHTML = puntuaciones.ganaste
        }else if (victoriasjuagador < victoriasenemigo) {
            resultado_final.innerHTML = puntuaciones.perdiste
        }
    }
    botonreinciar.style.display = "block"
    botonreinciar.addEventListener("click",reiniciarjuego)
}

function reiniciarjuego () {
    location.reload()
}

function aleatorio(min,max){// funtion para generar nuemero aleatorios
    return Math.floor(Math.random()*(max-min+1)+min)
}

iniciodeljuego()// el flujo del juego comeinza llamando esta funcion
