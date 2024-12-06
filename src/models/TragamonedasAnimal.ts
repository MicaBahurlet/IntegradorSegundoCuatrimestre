import { Tragamonedas } from "./Tragamonedas";
import * as readlineSync from "readline-sync";

export class TragamonedasAnimal extends Tragamonedas {
  constructor(nombre: string, apuestaMinima: number, simbolos: string[] = ["🦁", "🐯", "🦊", "🦄", "🐵", "🐶", "🐱", "🐮", "🐷"]) {
    super(nombre, apuestaMinima, simbolos);
  }

  jugar(apuesta: number): string {              //Método de la clase abstracta Juego
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}. Por favor, apuesta al menos esa cantidad.`;
    }

    this.mostrarBienvenida();

    readlineSync.question("➡️ Presiona 'Enter' en tu teclado para comenzar a probar tu suerte...");

    // Seleccionamos símbolos aleatorios para cada carrete
    const carrete1 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
    const carrete2 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
    const carrete3 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];

    console.log(`Los símbolos en los carretes son: ${carrete1} | ${carrete2} | ${carrete3}`);   //Mostrar los emojis obtenidos

    if (carrete1 === carrete2 && carrete2 === carrete3) {         //Validación de si los 3 elementos son iguales
      const ganancia = apuesta * 4;
      return `🎊 ¡Felicitaciones! Obtuviste 3 símbolos iguales (${carrete1}) y ganaste $${ganancia} en el tragamonedas Animal.`;
    } else {
      return `🤷‍♀️ ¡Upss! No obtuviste 3 símbolos iguales en el Tragamonedas Animal. ¿Volvemos a jugar?`;
    }
  }
}
