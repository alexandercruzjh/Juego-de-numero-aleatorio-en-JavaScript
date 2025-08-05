// app.js

/**
 * Variables globales
 */
let numeroMaximo = 10;
let intentos = 3;
let numeroSecreto;
let contadorIntentos;
let listaNumeros = [];



// Funcion para asignar un texto a un elemento HTML
function asignarElemento(elemento, texto) {
    // Texto dinamico
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Funcion para manejar el intento del usuario
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroSecreto == numeroUsuario) {
        asignarElemento('p', `¡Felicidades! Has adivinado el número secreto en ${(contadorIntentos == 1) ? contadorIntentos + ' intento' : contadorIntentos + ' intentos'} .`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('iniciar').setAttribute('disabled', true);
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarElemento('p', 'El numero secreto es menor');
        } else {
            asignarElemento('p', 'El numero secreto es mayor');
        }

        contadorIntentos++;
        limpiarCaja();
    }
    if (contadorIntentos == intentos + 1) {
        asignarElemento('p', `Has agotado tus intentos. El número secreto era ${numeroSecreto}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('iniciar').setAttribute('disabled', true);
    }
}

// Funcion mensaje inicial
function condicionInicial() {
    asignarElemento('h1', 'Juego del numero Secreto');
    asignarElemento('p', `Adivina el número secreto entre 1 y ${numeroMaximo}. Tienes ${intentos} intentos para acertar.`);
    numeroSecreto = generarSecreto(numeroMaximo);
    contadorIntentos = 1;
}
// Funcion limpiar caja 
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// Generar numero secreto
function generarSecreto(numero) {
    let numeroSecreto = Math.floor(Math.random() * numero) + 1;

    if (listaNumeros.length >= numero) {
        // Si ya se han generado todos los numeros posibles, reiniciar juego
        asignarElemento('p', `Ya se sortearon todos los numeros posibles`);
        // reiniciarJuego();
    } else {
        // Verificar si el numero ya fue generado
        if (listaNumeros.includes(numeroSecreto)) {
            return generarSecreto(numero);
        }
        // Agregar el numero a la lista de numeros generados
        listaNumeros.push(numeroSecreto);
        // Retornar el numero secreto
        return numeroSecreto;
    }
}

// Reiniciar juego
function reiniciarJuego() {
    /**
     * limpir caja
     * indicar mensaje de inicio
     * genara el numero aleatorio 
     * reiniciar intentos
     * desabilitar el boton de "nuevo juego"
     */
    limpiarCaja();
    condicionInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('iniciar').removeAttribute('disabled');
}

/**
 * Hoisting 
 * elevar variables y funciones al inicio del contexto de ejecucion
 */
condicionInicial();
