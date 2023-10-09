//DATOS DE ENTRADA: FICHERO DE TEXTO CON VARIAS LINEAS , CADA LINEA ES UNA VENTA DE LA EMPRESA
/* fechaVenta:
  refProducto:
  importe:
*/
/* Crear una funcion procesarVentas(contenido) 
  return año (2000 - 2020):
          referencias de ese año
  */

/*OPCION1: TEXTO
 OPCION2: 1 MAPA CUYA CLAVE SEA EL AŃO Y EL VALOR QUE VA EN EL MAPA SEA UN OBJETO QUE CONTENGA VENTAS (VENTAS TOTALES) Y OTRO QUE SON REFERENCIAS (ARRAY DE TEXTO CON LAS REFERENCIAS)
 OPCION3: ADEMAS IDENTIFICAR EL DIA DE LA SEMANA CON MAS VENTAS
 */

// let ficheros = ['d1.txt', 'd2.txt', 'd3.txt']

const procesarVentas = contenido => {
  input = contenido.trim().split("\n")
  console.log(input.length)
} 




let ficheros = ['/Users/nacho/js/challenges/doc.txt'];
// Carga de ficheros de datos de entrada
ficheros.forEach(fichero => {
    fetch(fichero)   // Carga el fichero
        .then(respuesta => respuesta.text())   // Saca el texto
        .then(procesarVentas)   // Pasa el texto a funcion1
});