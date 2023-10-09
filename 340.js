//CERILLAS

/*
  INPUT:
    2
    1 1  
    3 3
  OUTPUT:
    4
    24
*/

const procesar = contenido => {
  lineas = contenido.trim().split("\n")
  numCasos = lineas.shift()
  console.log(lineas)
  
  for(linea of lineas){
    let [horizontal,vertical] = linea.split(" ").map(Number)
    
    console.log(vertical * (horizontal + 1) + horizontal * (vertical + 1))
  }
}


ficheros = ["/Users/nacho/js/challenges/doc.txt"]

ficheros.forEach( fichero => {
	fetch(fichero)	//CARGA EL FICHERO
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(procesar)		//PASA EL TEXTO A PROBABILIDAD
  })