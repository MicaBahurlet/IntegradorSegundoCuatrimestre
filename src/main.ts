// import { mostrarMenu, juegos } from "./menu/mostrarMenu";
// import { exportarResultados } from "./utils/exportarResultados";
// import { verInstrucciones } from "./utils/verInstrucciones";
// import * as readlineSync from "readline-sync";

// //variable global para poder guardar los resultados en un string, para pasarlos al exportarResultados
// let resultados: string[] = [];

// function main(): void {

//   //msj de bienvenida
//   console.log("\n=== 🤞 Bienvenido a Golden Clover Casino 💰 ===");
//   console.log("¡Disfruta de la mejor experiencia de juegos de azar!\n");

//   //para mantener el bucle hasta que el jugador decida salir
//   let continuar = true;

//   while (continuar) {
//     //fn mostrar menu
//     mostrarMenu();
//     //preguntamos al jugador que juego quiere jugar, el questonInt es para que nos devuelva un Num entero
//     const opcion = readlineSync.questionInt("Seleccione una opción: ");

//     //segun la opcion que elija el jugador
//     switch (opcion) {
//       //mostrara todos los juegos disponibles, los que definimos en el array juegos
//       case 1:
//         console.log("\nJuegos disponibles:");
//         // recorre el array y imprime el nombre y la apuesta minima
//         juegos.forEach((juego, index) =>
//           console.log(`${index + 1}. ${juego.nombre} (Apuesta mínima: ${juego.apuestaMinima})`)
//         );
//         //solucion rapida para vover al menu anterior
//         console.log(`${juegos.length + 1}. Volver al menú anterior`);

//         //preguntamos al jugador que juego quiere jugar pero le restamos 1 porque el array empieza en 0
//         const juegoSeleccionado = readlineSync.questionInt("\nSeleccione el número del juego que desea jugar: ") - 1;
//         //si la seleccion es mayor o igual a 0 y menor que la longitud del array de juegos
//         if (juegoSeleccionado >= 0 && juegoSeleccionado < juegos.length) {
//           //preguntamos apuesta
//           const apuesta = readlineSync.questionInt("Ingrese su monto de apuesta: ");
//           //llamamos al metodo jugar y devuelve el monto
//           const resultado = juegos[juegoSeleccionado].jugar(apuesta);
//           //mostramos resultado
//           console.log(resultado);
//           //guardamos el resultado en el array usamos el push para agregarlo al final del array 
//           resultados.push(resultado);
//         } else {
//           //si selecciona algo incorrecto
//           console.log("Selección inválida. Seleccione uno de los juegos disponibles por su número correspondiente.");
//         }
//         break;

//       case 2:
//         exportarResultados(resultados);
//         break;

//       case 3:
//         verInstrucciones();
//         break;

//       case 4:
//         //cambiamos el valor de la variable a false para romper el while y mensajito
//         continuar = false;
//         console.log("👋 ¡Gracias por jugar, nos vemos pronto!");
//         break;

//       //mensajito de default por si selecciona una opcion incorrecta en el menú
//       default:
//         console.log("Opción inválida, seleccione una opción del menú por su número correspondiente.");
//         break;
//     }
//   }
// }

// main();

// main.ts
import { mostrarMenu } from "./menu/mostrarMenu";
import { casino } from "./menu/mostrarMenu";
import { exportarResultados } from "./utils/exportarResultados";
import { verInstrucciones } from "./utils/verInstrucciones";
import * as readlineSync from "readline-sync";

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