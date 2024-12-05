import { Juego } from "./Juego";

export class Tragamonedas extends Juego {
  protected simbolos: string[];

  constructor(nombre: string, apuestaMinima: number, simbolos: string[]) {
    super(nombre, apuestaMinima);
    this.simbolos = simbolos;
  }

  //bienvenida del menu de las versiones
  mostrarBienvenida(): void {
    console.log(`🎰 ¡Bienvenido al ${this.nombre}!`);
    console.log(`➡️ Necesitas obtener 3 símbolos iguales para ganar.`);
  }

    //tenemos que implementarla si o si porque es una instancia de juego
  jugar(apuesta: number): string {
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}. Por favor, apuesta al menos esa cantidad.`;
    }
    return `¡Apuesta válida! Pero aún no hemos definido la lógica del juego.`;
  }
}
