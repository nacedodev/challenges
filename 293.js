//ARTROPODOS

/*ENTRADA: La entrada comienza con un número indicando la cantidad de casos de prueba que deberán procesarse. Cada caso de prueba está compuesto por cinco números. El primero indica el número de insectos (6 patas), el segundo el número de arácnidos (8), el tercero el número de crustáceos (10). El cuarto y el quinto representan, respectivamente, el número de escolopendras y el número de anillos de las mismas (todas tienen el mismo). Recuerda que las escolopendras tienen 2 patas por anillo.*/

/*SALIDA: Para cada caso de prueba, el programa escribirá el número de patas. Se garantiza que en ningún caso este número será mayor que 1.000.000.000.*/



const procesar = contenido => {
  input = contenido.trim().split("\n")
  
  const numCasos = input.shift();
  const casos = input.map((linea) => linea.split(" ").map(Number));
  console.log(casos)
  
  contarPatas(casos)
}

function contarPatas(casos){
  
    casos.map(casos => {
    const insects = casos[0];
    const aracnids = casos[1];
    const crustaceans = casos[2];
    const ciempies = casos[3];
    const segments = casos[4];

    const totalLegs =
      insects * 6 +
      aracnids * 8 +
      crustaceans * 10 +
      ciempies * segments * 2;
    
    console.log( totalLegs <= 1_000_000_000 ? totalLegs : "Too many legs")
  });
}

ficheros = ["/Users/nacho/js/challenges/doc.txt"]

ficheros.forEach( fichero => {
	fetch(fichero)	//CARGA EL FICHERO
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(procesar)		//PASA EL TEXTO A PROBABILIDAD
  })