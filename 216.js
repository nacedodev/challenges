//GOTERAS

/*ENTRADA: estará compuesta de un primer número indicando cuántos casos de prueba vendrán a continuación. Cada caso de prueba será un número mayor que cero con el número de gotas que entran en el cubo.*/

/* SALIDA: Para cada caso de prueba, el programa escribirá en una línea el tiempo máximo que puedes estar sin cambiar el cubo en el formato HH:MM:SS, donde HH indica el número de horas, MM el número de minutos y SS el número de segundos.
Ningún cubo es tan grande como para poder estar más de un día completo sin cambiarse.*/

/* 
   INPUT:
    3
    70
    3600
    3661
   OUTPUT:
    00:01:10
    01:00:00
    01:01:01
*/

ficheros = ["/Users/nacho/js/challenges/doc.txt"];

const procesar = contenido => {
  input = contenido.trim().split("\n").map(Number)
  const numCasos = input.shift()//EXTRAEMOS EL NUMERO DE CASOS DE LA PRIMERA LINEA DEL INPUT Y A SU VEZ LA ELIMINAMOS DEL ARRAY 
  
 for(let i = 0; i < numCasos;i++){
   let horas = Math.floor(input[i] / 3600)
   let minutos = Math.floor((input[i] % 3600) / 60)
   let segundos = input[i] % 60
   
   if(horas > 23)
     throw Error("Ningun cubo es tan grande como para poder estar mas de un dia completo sin cambiarse")
   
   console.log(`${formatearNum(horas)}:${formatearNum(minutos)}:${formatearNum(segundos)}`)
 }
}

const formatearNum = num => num < 10 ? '0' + num : num //ESTA FUNCION SE ENCARGA DE AÑADIR UN 0 A LA IZQUIERA SI EL NUMERO ES MENOR QUE 10 PARA AJUSTARSE AL FORMATO DE SALIDA


ficheros.forEach((fichero) => {
  fetch(fichero) //CARGA EL FICHERO 
    .then((respuesta) => respuesta.text()) //SACA EL TEXTO
    .then(procesar); //PASA EL TEXTO A PROCESAR
});