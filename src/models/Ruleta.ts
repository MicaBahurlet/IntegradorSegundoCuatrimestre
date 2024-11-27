import { Juego } from "./Juego";
import { IApuesta } from "../interfaces/IApuesta";
import * as readlineSync from "readline-sync";

export class Ruleta extends Juego implements IApuesta {
  jugar(apuesta: number): string {
    // si la apuesta es menor a la apuesta minima entonces mensaje
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}`;
    }

    // pedimos que elija un número entre 1 y 38
    const numeroElegido = readlineSync.questionInt("Elija un número entre 1 y 38 para apostar: ");
    if (numeroElegido < 1 || numeroElegido > 38) {
      return "Número inválido. El número seleccionado debe estar entre 1 y 38.";
    }

    readlineSync.question("Presiona 'Enter' en tu teclado para comenzar a girar la ruleta y probar tu suerte...");

    // obtenemos un número aleatorio entre 1 y 38. redondeamos hacia abajo y sumamos 1 para asegurarnos que quede entre 1 y 38
    const numeroGanador = Math.floor(Math.random() * 38) + 1;

    let resultado = `El número es ${numeroGanador}. `;

    // verificar si ganó, si el numero elegido es igual al ganador
    if (numeroElegido === numeroGanador) {
      const ganancia = apuesta * 3; // gana multiplicado por 3 el monto apostado
      resultado += `¡Felicitaciones! Tu ganancia es de $${ganancia}. triplicaste tu apuesta`;
    } else {
      resultado += "¡Upss! Perdiste, no salió el número elegido. ¿Volves a jugar?.";
    }
    return resultado;
  }

  // método de la interfaz para la validación
  validarApuesta(apuesta: number): boolean {
    return apuesta >= this.apuestaMinima;
  }
}
