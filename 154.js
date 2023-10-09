// CUAL ES LA SIGUIENTE MATRICULA?

/*ENTRADA: La entrada consta de una serie de casos de prueba. Cada uno aparece en una línea, conteniendo una combinación de números y letras (en mayúscula) correspondiente a una matrícula. Consulta el ejemplo para más información. El último caso de prueba, que no deberá procesarse, contendrá la última matrícula posible, 9999 ZZZ.*/

/*SALIDA: Para cada caso de prueba se mostrará una línea en la que aparecerá la matrícula que va a continuación de la dada, con las letras en mayúscula.*/ 

/* EJEMPLO:
    INPUT: 
      1234 BBB
      9999 BBZ
      9999 BBD
      9999 ZZZ
    OUTPUT:
      1235 BBB
      0000 BCB
      0000 BBF*/

ficheros = ["/Users/nacho/js/challenges/doc.txt"]

const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function procesar(contenido) {
  const lineas = contenido.trim().split('\n');
  const numCasos = lineas.findIndex(n => n === '9999 ZZZ')
  lineas.pop()
  console.log(lineas)
  
  for (const linea of lineas) {
    let [numeros] = linea.split(' ').map(Number)
    //let [numeros, letras] = linea.split(' ');
    let [,letras] = linea.split(' ')
  
    
    if (numeros === 9999 && letras === 'ZZZ') {
    return '0000 AAA';
  }
    
    if(numeros === 9999){
      numeros = '0000'
      for(let i = letras.length;i >= 0;i--){
        if(letras[i] === 'Z'){
          letras[i] = 'A'
          letras[i - 1] = abecedario.indexOf(letras[i - 1] + 1)
          console.log(letras[i - 1])
          
        }
      }
    }
    else
      numeros++
      numeros = numeros.toString()
    
      
  }
}

ficheros.forEach( fichero => {
	fetch(fichero)	//CARGA EL FICHERO
		.then(respuesta => respuesta.text())	//SACA EL TEXTO
		.then(procesar)		//PASA EL TEXTO A PROBABILIDAD
  })