import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasEspacial extends Tragamonedas {
  constructor(nombre: string, apuestaMinima: number) {
    super(nombre, apuestaMinima, ["🚀", "🛸", "🌑", "🌠", "🪐"]);
  }

  jugar(apuesta: number): string {            //Método de la clase abstracta Juego
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}. Por favor, apuesta al menos esa cantidad.`;
    }

    this.mostrarBienvenida(); 

    //Para seleccionar de manera aleatoria los emojis del array
    const carrete1 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
    const carrete2 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
    const carrete3 = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];

    console.log(`Los símbolos en los carretes son: ${carrete1} | ${carrete2} | ${carrete3}`);   //Mostrar los emojis obtenidos

    if (carrete1 === carrete2 && carrete2 === carrete3) {         //Validación de si los 3 elementos son iguales
      const ganancia = apuesta * 4;
      return `🎊 ¡Felicitaciones! Obtuviste 3 símbolos iguales (${carrete1}) y ganaste $${ganancia} en el Tragamonedas Espacial.`;
    } else {
      return `🤷‍♀️ ¡Upss! No obtuviste 3 símbolos iguales en el Tragamonedas Espacial. ¿Volvemos a jugar?`;
    }
  }
}
