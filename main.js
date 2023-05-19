let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let seguirJugando = true;
let maximoIntentos = 0;

function solicitarDificultad() {
    let dificultad = prompt("Elige la dificultad:\n1. Fácil (números del 1 al 50)\n2. Media (números del 1 al 100)\n3. Difícil (números del 1 al 200)");

    switch (dificultad) {
        case "1":
            numeroAleatorio = Math.floor(Math.random() * 50) + 1;
            maximoIntentos = 6;
            break;
        case "2":
            numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            maximoIntentos = 10;
            break;
        case "3":
            numeroAleatorio = Math.floor(Math.random() * 200) + 1;
            maximoIntentos = 18;
            break;
        default:
            alert("Opción inválida. Seleccionando dificultad media por defecto.");
            numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            break;
    }
}

function comprobarNumero(numero) {
    if (numero === numeroAleatorio) {
        return "Adivinaste! El número era " + numeroAleatorio;
    } else if (numero < numeroAleatorio) {
        return "Intenta con un número más grande.";
    } else {
        return "Intenta con un número más pequeño.";
    }
}

function reiniciarJuego() {
    intentos = 0;
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    seguirJugando = true;
}

function jugarJuego() {
    alert("Bienvenido a nuestro juego de adivinar el número!");
    alert("Porfavor ingresa el numero correspondiente para seleccionar la dificultad");
    alert("Luego de ingresar tu nombre tendras 6 intentos para adivinar el numero entre el 1 y 100");
    solicitarDificultad();
    let nombre = prompt("Ingresa tu nombre:");
    alert("Hola, " + nombre + "! Comencemos el juego.🤞🤞");

    

    while (seguirJugando && intentos < 6) {
        let numeroIngresado = prompt("Ingresa un número entre 1 y 100:");

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
        } else if (intentos === 6) {
            alert("Lo siento, " + nombre + ". Has agotado tus 6 intentos. El número era " + numeroAleatorio);

            let reiniciar = confirm("Deseas jugar nuevamente?");
            if (reiniciar) {
                reiniciarJuego();
                jugarJuego();
            }
        }
    }
}

jugarJuego();
