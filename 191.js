// LOS PROBLEMAS DE SER RICO

/*ENTRADA: comienza con un número no negativo indicando el número de casos de prueba que vendrán a continuación. Por cada caso de prueba se proporcionará, en una única línea, la descripción del acuario con tres números: el número de compartimentos del acuario (>0), la capacidad en litros del más grande (>0), y la diferencia de litros entre dos compartimentos adyacentes (≥0). Ninguno de los tres números será mayor de 10.000.*/

/* SALIDA: Para cada caso de prueba de la entrada, el programa escribirá el número de litros de agua mineral que debieron comprarse para llenar el acuario.*/

/* 
   INPUT:
    3
    5 300 10
    4 400 20
    3 500 30
   OUTPUT:
    1400
    1480
    1410
*/

ficheros = ["/Users/nacho/js/challenges/doc.txt"]


const procesar = contenido => {
  input = contenido.trim().split('\n')
  const numCasos = Number(input.shift())
  
  const output = Array(numCasos).fill(0)
  console.log(output)

  for(let i = 0;i < numCasos;i ++){
    const [compartimentos,capacidad,diferencia] = input[i].split(' ').map(Number)
    let j = 0
    if(compartimentos <= 0 || capacidad <= 0 || diferencia < 0)
      throw Error("Los valores introducidos no son correctos")
    
    while(j < compartimentos){
      output[i] += capacidad - j * diferencia
      j++
    }
    console.log(output[i].toString())
  }
  
}




ficheros.forEach( fichero => {
	fetch(fichero)	// CARGA EL FICHERO 
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(procesar)		// PASA EL TEXTO A LA FUNCION PROCESAR
})