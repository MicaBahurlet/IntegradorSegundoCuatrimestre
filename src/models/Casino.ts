import { Juego } from "./Juego";
import { TragamonedasAnimales } from "./TragamonedasAnimales";
import { TragamonedasEspacial } from "./TragamonedasEspacial";
import { Ruleta } from "./Ruleta";
import { Dados } from "./Dados";

export class Casino {
  private nombre: string;
  private juegos: Juego[];
  private resultados: string[];

  constructor(nombre: string, juegos: Juego[]) {
    this.nombre = nombre;
    this.juegos = juegos;
    this.resultados = [];
  }

  public getJuegos(): Juego[] {
    return this.juegos;
  }

  // para luego exportar
  agregarResultado(resultado: string): void {
    this.resultados.push(resultado);
  }

  // mostrar los juegos disponibles
  mostrarJuegos(): void {
    console.log(`\n=== Bienvenido al ${this.nombre} ===`);
    console.log("Juegos disponibles:");
    this.juegos.forEach((juego, index) => {
      console.log(
        `${index + 1}. ${juego.getNombre()} (Apuesta mínima: $${
          juego.getApuestaMinima()
        })`
      );
    });
  }

  // Quizas debería tener otro nombre
  jugarJuego(opcion: number, apuesta: number): string {
    const juego = this.juegos[opcion];
    if (!juego.validarApuesta(apuesta)) {
      return `La apuesta mínima para ${juego.getNombre()} es de $${juego.getApuestaMinima()}. Ingresa una apuesta válida.`;
    }
    const resultado = juego.jugar(apuesta);
    this.agregarResultado(resultado);
    return resultado;
  }

  // obtener los resultados para luego exportarlos
  obtenerResultados(): string[] {
    return this.resultados;
  }
}

export const casino = new Casino("Golden Clover Casino", [
    new TragamonedasAnimales("🎰 🐈 Tragamonedas Animales", 30),
    new TragamonedasEspacial("🎰 🚀 Tragamonedas Espacial", 40),
    new Ruleta("🍀 Ruleta", 20),
    new Dados("🎲 Dados", 15),
  ]);