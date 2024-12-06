import { Juego } from "./Juego";
import { TragamonedasAnimal } from "./TragamonedasAnimal";
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

  mostrarJuegos(): void {                                           //Mostrar los juegos disponibles por línea
    console.log(`\n=== Bienvenido al ${this.nombre} ===`);
    console.log("Juegos disponibles:");
    this.juegos.forEach((juego, index) => {
      console.log(
        `${index + 1}. ${juego.nombre} (Apuesta mínima: $${juego.apuestaMinima
        })`
      );
    });
  }

  procesarJugada(opcion: number, apuesta: number): string { 
    const juego = this.juegos[opcion];                              //Se guarda el juego seleccionado en una constante 
    if (!juego.validarApuesta(apuesta)) {                           //Se verifica la apuesta ingresada
      return `La apuesta mínima para ${juego.nombre} es de $${juego.apuestaMinima}. Ingresa una apuesta válida.`;
    }
    const resultado = juego.jugar(apuesta);         //Se guarda en una constante el resultado del método jugar, pasando como parámetro la apuesta 
    this.agregarResultado(resultado);               //Guardamos resultados
    return resultado;
  }

  agregarResultado(resultado: string): void {     //Método para enviar el elemento resultado al array de resultados 
    this.resultados.push(resultado);
  }

  obtenerResultados(): string[] {                 //Método para obtener el array de resultados, para luego exportarlos en un archivo .txt
    return this.resultados;
  }
}

export const casino = new Casino("Golden Clover Casino", [        //Instancia de la clase Casino
  new TragamonedasAnimal("🐘 Tragamonedas Animales", 30),
  new TragamonedasEspacial("🚀 Tragamonedas Espacial", 40),
  new Ruleta("🍀 Ruleta", 20),
  new Dados("🎲 Dados", 15),
]);