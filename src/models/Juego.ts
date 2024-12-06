export interface IApuesta {
  // la apuesta siempre tiene que ser un número y devuelve boolean
    validarApuesta(apuesta: number): boolean;
}
  
//Siguiendo la idea de GENERALIZACIÓN, cualquier juego debe tener: 
export abstract class Juego implements IApuesta {
    //un nombre del tipo string
    protected nombre: string;  //para que todas las instancias puedan acceder a los atributos
    //una apuesta minima del tipo number
    protected apuestaMinima: number;
  
    //inicializa y cualquier clase que herede de Juego debe tener un nombre y una apuesta minima
    constructor(nombre: string, apuestaMinima: number) {
      this.nombre = nombre;
      this.apuestaMinima = apuestaMinima;
    }
    
    //y el metodo jugar para cualquier clase que herede Juego, todo juego, como una INSTANCIA tendra un metodo jugar, con una apuesta number como parametro y devuelve un string, no tiene incidencia en Juego, solo en las clases que lo hereden (en cada logica de cada juego). Obliga a cada clase hija a usar un metodo jugar, se supone que cada juego tiene una manera de jugar puntual
    abstract jugar(apuesta: number): string;

    //para que Casino pueda acceder
    public getNombre(): string {
      return this.nombre;
    }
    //para que Casino pueda acceder
    public getApuestaMinima(): number {
      return this.apuestaMinima;
    }

    // método de la interfaz para la validación
    validarApuesta(apuesta: number): boolean {
      return apuesta >= this.apuestaMinima;
    }
}