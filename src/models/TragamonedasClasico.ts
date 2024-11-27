import { Juego } from "./Juego";
import { IApuesta } from "../interfaces/IApuesta";
import * as readlineSync from "readline-sync";

export class TragamonedasClasico extends Juego implements IApuesta {
  jugar(apuesta: number): string {
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}. Por favor, apuesta al menos esa cantidad.`;
    }
    // msj bienvenida

    console.log("¡Bienvenido al Tragamonedas Clásico!");
    console.log("Recuerda que este es un juego de azar. Para ganar, necesitas obtener 3 números iguales.");

    // enter para comenzar 

    readlineSync.question("Presiona 'Enter' en tu teclado para comenzar a girar la ruleta...");
    // muestra numeros, en este caso elegimos hasta el 9 para hacerlo más simple, le sumamos 1 para que sean del 1 al 9
    const carrete1 = Math.floor(Math.random() * 9) + 1;
    const carrete2 = Math.floor(Math.random() * 9) + 1;
    const carrete3 = Math.floor(Math.random() * 9) + 1;

    // consoleamos el resultado del math random
    console.log(`Los números en los carretes son: ${carrete1} | ${carrete2} | ${carrete3}`);

    // si el n1 es igual al 2 Y el 2 es igual al 3
    if (carrete1 === carrete2 && carrete2 === carrete3) {
      const ganancia = apuesta * 3;
      return `¡Felicitaciones! Obtuviste 3 números iguales y triplicaste tu apuesta, ganaste $${ganancia}.`;
    } else {
      return `¡Upss! No obtuviste 3 números iguales. ¿volvemos a jugar?`;
    }
  }

  // interfaz de validacion
  validarApuesta(apuesta: number): boolean {
    return apuesta >= this.apuestaMinima;
  }
}
