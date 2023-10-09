// FIN DE MES

/* INPUT
    4
    100 -10
    -10 -100
    -10 100
    100 -1000
  OUTPUT:
    SI
    NO
    SI
    NO
*/


const procesar = contenido => {
   const lineas = contenido.trim().split("\n")
   console.log(lineas)
  const numCasos = lineas.shift();
  console.log(numCasos)
  
  for(linea of lineas){
    const[saldo , cambio] = linea.split(" ").map(Number)
    console.log(saldo + cambio > 0 ? "SI" : "NO")
  }
  
}

ficheros = ["/Users/nacho/js/challenges/doc.txt"]

ficheros.forEach( fichero => {
	fetch(fichero)	//CARGA EL FICHERO
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(procesar)		//PASA EL TEXTO A PROBABILIDAD
  })