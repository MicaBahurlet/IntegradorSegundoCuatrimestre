import { Juego } from "./Juego";
import * as readlineSync from "readline-sync";

export class Ruleta extends Juego {

    
  jugar(apuesta: number): string {
    if (!this.validarApuesta(apuesta)) {                //Si la apuesta es menor a la apuesta minima aceptable, mostrar mensaje de advertencia.
      return `La apuesta mínima es de ${this.apuestaMinima}`;
    }

    const numeroElegido = readlineSync.questionInt("Elija un número entre 1 y 36 para apostar: ");
    if (numeroElegido < 1 || numeroElegido > 36) {                                //Se excluye el valor 0 por las reglas del juego
      return "Número inválido. El número seleccionado debe estar entre 1 y 36.";
    }

    readlineSync.question("➡️ Presiona 'Enter' en tu teclado para comenzar a girar la ruleta y probar tu suerte...");
    //Math random devuelve un número aleatorio entre 0 y 1. Math floor reduce el n° al entero más chico. 
    //Lo multiplicamos por 36 y le sumamos 1 para  evitar que salga el 0.
    const numeroGanador = Math.floor(Math.random() * 36) + 1;
    let resultado = `El número es ${numeroGanador}. `;    //Almacenamos el valor del número en una variable resultado

    if (numeroElegido === numeroGanador) {              //Verificar si el numero elegido es igual al ganador
      const ganancia = apuesta * 3;                     //La ganancia es el triple de la apuesta
      resultado += `🎊 ¡Felicitaciones! Tu ganancia en la Ruleta es de $${ganancia}. Triplicaste el valor de tu apuesta`;
    } else {
      resultado += "🤷‍♀️ ¡Upss! Perdiste en el juego de la Ruleta, no salió el número elegido. ¿Volves a jugar?.";
    }
    return resultado;
  }

}
