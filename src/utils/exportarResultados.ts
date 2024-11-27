import * as XLSX from "xlsx";
import * as fs from "fs";

export function exportarResultados(resultados: string[]): void {
  const opcion = require("readline-sync").keyInSelect(
    ["Excel (.xlsx)", "Texto (.txt)"],
    "Seleccione el formato de exportación:"
  );

  if (opcion === 0) {
    const hoja = XLSX.utils.json_to_sheet(resultados.map((r, i) => ({ ID: i + 1, Resultado: r })));
    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Resultados");
    XLSX.writeFile(libro, "resultados.xlsx");
    console.log("Resultados exportados a 'resultados.xlsx'.");
  } else if (opcion === 1) {
    const contenido = resultados.join("\n");
    fs.writeFileSync("resultados.txt", contenido);
    console.log("Resultados exportados a 'resultados.txt'.");
  } else {
    console.log("Operación cancelada.");
  }
}
