// creacion y uso de funcion-flujo del juego
function iniciodeljuego () {
    mainsetion.innerHTML = h1 + h2
    
    console.log(ataques.length)
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
        
        // console.log(elecciones.ataque)
    })
    botonselecionar.addEventListener("click",elegirunataque)
    
}

function elegirunataque () { // funcion para que el jugador eliga ataque
    if (inputpiedra.checked) {
        elecionjugador.innerHTML = piedra.ataque
        alert("problema")
    }else if (inputpapel.checked) {
        elecionjugador.innerHTML = papel.ataque
    }else if (inputtijera.checked) {
        elecionjugador.innerHTML = tijera.ataque
    }else {
        alert("no haz elegido una mascota")
        return
    }
    elecionenemigo()
}

function elecionenemigo () {// funcion aleatoria de ataque del "enemigo-makina"
    let enemigomaquina = aleatorio(0,ataques.length -1)
    elecionenemi.innerHTML = ataques[enemigomaquina].ataque
    console.log(ataques[enemigomaquina].ataque)
}

function aleatorio(min,max){// funtion para generar nuemero aleatorios
    return Math.floor(Math.random()*(max-min+1)+min)
}

iniciodeljuego()// el flujo del juego comeinza llamando esta funcion
