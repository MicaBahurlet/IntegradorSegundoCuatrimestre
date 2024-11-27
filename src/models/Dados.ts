import { Juego } from "./Juego";
import { IApuesta } from "../interfaces/IApuesta";

export class Dados extends Juego implements IApuesta {
  //como hereda de Juego implementa jugar y aqui esta la logica de tirar los dados, el resultado, etc.
  jugar(apuesta: number): string {
    // si la apuesta es menor a la apuesta minima entonces mensaje
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}`;
    }

    // lanzar dos dados. Dos numeros entre 0 y 1, multiplicados por los numeros que tiene un dado (6) el floor es para redondear ese numero hacia abajo, sumamos 1 para que quede entre 1 y 6 que son los numeros del dado. Guardamos en una const los valores sumados.
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    //mostramos resultados
    let resultado = `Lanzaste los dados y obtuviste ${dado1} y ${dado2}, sumando ${suma}. `;

    // se gana cuando es impar, asi que si el resultado de la division es distinto a 0 la suma es impar
    if (suma % 2 !== 0) {
      const ganancia = apuesta * 2;
      resultado += `¡Felicitaciones! Ganaste $${ganancia}.`;
      resultado += " Recuerda que ganarás siempre y cuando de la suma de los dos dados resulte un numero impar.";
    } else {
      resultado += "¡Ups! Perdiste. ¿Quieres intentarlo de nuevo?";
      resultado += " Recuerda que ganarás siempre y cuando de la suma de los dos dados resulte un numero impar.";
    }

    return resultado;
  }

    // método de la interfaz para la validación si es mayor a la apuesta minima entonces si
  validarApuesta(apuesta: number): boolean {
    return apuesta >= this.apuestaMinima;
  }
}
