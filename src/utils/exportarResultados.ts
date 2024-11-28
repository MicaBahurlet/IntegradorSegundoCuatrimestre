import * as fs from "fs";

export function exportarResultados(resultados: string[]): void {
 //validacion para ver si hay resultados
  if(resultados.length === 0) {
    console.log("No has jugado a ningun juego, no tienes resultados para exportar.");
    return;
  }

  const contenido = resultados.join("\n");  // para separar los resultados
  fs.writeFileSync("resultados.txt", contenido);
  console.log("Resultados exportados..."); 
}
