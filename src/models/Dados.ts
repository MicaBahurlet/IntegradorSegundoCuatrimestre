import { Juego } from "./Juego";
import * as readlineSync from "readline-sync";

export class Dados extends Juego {

jugar(apuesta: number): string {          //Como hereda de la clase abstracta Juego, implementa método jugar. 
    if (!this.validarApuesta(apuesta)) {   //Si la apuesta es menor a la apuesta minima aceptable, mostrar mensaje de advertencia. 
      return `La apuesta mínima es de ${this.apuestaMinima}`;
    }
    readlineSync.question("➡️ Presiona 'Enter' en tu teclado para lanzar los dados probar tu suerte...");

    //Lógica para lanzar dos dados: Dos numeros entre 0 y 1 dados (Math.random) multiplicados por los numeros que tiene un dado (6). 
    //Math.floor: para redondear numero hacia abajo. Sumamos 1 para que quede entre 1 y 6, que son los numeros del dado. 
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;                             //Guardamos en una constante la suma de los valores.

    let resultado = `Lanzaste los dados y obtuviste ${dado1} y ${dado2}, sumando ${suma}. `;        //Mostrar resultados
    //Mecánica de juego: se gana cuando el n° es impar. Si el resto de la division por 2 es distinto a 0, el numero es impar.
    if (suma % 2 !== 0) {             
      const ganancia = apuesta * 2;
      resultado += `🎊 ¡Felicitaciones! Ganaste $${ganancia} en el juego de los Dados.`;
      resultado += " Recuerda que ganarás siempre y cuando de la suma de los dos dados resulte un numero impar.";
    } else {
      resultado += "🤷‍♀️ ¡Ups! Perdiste en el juego de los Dados. ¿Quieres intentarlo de nuevo?";
      resultado += " Recuerda que ganarás siempre y cuando de la suma de los dos dados resulte un numero impar.";
    }

    return resultado;
  }
}