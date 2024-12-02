import * as fs from "fs";
import * as readlineSync from "readline-sync"; 
import * as path from 'path';


function verInstrucciones(): void {
  let continuar = true;

  while (continuar) {
    console.log("\n=== Instrucciones ===");
    console.log("1. Ver instrucciones de Dados");
    console.log("2. Ver instrucciones de Ruleta");
    console.log("3. Ver instrucciones de Tragamonedas");
    console.log("4. Volver al menú anterior\n");

    const opcion = readlineSync.questionInt("Seleccione una opción: ");

    switch (opcion) {
      case 1:
        leerArchivo("Dados.txt");
        break;

      case 2:
        leerArchivo("Ruleta.txt");
        break;

      case 3:
        leerArchivo("TragaMonedas.txt");
        break;

      case 4:
        console.log("Volviendo al menú principal...\n");
        continuar = false;
        break;

      default:
        console.log("Opción inválida, seleccione un numero reflejado en pantalla.\n");
        break;
    }
  }
}

function leerArchivo(rutaArchivo: string): void {
  try {
    //_dirname es src/utils, apunta al directorio donde esta el archivo . Devuelve arriba dos niveles y entra a src instructions. Resolve porque esta a distinta altura que el main
    const filePath = path.resolve(__dirname, "../../src/instructions", rutaArchivo);
    // console.log(`\n=== Instrucciones de ${rutaArchivo} ===`);
    const contenido = fs.readFileSync(filePath, "utf-8");
    console.log("\n" + contenido + "\n");
  } catch (error) {
    console.log("No se pudo leer el archivo. Error en la ruta.\n");
  }
}

export { verInstrucciones };
