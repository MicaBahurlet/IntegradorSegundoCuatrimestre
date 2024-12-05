// import { Juego } from "../models/Juego";
// import { TragamonedasClasico } from "../models/TragamonedasClasico";
// import { Ruleta } from "../models/Ruleta";
// import { Dados } from "../models/Dados";

// //exportamos la cantidad de juegos para pasarlos al main el numero es la apuesta minima
// export const juegos: Juego[] = [
//   new TragamonedasClasico("🎰 Tragamonedas Clásico", 30),
//   new Ruleta("🍀 Ruleta", 20),
//   new Dados("🎲 Dados", 15),
// ];

// //fn para mostrar las opciones del menu
// export function mostrarMenu(): void {
//   console.log("\n=== Menú Principal ===");
//   console.log("1. Ver juegos disponibles");
//   console.log("2. Exportar resultados de los juegos");
//   console.log("3. Ver instrucciones de los juegos");
//   console.log("4. Salir");
// }

import { Casino } from "../models/Casino";
import { TragamonedasClasico } from "../models/TragamonedasClasico";
import { Ruleta } from "../models/Ruleta";
import { Dados } from "../models/Dados";


export const casino = new Casino("Golden Clover Casino", [
  new TragamonedasClasico("🎰 Tragamonedas Clásico", 30),
  new Ruleta("🍀 Ruleta", 20),
  new Dados("🎲 Dados", 15),
]);

export function mostrarMenu(): void {
  console.log("\n=== Menú Principal ===");
  console.log("1. Ver juegos disponibles");
  console.log("2. Exportar resultados de los juegos");
  console.log("3. Ver instrucciones de los juegos");
  console.log("4. Salir");
}
