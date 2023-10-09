// ESCUDOS DEL EJERCITO ROMANO

/* ENTRADA: La entrada estará compuesta de múltiples casos de prueba, cada uno en una línea.
Cada caso de prueba indicará el número de legionarios en el ejército que se quiere poner en formación (un ejército tiene como mucho diez millones de legionarios). La entrada terminará con un ejército de cero legionarios, que no provocará salida.*/

/* SALIDA: Para cada caso de prueba se escribirá una línea que indicará el número de escudos mínimo que necesitamos para cumplir las restricciones del general.*/

const MAXSOLDADOS = 1000000

ficheros = ["/Users/nacho/js/challenges/doc.txt"];

const procesar = contenido => {

  index = contenido.trim().split("\n").map(Number)
  const numCasos = index.findIndex(n => n === 0)
  index.pop()
  if(index.some(n => n > MAXSOLDADOS))
      throw Error("Ejercito demasiado grande")
  
  for(let i = 0;i < numCasos;i++){
  let soldados = index[i]
  let totalEscudos = 0
    let lado = []
    while(soldados > 0)
      {
      lado.push(mayorCuadrado(soldados))
        
      soldados -= (mayorCuadrado(soldados) * mayorCuadrado(soldados))
      }
    
    // CREAMOS UN ARRAY COMPUESTO POR LOS ESCUDOS PARA CADA VALOR DE LADO DEL CASO , Y LOS SUMAMOS ENTRE ELLOS PARA OBTENER EL TOTAL
      totalEscudos = lado.map(n => calcularEscudos(n)).reduce((a, b) => a + b, 0); 

      console.log(totalEscudos.toString())
  }
}

const mayorCuadrado = num => {
  
  let potencia = 1
  let resultado = 1
  
  while(resultado <= num)
    {
      potencia++
      resultado = Math.pow(potencia,2)
    }
  potencia--
  
  return potencia
}

const calcularEscudos = lado => {
  let escudos = 0
  if(lado === 1){
    escudos += 5
      return escudos
  }
  
  //CALCULAMOS LOS ESCUDOS EN LAS ESQUINAS
  escudos += 4 * 3;
  
  //CALCULAMOS LOS ESCUDOS EN LOS FLANCOS
  escudos += 2 *(4 * (lado - 2))
  
  //CALCULAMOS LOS ESCUDOS EN EL INTERIOR
  escudos += Math.pow(lado - 2, 2);
  
  return escudos
}

ficheros.forEach((fichero) => {
  fetch(fichero) //Carga el ficherito
    .then((respuesta) => respuesta.text()) //Saca el texto
    .then(procesar); //pasa el texto a funcion1
});