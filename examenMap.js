// NACHO ACEDO ALVAREZ

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
    throw Error('El archivo de entrada está vacío.');
  }

  const lineas = entrada.split('\n');
  const ventasPorAño = new Map();
  const ventasPorDiaSemana = {
    0: 0, // Domingo
    1: 0, // Lunes
    2: 0, // Martes
    3: 0, // Miércoles
    4: 0, // Jueves
    5: 0, // Viernes
    6: 0, // Sábado
  };

  lineas.forEach((linea, indice) => {
    const partes = linea.split('\t');

    if (partes.length !== 3) {
      throw Error(`Error en la línea ${indice + 1}: Formato de línea incorrecto: ${linea}`);
    }

    const fechaPartes = partes[0].split('/');

    if (fechaPartes.length !== 3) {
      throw Error(`Error en la línea ${indice + 1}: Fecha mal formateada: ${partes[0]}`);
    }

    const año = parseInt('20' + fechaPartes[2], 10); // Agregar "20" al año
    const referencia = partes[1].split(': ')[1];
    const importeString = partes[2].replace(' €', '').replace(/\./g, '').replace(',', '.');

    if (isNaN(año) || año < 2000 || año > 2020) {
      throw Error(`Error en la línea ${indice + 1}: Año inválido: ${año}`);
    }

    if (!referencia || referencia.trim() === '') {
      throw Error(`Error en la línea ${indice + 1}: Falta la referencia del producto.`);
    }
    // Verificar si importeString es un número válido antes de convertirlo
    if (isNaN(importeString)) {
      throw Error(`Error en la línea ${indice + 1}: Importe no es un número válido: ${importeString}`);
    }

    const importe = parseFloat(importeString);
    const fecha = new Date(partes[0]);
    const diaSemana = fecha.getDay();

    if (!ventasPorAño.has(año)) {
      ventasPorAño.set(año, { ventas: 0, referencias: [] });
    }

    const añoActual = ventasPorAño.get(año);
    añoActual.ventas += importe;
    añoActual.referencias.push(referencia);
    
    // Actualizar ventas por día de la semana
    ventasPorDiaSemana[diaSemana] += importe;
  });

  if (ventasPorAño.size === 0) {
    throw Error('No se encontraron datos válidos en el archivo.');
  }

  let diaSemanaMasVentas = 0;
  let ventasMaximas = ventasPorDiaSemana[0];

  for (let dia = 1; dia <= 6; dia++) {
    if (ventasPorDiaSemana[dia] > ventasMaximas) {
      diaSemanaMasVentas = dia;
      ventasMaximas = ventasPorDiaSemana[dia];
    }
  }

  const diaSemanaNombres = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  console.log(`El dia de la semana con más ventas es: ${diaSemanaNombres[diaSemanaMasVentas]}`);
  console.log(ventasPorAño)
}

ficheros = ["/Users/nacho/js/challenges/doc.txt"];

ficheros.forEach((fichero) => {
  fetch(fichero) //CARGA EL FICHERO
    .then((respuesta) => respuesta.text()) //SACA EL TEXTO
    .then(procesarVentas); //LO ENVIA A LA FUNCION PROCESAR
});
