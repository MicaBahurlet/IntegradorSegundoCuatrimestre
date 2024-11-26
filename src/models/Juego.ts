//Cualquier juego debe tener: 

export abstract class Juego {
    //un nombre del tipo string
    nombre: string;
    //una apuesta minima del tipo number
    apuestaMinima: number;
  
    //inicializa y cualquier clase quye herede de Juego debe tener un nombre y una apuesta minima
    constructor(nombre: string, apuestaMinima: number) {
      this.nombre = nombre;
      this.apuestaMinima = apuestaMinima;
    }
    
    //y el metodo jugar para cualquier clase que herede Juego, todo juego tendra un metodo jugar, con una apuesta number como parametro y devuelve un string, no tiene incidencia en Juego, solo en las clases que lo hereden (en cada logica de cada juego). Obliga a cada clase hija a usar un metodo jugar, se supone que cada juego tiene una manera de jugar puntual
    abstract jugar(apuesta: number): string;
}
  