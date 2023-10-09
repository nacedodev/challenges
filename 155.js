// PERIMETRO DE UN RECTANGULO

/* ENTRADA: La entrada consta de una serie de casos de prueba. Cada uno contiene, en una sola línea, la definición de un rectángulo. Un rectángulo se especifica proporcionando las coordenadas de la esquina superior derecha. Se debe considerar que la esquina inferior izquierda está siempre en el origen de coordenadas, es decir en (0, 0). Se garantiza que la longitud de un lado no superará 108.*/

/* SALIDA: Para cada caso de prueba se escribirá, en una línea independiente, el perímetro del rectángulo.*/

/* 
   INPUT:
    3 2
    5 4
    -9 3
   OUTPUT:
    10
    18
*/

ficheros = ["/Users/nacho/js/challenges/doc.txt"];

const procesar = contenido => {
  index = contenido.trim().split("\n")
  console.log(index)
  const numCasos = index.length 

  for(let i = 0;i < numCasos;i++){
    const [base , altura] = index[i].split(" ").map(Number)
    const numeros = [base,altura]
    
    if(numeros.some(n => n <= 0))
      return
    else if(numeros.some(n => n > Math.pow(10,8)))
      throw Error("")
    
    console.log((base * 2 + altura * 2).toString())
  }
}


ficheros.forEach((fichero) => {
  fetch(fichero) //CARGA EL FICHERO
    .then((respuesta) => respuesta.text()) //SACA EL TEXTO
    .then(procesar); //PASA EL TEXTO A PROCESAR
});