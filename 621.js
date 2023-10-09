// LA OTRA PAGINA

/*INPUT: 
    3
    2
    10
    11
  OUTPUT:
    3
    11
    10
*/

const procesar = contenido => {
  const casos = contenido.trim().split("\n").map(Number)
  console.log(casos)
  numCasos = casos.shift()
  
  for(let page of casos){
    console.log(page % 2 == 0 ? page + 1 : page - 1);
  }
}
 
ficheros = ["/Users/nacho/js/challenges/doc.txt"]

ficheros.forEach( fichero => {
	fetch(fichero)	//CARGA EL FICHERO
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(procesar)		//PASA EL TEXTO A PROBABILIDAD
  })