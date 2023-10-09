// LA LOTERIA DE LA PEÑA ATLETICA

/* ENTRADA: La entrada comienza con una línea que contiene el número de casos de prueba que aparecen a continuación.
Cada caso de prueba, que se compone de dos líneas, se corresponde con una administración de lotería. La primera línea tiene un único entero con el número de décimos distintos que tiene la administración (como mucho 10.000), mientras que la segunda línea contiene la lista con los números de cada décimo (números entre 0 y 99.999).*/

/* SALIDA: Por cada caso de prueba aparecerá una línea independiente con el número de décimos que la peña podría comprar (si el presupuesto se lo permite) de esa administración.(pares)*/

/* 
   INPUT:
    1
    10
    1 2 3 4 5 6 7 8 9 10
   OUTPUT:
    5
*/

const MAXDISPONIBLES = 10000
const MAXNUM = 99000

ficheros = ["doc.txt"];

const procesar = contenido => {
  index = contenido.trim().split("\n")
  
  let numCasos = Number(index.shift()) //EXTRAEMOS EL VALOR NUMERICO DE LA PRIMERA LINEA DEL ARRAY Y LA ELIMINAMOS
  let buy = 0
  
 const numsDisponibles = Number(index[0])
 if(numsDisponibles > MAXDISPONIBLES)
   throw Error("Demasiados numeros distintos en una misma administracion")
 const nums = index[1].split(" ").map(Number) 
   if(nums < 0 || nums > MAXNUM)
     throw Error("Ese numero no existe")
 
  for(const num of nums){
    if(num % 2 === 0)
      buy++
  }
  console.log(buy.toString())
}



ficheros.forEach((fichero) => {
    fetch(fichero) //CARGA EL FICHERO 
    .then((respuesta) => respuesta.text()) //SACA EL TEXTO
    .then(procesar); //PASA EL TEXTO A PROCESAR
});