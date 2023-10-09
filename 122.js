//AVITUALLAMIENTO EN LAS ETAPAS CICLISTAS

/* ENTRADA: La entrada está compuesta de múltiples etapas, cada una en una línea. Una etapa está formada por una secuencia de al menos dos números mayores o iguales que cero separados por espacios. Cada uno de esos números representa la altura sobre el nivel del mar al principio del kilómetro, siendo el primer número la altura al principio del primer kilómetro (P.K. 0), el segundo al principio del segundo kilómetro, etc. Cada etapa termina con un -1 que no debe tenerse en cuenta en el cálculo. La última altura válida leída es la altura a la que se encuentra la meta.
La entrada termina con una "etapa vacía", es decir una línea que contiene únicamente un -1..*/

/*SALIDA: Para cada etapa se escribirá una línea donde aparecerán dos números separados por un espacio: el punto kilométrico donde colocar el punto de avituallamiento y el número de kilómetros llanos que tienen por delante.*/


const procesar = contenido => {
  const casos = contenido.trim().split("\n")
  const numCasos = casos.findIndex(n => n === '-1')
  casos.pop()
  console.log(casos)
  console.log(numCasos)
  
  for(caso of casos){
    const etapa = caso.split(" ").map(Number)
    const numKm = etapa.findIndex(n => n === -1)
    etapa.pop()
    console.log(etapa)
      let km = etapa[0]
      let llano = false
      let cont = 0
      let pk = 0
    for(let i = 1;i < numKm;i++){
      if(km === etapa[i]){
        pk = i
        llano = true;
        cont++
      }else{
        cont = 0
      }
    }
  }
  
}



ficheros = ["/Users/nacho/js/challenges/doc.txt"]

ficheros.forEach( fichero => {
	fetch(fichero)	//CARGA EL FICHERO
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(procesar)		//PASA EL TEXTO A PROBABILIDAD
  })