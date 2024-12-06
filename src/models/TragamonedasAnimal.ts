import { Tragamonedas } from "./Tragamonedas";
import * as readlineSync from "readline-sync";

export class TragamonedasAnimales extends Tragamonedas {
  constructor(nombre: string, apuestaMinima: number) {
    const simbolos = ["🐶", "🦁", "🐷", "🐰", "🐱"];
    super(nombre, apuestaMinima, simbolos);
  }

  jugar(apuesta: number): string {
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}. Por favor, apuesta al menos esa cantidad.`;
    }

    this.mostrarBienvenida();

    readlineSync.question("➡️ Presiona 'Enter' en tu teclado para comenzar a probar tu suerte...");

    // Seleccionamos símbolos aleatorios para cada carrete
    const carrete1 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
    const carrete2 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
    const carrete3 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];

    console.log(`Los símbolos en los carretes son: ${carrete1} | ${carrete2} | ${carrete3}`);

    if (carrete1 === carrete2 && carrete2 === carrete3) {
      const ganancia = apuesta * 4;
      return `🎊 ¡Felicitaciones! Obtuviste 3 símbolos iguales (${carrete1}) y ganaste $${ganancia}.`;
    } else {
      return `🤷‍♀️ ¡Upss! No obtuviste 3 símbolos iguales. ¿Volvemos a jugar?`;
    }
  }
}