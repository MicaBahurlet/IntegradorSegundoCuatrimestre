
import { casino } from "./models/Casino";
import { exportarResultados } from "./utils/exportarResultados";
import { verInstrucciones } from "./utils/verInstrucciones";
import * as readlineSync from "readline-sync";

export function mostrarMenu(): void {
  console.log("\n=== Menú Principal ===");
  console.log("1. Ver juegos disponibles");
  console.log("2. Exportar resultados de los juegos");
  console.log("3. Ver instrucciones de los juegos");
  console.log("4. Salir");
}

function main(): void {
  console.log("\n=== Bienvenido a Golden Clover Casino ===\n");
  let continuar = true;

  while (continuar) {
    mostrarMenu();
    const opcion = readlineSync.questionInt("Seleccione una opción: ");
    if (isNaN(opcion)) {
      console.log("Ingrese una opción válida.");
      continue;
    }

    switch (opcion) {
      case 1:
        casino.mostrarJuegos();
        //solucion rapida para vover al menu anterior
        // console.log(`${juegos.length + 1}. Volver al menú anterior`);
        const juegoSeleccionado = readlineSync.questionInt("Seleccione el número del juego que desee jugar: ");
        if (isNaN(juegoSeleccionado) || juegoSeleccionado < 1 || juegoSeleccionado > casino.getJuegos().length) {
          console.log("Opción inválida. Por favor, ingrese un número de juego mostrado en pantalla.");
          continue;
        }
        const apuesta = readlineSync.questionInt("Ingrese su monto de apuesta: ");
        console.log(casino.jugarJuego(juegoSeleccionado - 1, apuesta));
        break;

      case 2:
        exportarResultados(casino.obtenerResultados());
        break;

      case 3:
        verInstrucciones();
        break;

      case 4:
        continuar = false;
        console.log("¡Gracias por jugar!");
        break;

      default:
        console.log("Opción inválida.");
        //validación 
    }
  }
}

main();