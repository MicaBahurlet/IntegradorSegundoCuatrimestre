export interface IApuesta {
  // la apuesta siempre tiene que ser un número y devuelve boolean
    validarApuesta(apuesta: number): boolean;
}
  