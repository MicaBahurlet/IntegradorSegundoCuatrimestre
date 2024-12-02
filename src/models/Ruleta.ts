import { Juego } from "./Juego";
import * as readlineSync from "readline-sync";

export class Ruleta extends Juego {
  jugar(apuesta: number): string {
    // si la apuesta es menor a la apuesta minima entonces mensaje
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}`;
    }

    // pedimos que elija un número entre 1 y 36
    const numeroElegido = readlineSync.questionInt("Elija un número entre 1 y 36 para apostar: ");
    //Se excluye el valor 0 por las reglas del juego
    if (numeroElegido < 1 || numeroElegido > 36) {
      return "Número inválido. El número seleccionado debe estar entre 1 y 36.";
    }

    readlineSync.question("➡️ Presiona 'Enter' en tu teclado para comenzar a girar la ruleta y probar tu suerte...");
    //Math random devuelve un número aleatorio entre 0 y 1. Math floor reduce el n° al entero más chico. Lo multiplicamos por 36 y le sumamos 1 para  evitar que salga el 0.
    const numeroGanador = Math.floor(Math.random() * 36) + 1;
    //Almacenamos el valor del número en una variable resultado
    let resultado = `El número es ${numeroGanador}. `;

    // verificar si ganó, si el numero elegido es igual al ganador
    if (numeroElegido === numeroGanador) {
      const ganancia = apuesta * 3; // gana triplicado el monto apostado
      resultado += `🎊 ¡Felicitaciones! Tu ganancia es de $${ganancia}. triplicaste tu apuesta`;
    } else {
      resultado += "🤷‍♀️ ¡Upss! Perdiste, no salió el número elegido. ¿Volves a jugar?.";
    }
    return resultado;
  }

}
