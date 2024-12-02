import * as fs from "fs";

export function exportarResultados(resultados: string[]): void {
 //validacion para ver si hay resultados
  if(resultados.length === 0) {
    console.log("No has jugado a ningun juego, no tienes resultados para exportar.");
    return;
  }

  const contenidoAexportar = resultados.join("\n");  // para separar los resultados
  fs.writeFileSync("resultados.txt", contenidoAexportar);     //to do export números de resultado
  console.log("Resultados exportados..."); 
}
