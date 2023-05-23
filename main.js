let numeroAleatorio = 0;
let intentos = 0;
let seguirJugando = true;
let maximoIntentos = 0;
let dificultad = 0;

// Solicita al usuario que elija la dificultad y establece el número máximo de intentos y el rango del número aleatorio.

function solicitarDificultad() {
    dificultad = prompt("Elige la dificultad:\n1. Fácil (números del 1 al 50)\n2. Media (números del 1 al 100)\n3. Difícil (números del 1 al 200)");

    switch (dificultad) {
        case "1":
            maximoIntentos = 6;
            alert("Has elegido la dificultad Fácil.");
            break;
        case "2":
            maximoIntentos = 10;
            alert("Has elegido la dificultad Media.");
            break;
        case "3":
            maximoIntentos = 15;
            alert("Has elegido la dificultad Difícil.");
            break;
        default:
            alert("Opción inválida. Seleccionando dificultad media por defecto.");
            maximoIntentos = 10;
            break;
    }
    
    numeroAleatorio = Math.floor(Math.random() * (dificultad * 100)) + 1;
}

// Comprueba si el número ingresado por el usuario es igual, mayor o menor que el número aleatorio.

function comprobarNumero(numero) {
    if (numero === numeroAleatorio) {
        return "Adivinaste! El número era " + numeroAleatorio;
    } else if (numero < numeroAleatorio) {
        return "Intenta con un número más grande.";
    } else {
        return "Intenta con un número más pequeño.";
    }
}

//Reinicia los valores del juego para poder jugar nuevamente.

function reiniciarJuego() {
    intentos = 0;
    seguirJugando = true;
}

//  Inicia el juego de adivinar el número.

function jugarJuego() {
    alert("Bienvenido a nuestro juego de adivinar el número!");
    solicitarDificultad();
    let nombre = prompt("Ingresa tu nombre:");
    alert("Hola, " + nombre + "! Comencemos el juego.🤞🤞");

    while (seguirJugando && intentos < maximoIntentos) {
        let numeroIngresado = prompt("Ingresa un número entre 1 y " + (dificultad * 100) + ":");

        if (numeroIngresado === null) {
            let confirmacion = confirm("Deseas salir del juego?");
            if (confirmacion) {
                seguirJugando = false;
            }
            continue;
        }

        let numero = parseInt(numeroIngresado);
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
            continue;
        }

        intentos++;
        let resultado = comprobarNumero(numero);
        alert(resultado);

        if (resultado.includes("¡Adivinaste!")) {
            seguirJugando = false;
            alert("Felicidades, " + nombre + " Adivinaste el número en " + intentos + " intentos.");

            let reiniciar = confirm("Deseas jugar nuevamente?");
            if (reiniciar) {
                reiniciarJuego();
                jugarJuego();
            }
        } else if (intentos === maximoIntentos) {
            alert("Lo siento, " + nombre + ". Has agotado tus " + maximoIntentos + " intentos. El número era " + numeroAleatorio);

            let reiniciar = confirm("Deseas jugar nuevamente?");
            if (reiniciar) {
                reiniciarJuego();
                jugarJuego();
            }
        }
    }
}

jugarJuego();
