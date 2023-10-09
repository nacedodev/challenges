//QUE LADO DE LA CALLE?

/*ENTRADA: El programa recibirá, por la entrada estándar, un conjunto de casos de prueba, cada uno en una línea. Cada caso de prueba estará compuesto de un número de vivienda. Se garantiza que nunca será mayor que 1.000.
El último caso, que no deberá procesarse, será el número 0.*/

/*SALIDA: Para cada caso de prueba el programa escribirá "IZQUIERDA" (sin las comillas) si la vivienda está situada a la izquierda de la calle, y "DERECHA" si está a la derecha.*/

/* 
   INPUT:
    3
    10
    41
    0
   OUTPUT:
    IZQUIERDA
    DERECHA
    IZQUIERDA
*/

ficheros = ["/Users/nacho/js/challenges/doc.txt"];

const procesar = contenido => {
  index = contenido.trim().split("\n").map(Number)
  numCasos = index.findIndex(n => n === 0)
  if(index.some(n => n > 1000)) // EN ESTE CASO PODRIA USAR .MAP TAMBIEN
    throw Error("No existe una calle tan larga")
  

  index.pop()
  console.log(index)
  
  const mensajes = []
  
  for(let i = 0; i < numCasos;i++){
    const mensaje = index[i] % 2 !== 0 ? "IZQUIERDA" : "DERECHA" //TERNARIA QUE DEVUELVE IZQUIERA SI EL NUMERO ES IMPAR Y DERECHA SI ES PAR , NOS AHORRAMOS UN IF ELSE
    console.log(mensaje)
  }
}

ficheros.forEach((fichero) => {
  fetch(fichero) //CARGA EL FICHERO
    .then((respuesta) => respuesta.text()) //SACA EL TEXTO
    .then(procesar); //PASA LA FUNCION A PROCESAR
});