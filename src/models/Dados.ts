import { Juego } from "./Juego";
import * as readlineSync from "readline-sync";

export class Dados extends Juego {
  private dado1: number;
  private dado2: number;
  private suma: number;

  constructor(nombre: string, apuestaMinima: number) {
    super(nombre, apuestaMinima);
    this.dado1 = 0;
    this.dado2 = 0;
    this.suma = 0;
  }

  //como hereda de la clase Juego, implementa jugar. Aqui esta la logica de tirar los dados, el resultado, etc.
  jugar(apuesta: number): string {
    // si la apuesta es menor a la apuesta minima aceptable entonces mostramos mensaje
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}`;
    }
    readlineSync.question(
      "➡️ Presiona 'Enter' en tu teclado para lanzar los dados probar tu suerte..."
    );

    //Lógica para lanzar dos dados. Dos numeros entre 0 y 1 dados por el Math.random, multiplicados por los numeros que tiene un dado (6). El Math.floor es para redondear ese numero hacia abajo. Sumamos 1 para que quede entre 1 y 6 que son los numeros del dado. Guardamos en una const los valores sumados.
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    //mostramos resultados
    let resultado = `Lanzaste los dados y obtuviste ${dado1} y ${dado2}, sumando ${suma}. `;
    // se gana cuando es impar, asi que si el resultado de la division es distinto a 0 la suma es impar
    if (suma % 2 !== 0) {
      const ganancia = apuesta * 2;
      resultado += `🎊 ¡Felicitaciones! Ganaste $${ganancia}.`;
      resultado +=
        " Recuerda que ganarás siempre y cuando de la suma de los dos dados resulte un numero impar.";
    } else {
      resultado += "🤷‍♀️ ¡Ups! Perdiste. ¿Quieres intentarlo de nuevo?";
      resultado +=
        " Recuerda que ganarás siempre y cuando de la suma de los dos dados resulte un numero impar.";
    }

    return resultado;
  }
}