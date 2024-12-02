import { mostrarMenu, juegos } from "./menu/mostrarMenu";
import { exportarResultados } from "./utils/exportarResultados";
import { verInstrucciones } from "./utils/verInstrucciones";
import * as readlineSync from "readline-sync";

//variable global para poder guardar los resultados un string, para pasarlos al exportarResultados
let resultados: string[] = [];

function main(): void {

  //msj de bienvenida
  console.log("\n=== 🤞 Bienvenido a Golden Clover Casino 💰 ===");
  console.log("¡Disfruta de la mejor experiencia de juegos de azar!\n");

  //para mantener el bucle hasta que el jugador decida salir
  let continuar = true;

  while (continuar) {
    //fn mostrar menu
    mostrarMenu();
    //preguntamos al jugador que juego quiere jugar, el questonInt es para que nos devuelva un Num entero
    const opcion = readlineSync.questionInt("Seleccione una opción: ");

    //segun la opcion que elija el jugador
    switch (opcion) {
      //mostrara todos los juegos disponibles, los que definimos en el array juegos
      case 1:
        console.log("\nJuegos disponibles:");
        // recorre el array y imprime el nombre y la apuesta minima
        juegos.forEach((juego, index) =>
          console.log(`${index + 1}. ${juego.nombre} (Apuesta mínima: ${juego.apuestaMinima})`)
        );
        //solucion rapida para vover al menu anterior
        console.log(`${juegos.length + 1}. Volver al menú anterior`);

        //preguntamos al jugador que juego quiere jugar pero le restamos 1 porque el array empieza en 0
        const seleccion = readlineSync.questionInt("\nSeleccione el número del juego para apostar: ") - 1;
        //si la seleccion es mayor o igual a 0 y menor que la longitud del array
        if (seleccion >= 0 && seleccion < juegos.length) {
          //preguntamos apuesta
          const apuesta = readlineSync.questionInt("Ingrese su monto de apuesta: ");
          //llamamos al metodo jugar y devuelve el monto
          const resultado = juegos[seleccion].jugar(apuesta);
          //mostramos resultado
          console.log(resultado);
          //guardamos el resultado en el array usamos el push para agregarlo al final del array 
          resultados.push(resultado);
        } else {
          //si selecciona algo incorrecto
          console.log("Selección inválida. Seleccione uno de los juegos disponibles por su número correspondiente.");
        }
        break;

      case 2:
        exportarResultados(resultados);
        break;

      case 3:
        verInstrucciones();
        break;

      case 4:
        //cambiamos el valor de la variable a false para romper el while y mensajito
        continuar = false;
        console.log("👋 ¡Gracias por jugar, nos vemos pronto!");
        break;

      //mensajito de default por si selecciona una opcion incorrecta en el menú
      default:
        console.log("Opción inválida, seleccione una opción del menú por su número correspondiente.");
        break;
    }
  }
}

main();



// import * as readlineSync from "readline-sync";
// import * as XLSX from "xlsx";
// import * as fs from "fs";

// // interfaz para la validación
// interface IApuesta {
//   validarApuesta(apuesta: number): boolean;
// }

// // clases y herencia
// abstract class Juego {
//   nombre: string;
//   apuestaMinima: number;

//   constructor(nombre: string, apuestaMinima: number) {
//     this.nombre = nombre;
//     this.apuestaMinima = apuestaMinima;
//   }

//   abstract jugar(apuesta: number): string;
// }

// // juego tragamonedas clásico, hereda de la clase Juego
// class TragamonedasClasico extends Juego implements IApuesta {
//   jugar(apuesta: number): string {
//     if (!this.validarApuesta(apuesta)) {
//       return `La apuesta mínima es de ${this.apuestaMinima}. Por favor, apuesta al menos esa cantidad.`;
//     }

//     // msj bienvenida
//     console.log("¡Bienvenido al Tragamonedas Clásico!");
//     console.log("Recuerda que este es un juego de azar. Para ganar, necesitas obtener 3 números iguales.");

//     // enter para comenzar 
//     readlineSync.question("Presiona 'Enter' para comenzar a girar...");

//     // muestra numeros, en este caso elegimos hasta el 9 para hacerlo más simple, le sumamos 1 para que sean del 1 al 9
//     const carrete1 = Math.floor(Math.random() * 9) + 1;
//     const carrete2 = Math.floor(Math.random() * 9) + 1;
//     const carrete3 = Math.floor(Math.random() * 9) + 1;

//     // consoleamos el resultado del math random
//     console.log(`Los números en los carretes son: ${carrete1} | ${carrete2} | ${carrete3}`);

//     // si el n1 es igual al 2 Y el 2 es igual al 3
//     if (carrete1 === carrete2 && carrete2 === carrete3) {
//       const ganancia = apuesta * 3; // triplica si gana
//       return `¡Felicitaciones! Obtuviste 3 números iguales. Triplicaste tu apuesta, ganaste $${ganancia}.`;
//     } else {
//       return `¡Upss! No obtuviste 3 números iguales. ¿volvemos a jugar?`;
//     }
//   }

//   // interfaz de validacion
//   validarApuesta(apuesta: number): boolean {
//     return apuesta >= this.apuestaMinima;
//   }
// }


// // juego ruleta, hereda de Juego
// class Ruleta extends Juego implements IApuesta {
//   jugar(apuesta: number): string {
//     if (!this.validarApuesta(apuesta)) {
//       return `La apuesta mínima es de ${this.apuestaMinima}`;
//     }

//     // pedimos que elija un número entre 1 y 38
//     const numeroElegido = readlineSync.questionInt("Elija un número entre 1 y 38 para apostar: ");
//     if (numeroElegido < 1 || numeroElegido > 38) {
//       return "Número inválido. El número seleccionado debe estar entre 1 y 38.";
//     }

//     readlineSync.question("Presiona 'Enter' para comenzar a girar la ruleta...");
//     // obtener un número aleatorio entre 1 y 38
//     const numeroGanador = Math.floor(Math.random() * 38) + 1;

//     let resultado = `El número es ${numeroGanador}. `;
    
//     // verificar si ganó
//     if (numeroElegido === numeroGanador) {
//       const ganancia = apuesta * 3; // gana multiplicado por 3 el monto apostado
//       resultado += `¡Felicitaciones! Tu ganancia es de $${ganancia}. triplicaste tu apuesta`;
//     } else {
//       resultado += "¡Upss! Perdiste. ¿Volves a jugar?.";
//     }
//     return resultado;
//   }
//   // método de la interfaz para la validación
//   validarApuesta(apuesta: number): boolean {
//     return apuesta >= this.apuestaMinima;
//   }
// }

// // juego dados, hereda de Juego e implementa la interfaz
// class Dados extends Juego implements IApuesta {
//   jugar(apuesta: number): string {
//     if (!this.validarApuesta(apuesta)) {
//       return `La apuesta mínima es de ${this.apuestaMinima}`;
//     }

//     // lanzar dos dados
//     const dado1 = Math.floor(Math.random() * 6) + 1;
//     const dado2 = Math.floor(Math.random() * 6) + 1;
//     const suma = dado1 + dado2;

//     let resultado = `Lanzaste los dados y obtuviste ${dado1} y ${dado2}, sumando ${suma}. `;
    

//     //se gana cuando es impar, así que si el resultado de la división es distinto a 0 la suma es impar 
//     if (suma % 2 !== 0) {
//       const ganancia = apuesta * 2;
//       resultado += `¡Felicitaciones! Ganaste $${ganancia}.`;
//       resultado += " Recuerda que ganarás siempre y cuando de la suma de los dos dados resulte un numero impar.";
//     } else {
//       resultado += "¡Ups! Perdiste. ¿Quieres intentarlo de nuevo?";
//       resultado += " Recuerda que ganarás siempre y cuando de la suma de los dos dados resulte un numero impar.";
//     }

//     return resultado;
//   }

//   // método de la interfaz para la validación
//   validarApuesta(apuesta: number): boolean {
//     return apuesta >= this.apuestaMinima;
//   }
// }

// // fn principales del menú
// const juegos: Juego[] = [
//   new TragamonedasClasico("Tragamonedas Clásico", 10),
//   new Ruleta("Ruleta", 20),
//   new Dados("Dados", 15),
// ];

// let resultados: string[] = [];

// function mostrarMenu(): void {
//   console.log("\n=== Menú Principal ===");
//   console.log("1. Ver juegos disponibles");
//   console.log("2. Exportar resultados a Excel");
//   console.log("3. Salir");
// }

// function verJuegos(): void {
//   console.log("\nJuegos disponibles:");
//   juegos.forEach((juego, index) => {
//     console.log(`${index + 1}. ${juego.nombre} (Apuesta mínima: ${juego.apuestaMinima})`);
//   });

//   // seleccionar un juego
//   const seleccion = readlineSync.questionInt("\nSeleccione el número del juego para apostar: ") - 1;
//   if (seleccion < 0 || seleccion >= juegos.length) {
//     console.log("Selección inválida.");
//     return;
//   }

//   // pedir apuestas que están validadas en la interfaz
//   let apuesta = readlineSync.questionInt("Ingrese su monto de apuesta: ");
//   while (apuesta < juegos[seleccion].apuestaMinima) {
//     console.log(`La apuesta mínima es de ${juegos[seleccion].apuestaMinima}. Intente de nuevo.`);
//     apuesta = readlineSync.questionInt("Ingrese su monto de apuesta: ");
//   }

//   // resultados
//   const resultado = juegos[seleccion].jugar(apuesta);
//   console.log(resultado);
//   resultados.push(resultado);
// }

// function exportarResultados(): void {
//   const opcion = readlineSync.keyInSelect(["Excel (.xlsx)", "Texto (.txt)"], "Seleccione el formato de exportación:");

//   if (opcion === 0) {
//     // Exportarlo a Excel
//     const hoja = XLSX.utils.json_to_sheet(resultados.map((r, i) => ({ ID: i + 1, Resultado: r })));
//     const libro = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(libro, hoja, "Resultados");
//     XLSX.writeFile(libro, "resultados.xlsx");
//     console.log("Resultados exportados a 'resultados.xlsx'.");
//   } else if (opcion === 1) {
//     // Exportar archivo .txt
//     const contenido = resultados.join("\n");
//     fs.writeFileSync("resultados.txt", contenido);
//     console.log("Resultados exportados a 'resultados.txt'.");
//   } else {
//     console.log("Operación cancelada.");
//   }
// }

// // MENÚ PRINCIPAL
// function main() {
//   console.log("\n=== Bienvenido a Amendo Casino ===");
//   console.log("¡Disfruta de la mejor experiencia de juegos de azar!\n");

//   let continuar = true;
//   while (continuar) {
//     mostrarMenu();
//     const opcion = readlineSync.questionInt("Seleccione una opción: ");

//     switch (opcion) {
//       case 1:
//         verJuegos();
//         break;
//       case 2:
//         exportarResultados();
//         break;
//       case 3:
//         console.log("Gracias por jugar. ¡Nos vemos pronto!");
//         continuar = false;
//         break;
//       default:
//         console.log("Opción inválida. Intenta de nuevo por favor.");
//     }
//   }
// }

// main();
