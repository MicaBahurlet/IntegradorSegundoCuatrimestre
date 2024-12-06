import { Juego } from "./Juego";

export abstract class Tragamonedas extends Juego {
  protected simbolos: string[];

  constructor(nombre: string, apuestaMinima: number, simbolos: string[]) {
    super(nombre, apuestaMinima);
    this.simbolos = simbolos;
  }

  //bienvenida del menu de las versiones
  mostrarBienvenida(): void {
    console.log(`🎰 ¡Bienvenido al ${this.nombre}!`);
    console.log(`➡️ Recordá que necesitas obtener 3 símbolos iguales para GANAR.`);
  }

    //Que luego cada instancia de Tragamonedas implemente su jugar
    abstract jugar(apuesta: number): string
}
