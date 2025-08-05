// alert("Hello, World!");

// variables
let numeroMaximo = 6;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 1;
let intentos = 1;
let maximoIntentos = 3;

// logica
do {
    // pedir numero al usuario
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo}: `));

    // Validar si el usuario canceló el prompt
    if (numeroUsuario === null) {
        alert("Juego cancelado.");
        break;
    }

    if (numeroUsuario > 0 && numeroUsuario <= numeroMaximo) {
        /**
        * Este codigo realiza la comparacion entre el numero secreto y el numero introducido por el usuario.
        */
        if (numeroSecreto == numeroUsuario) {
            alert(`Has acertado el numero secreto, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos"
                }.`);
            break;
        } else {
            if (numeroUsuario > numeroSecreto) {
                alert("El numero secreto es menor que el numero introducido");
            } else {
                alert("El numero secreto es mayor que el numero introducido");
            }

            intentos++;

            if (intentos > maximoIntentos) {
                alert("Has superado el numero de " + maximoIntentos + " intentos, el numero secreto era: " + numeroSecreto);
                break;
            }
        }
    } else {
        alert('Ingrese un numero valido entre 1 y ' + numeroMaximo);
    }
} while (numeroSecreto != numeroUsuario);


// while (numeroSecreto != numeroUsuario) {
//     numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMAximo}: `));
//     console.log("El numero que has introducido es: " + numeroUsuario + " y el numero secreto es: " + numeroSecreto);

//     /**
//      * Este codigo realiza la comparacion entre el numero secreto y el numero introducido por el usuario.
//     */
//     if (numeroSecreto == numeroUsuario) {
//         alert(`Has acertado el numero secreto, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos"
//             }.`);
//     } else {
//         if (numeroUsuario > numeroSecreto) {
//             alert("El numero secreto es menor que el numero introducido");
//         } else {
//             alert("El numero secreto es mayor que el numero introducido");
//         }

//         intentos++;
//         // palabraIntentos = 'intentos';

//         if (intentos > maximoIntentos) {
//             alert("Has superado el numero de " + maximoIntentos + " intentos, el numero secreto era: " + numeroSecreto);
//             break;
//         }
//     }
// }
