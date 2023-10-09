/*
Este código maneja los siguientes casos de error:

Archivo de entrada vacío.
Año inválido (fuera del rango 2000-2020).
Falta la referencia del producto.
Importe no es un número válido.
Fecha mal formateada.
Formato de línea incorrecto (no contiene tres partes separadas por tabuladores).
No se encontraron datos válidos en el archivo.
*/

function procesarVentas(entrada) {
  if (!entrada || entrada.trim() === '') {
    return 'El archivo de entrada está vacío.';
  }

  const lineas = entrada.split('\n');
  const ventasPorAño = {};

  lineas.forEach((linea, indice) => {
    const partes = linea.split('\t');
    if (partes.length === 3) {
      const fechaPartes = partes[0].split('/');
      if (fechaPartes.length === 3) {
        const año = parseInt('20' + fechaPartes[2], 10); // Agregar "20" al año
        const referencia = partes[1].split(': ')[1];
        const importeString = partes[2].replace(' €', '').replace(/\./g, '').replace(',', '.');

        if (isNaN(año) || año < 2000 || año > 2020) {
          return `Error en la línea ${indice + 1}: Año inválido: ${año}`;
        }

        if (!referencia || referencia.trim() === '') {
          return `Error en la línea ${indice + 1}: Falta la referencia del producto.`;
        }

        // Verificar si importeString es un número válido antes de convertirlo
        if (isNaN(importeString)) {
          return `Error en la línea ${indice + 1}: Importe no es un número válido: ${importeString}`;
        }

        const importe = parseFloat(importeString);

        if (!ventasPorAño[año]) {
          ventasPorAño[año] = { total: 0, referencias: [] };
        }

        ventasPorAño[año].total += importe;
        ventasPorAño[año].referencias.push(referencia);
      } else {
        return `Error en la línea ${indice + 1}: Fecha mal formateada: ${partes[0]}`;
      }
    } else {
      return `Error en la línea ${indice + 1}: Formato de línea incorrecto: ${linea}`;
    }
  });

  if (Object.keys(ventasPorAño).length === 0) {
    return 'No se encontraron datos válidos en el archivo.';
  }

  let salida = '';
  for (let año = 2000; año <= 2020; año++) {
    if (ventasPorAño[año]) {
      salida += `Año ${año}: ${Math.round(ventasPorAño[año].total)}€\n`; // Redondear el total
      salida += `\tRefs: ${ventasPorAño[año].referencias.join(', ')}\n`;
    }
  }

  console.log(salida)
}

ficheros = ["/Users/nacho/js/challenges/doc.txt"];

ficheros.forEach((fichero) => {
  fetch(fichero) //CARGA EL FICHERO
    .then((respuesta) => respuesta.text()) //SACA EL TEXTO
    .then(procesarVentas); //LO ENVIA A LA FUNCION PROCESAR
});