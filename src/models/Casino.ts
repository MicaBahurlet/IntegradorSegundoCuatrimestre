import { Juego } from "./Juego";

export class Casino  {
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
      console.log(`${index + 1}. ${juego.nombre} (Apuesta mínima: $${juego.apuestaMinima})`);
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