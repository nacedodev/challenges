// NOCHEVIEJA

/*INPUT: consiste en una serie de horas, cada una en una línea. Cada hora está formada por las horas y los minutos separados por : y utilizando siempre dos dígitos. Se utiliza una representación en formato 24 horas (es decir, desde 00:00 a 23:59).
La entrada termina cuando la hora es la medianoche (00:00), que no debe procesarse.*/

/*OUTPUT: Para cada caso de prueba se mostrará una línea con el número de minutos que faltan para medianoche.*/

/* EJEMPLO: 
        INPUT:
          23:45
          21:30
          00:01
          00:00
        OUTPUT:
          15
          150
          1439 */
ficheros = ["/Users/nacho/js/challenges/doc.txt"]

const MINUTOSXDIA = 1440
const MIDNIGHT = '00:00'


const procesar = contenido => {
  console.log(contenido)
  
  const lineas = contenido.trim().split('\n');
  console.log(lineas)// DICIDE EL CONTENIDO ENLINEAS , UNA POR CASO
    lineas.forEach(linea => {
      if(linea == MIDNIGHT)
        return
      const [horas, minutos] = linea.split(':').map(Number);
      const minutosHastaMN = MINUTOSXDIA - (horas * 60 + minutos)
      console.log(minutosHastaMN)
  }               
  );
};




ficheros.forEach( fichero => {
	fetch(fichero)	// CARGA EL FICHERO 
		.then(respuesta => respuesta.text())	// SACA EL TEXTO
		.then(procesar)		//PASA EL TEXTO A LA FUNCION PROCESAR
})