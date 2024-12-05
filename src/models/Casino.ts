// Casino:
import { Juego } from "./Juego";
import { TragamonedasAnimales } from "./TragamonedasAnimales";
import { TragamonedasEspacial } from "./TragamonedasEspacial";
import { Ruleta } from "./Ruleta";
import { Dados } from "./Dados";

// const juegosDisponibles: Juego[] = [
//   new TragamonedasClasico("🎰 Tragamonedas Clásico", 30),
//   new Ruleta("🍀 Ruleta", 20),
//   new Dados("🎲 Dados", 15),
// ];

export class Casino {
  private nombre: string;
  private juegos: Juego[];
  //agregar dirección
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
        `${index + 1}. ${juego.nombre} (Apuesta mínima: $${
          juego.apuestaMinima
        })`
      );
    });
  }

  // cambiar nombre pagarApuesta // y ver si es relevante
  jugarJuego(opcion: number, apuesta: number): string {
    //guardamos en una variable el juego seleccionado como instancia
    const juego = this.juegos[opcion];
    //verificacion de apuesta ingresada, mensajito avisando
    if (!juego.validarApuesta(apuesta)) {
      return `La apuesta mínima para ${juego.nombre} es de $${juego.apuestaMinima}. Ingresa una apuesta válida.`;
    }
    //jugar con la apuesta como parámetro
    const resultado = juego.jugar(apuesta);
    //guardamos resultados
    this.agregarResultado(resultado);
    return resultado;
  }

  // obtener los resultados para luego exportarlos
  obtenerResultados(): string[] {
    return this.resultados;
  }
}

export const casino = new Casino("Golden Clover Casino", [
    new TragamonedasAnimales("🎰 Tragamonedas Animales", 30),
    new TragamonedasEspacial("🚀 Tragamonedas Espacial", 40),
    new Ruleta("🍀 Ruleta", 20),
    new Dados("🎲 Dados", 15),
  ]);