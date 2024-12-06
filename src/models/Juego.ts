export interface IApuesta {                           //La apuesta siempre tiene que ser un número. Devuelve boolean
    validarApuesta(apuesta: number): boolean;
}
  
export abstract class Juego implements IApuesta {      //Siguiendo la idea de GENERALIZACIÓN, cualquier juego debe tener:
    nombre: string;                                    //un nombre de tipo string
    apuestaMinima: number;                             //una apuesta minima de tipo number
  
    constructor(nombre: string, apuestaMinima: number) {      //Cualquier clase que herede de Juego debe tener un nombre y una apuesta minima
      this.nombre = nombre;
      this.apuestaMinima = apuestaMinima;
    }
     
    //Todo juego, como una INSTANCIA tendra un metodo jugar, con una apuesta number como parametro y devuelve un string. 
    //No tiene incidencia en Juego, solo en las clases que lo hereden (en cada logica de cada juego). 
    //Obliga a cada clase hija a usar un metodo jugar, se supone que cada juego tiene una manera de jugar puntual
    abstract jugar(apuesta: number): string;

    //Método de la interfaz para la validación de la apuesta de los juegos
    validarApuesta(apuesta: number): boolean {
      return apuesta >= this.apuestaMinima;
    }
}