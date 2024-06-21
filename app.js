let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (intentos >= 5) {
        asignarTextoElemento("p", "Has alcanzado el límite de intentos. El número secreto era " + numeroSecreto);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
        if(numeroUsuario === numeroSecreto) {
            asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
            document.getElementById("reiniciar").removeAttribute("disabled") 
        } else {
            //El usuario no acerto
            if (numeroUsuario > numeroSecreto ) {
            asignarTextoElemento("p","El numero secreto es menor")
            } else {
                asignarTextoElemento("p","El numero secreto es mayor")
            }
            intentos++;
            limpiarCaja()
        }
        return;
    }
} 

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value ="";
}
  
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("P","Ya se sortearon todos los numeros posibles");
    } else {
        // Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto ();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja()
    //indicar mensaje de intercalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales()
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true")
    

}
condicionesIniciales()