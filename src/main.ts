import * as readlineSync from "readline-sync";
import * as XLSX from "xlsx";
import * as fs from "fs";

// interfaz para la validación
interface IApuesta {
  validarApuesta(apuesta: number): boolean;
}

// clases y herencia
abstract class Juego {
  nombre: string;
  apuestaMinima: number;

  constructor(nombre: string, apuestaMinima: number) {
    this.nombre = nombre;
    this.apuestaMinima = apuestaMinima;
  }

  abstract jugar(apuesta: number): string;
}

// juego tragamonedas, hereda de la clase Juego
class TragamonedasClasico extends Juego implements IApuesta {
  jugar(apuesta: number): string {
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}`;
    }
    const resultado = Math.random() < 0.5 ? "ganaste ¡felicitaciones!" : "perdiste ¿volves a jugar?";
    return `Jugaste al tragamonedas clásico y ${resultado}`;
  }

  // metodo de la interface para la validacion 
  validarApuesta(apuesta: number): boolean {
    return apuesta >= this.apuestaMinima;
  }
}

// juego ruleta, hereda de Juego
class Ruleta extends Juego implements IApuesta {
  jugar(apuesta: number): string {
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta mínima es de ${this.apuestaMinima}`;
    }
    //agregar validación si ingresa letra

    // pedimos que elija un número entre 1 y 38
    const numeroElegido = readlineSync.questionInt("Elija un número entre 1 y 38 para apostar: ");
    if (numeroElegido < 1 || numeroElegido > 38) {
      return "Número inválido. El número seleccionado debe estar entre 1 y 38.";
    }

    // obtener un  número aleatorio entre 1 y 38
    const numeroGanador = Math.floor(Math.random() * 38) + 1;

    let resultado = `El número es ${numeroGanador}. `;
    
    // verificar si ganó
    if (numeroElegido === numeroGanador) {
      const ganancia = apuesta * 3; // gana triplicado lo apostado
      resultado += `¡Felicitaciones! Tu ganancia es de $${ganancia}. triplicaste tu apuesta`;
    } else {
      resultado += "¡Upss! Perdiste. ¿Volves a jugar?.";
    }

    return resultado;
  }

  // metodo de la interface para la validacion
  validarApuesta(apuesta: number): boolean {
    return apuesta >= this.apuestaMinima;
  }
}

// fn principales del menu
const juegos: Juego[] = [
  new TragamonedasClasico("Tragamonedas Clásico", 10),
  new Ruleta("Ruleta", 20),
];

let resultados: string[] = [];

function mostrarMenu(): void {
  console.log("\n=== Menú Principal ===");
  console.log("1. Ver juegos disponibles");
  console.log("2. Exportar resultados a Excel");
  console.log("3. Salir");
}

function verJuegos(): void {
  console.log("\nJuegos disponibles:");
  juegos.forEach((juego, index) => {
    console.log(`${index + 1}. ${juego.nombre} (Apuesta mínima: ${juego.apuestaMinima})`);
  });

  // seleccionar un juego
  const seleccion = readlineSync.questionInt("\nSeleccione el número del juego para apostar: ") - 1;
  if (seleccion < 0 || seleccion >= juegos.length) {
    console.log("Selección inválida. Seleccione alguno de los juegos mostrados. ");
    return;
  }

  // pedir apuestas que estan validadas en la interface
  let apuesta = readlineSync.questionInt("Ingrese su monto de apuesta: ");
  while (apuesta < juegos[seleccion].apuestaMinima) {
    console.log(`La apuesta mínima es de ${juegos[seleccion].apuestaMinima}. Intente de nuevo.`);
    apuesta = readlineSync.questionInt("Ingrese su monto de apuesta: ");
  }

  // resultados
  const resultado = juegos[seleccion].jugar(apuesta);
  console.log(resultado);
  resultados.push(resultado);
}

function exportarResultados(): void {
  const opcion = readlineSync.keyInSelect(["Excel (.xlsx)", "Texto (.txt)"], "Seleccione el formato de exportación:");

  if (opcion === 0) {
    // Exportarlo a excel
    const hoja = XLSX.utils.json_to_sheet(resultados.map((r, i) => ({ ID: i + 1, Resultado: r })));
    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Resultados");
    XLSX.writeFile(libro, "resultados.xlsx");
    console.log("Resultados exportados a 'resultados.xlsx'.");
  } else if (opcion === 1) {
    // exportar archivo .txt
    const contenido = resultados.join("\n");
    fs.writeFileSync("resultados.txt", contenido);
    console.log("Resultados exportados a 'resultados.txt'.");
  } else {
    console.log("Operación cancelada.");
  }
}

// MENÚ PRINCIPAL
function main() {
  console.log("\n=== Bienvenido a Golden Clover casino ===");
  console.log("¡Disfruta de la mejor experiencia de juegos de azar!\n");

  let continuar = true;
  while (continuar) {
    mostrarMenu();
    const opcion = readlineSync.questionInt("Seleccione una opción: ");

    switch (opcion) {
      case 1:
        verJuegos();
        break;
      case 2:
        exportarResultados();
        break;
      case 3:
        console.log("Gracias por jugar. ¡Nos vemos pronto!");
        continuar = false;
        break;
      default:
        console.log("Opción inválida. Intenta de nuevo por favor.");
    }
  }
}

main();
